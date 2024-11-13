"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, jsonify,request,url_for,send_from_directory,abort,make_response
from flask_migrate import Migrate
from flask_swagger import swagger
from api.utils import APIException, generate_sitemap
from api.models import db,User
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS
import re
import hashlib
# from models import Person

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(
        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)


# Configura la extensión Flask-JWT-Extended
app.config["JWT_SECRET_KEY"] = "super19"  # ¡Cambia las palabras "super-secret" por otra cosa!
jwt = JWTManager(app)

CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
def validate_password(password):  
    reg = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{6,20}$"
     
    # compiling regex
    pat = re.compile(reg)
     
    # searching regex                 
    return re.search(pat, password)  

@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints


@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file


@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response

@app.route('/users', methods=['GET'])
def get_users():
    """logged_user = get_jwt_identity();
    user = User.query.filter_by(username=logged_user).first()"""
    users = User.query.all()
    users = list(map(lambda x: x.serialize(), users))
    response_body = {
    "users":users
    }
    return jsonify(response_body), 200



@app.route('/signup', methods=['POST'])
def handle_signup():
    data =  request.json
    existUser = User.query.filter_by(username=data["username"])
    existEmail = User.query.filter_by(email=data["email"])
    
    validemail = re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', data["email"])
    if  (len(list(existUser))==0) and  (len(list(existEmail))==0) and data["username"]!="" and data["email"]!="" and validemail and validate_password(data["password"]) and (data["rpassword"]==data["password"]):
        encodepass = hashlib.sha256(data["password"].encode("utf-8")).hexdigest()
        user1 = User(email=data["email"],username=data["username"], password= encodepass, is_active=False)
        db.session.add(user1)
        db.session.commit()
        response_body={}
        response_body["message"]="User successfuly created"
        return make_response(jsonify(response_body),200)
    else:
        response_error={"errors":{}}
        if not(len(list(existUser))==0):
            response_error["errors"]["User"] = "User already exist"
        if not(len(list(existEmail))==0):
            response_error["errors"]["Email"] = "Email already in use"
        if  data["username"]=="":
            response_error["errors"]["UserEmpty"] = "Empty username"  
        if  data["email"]=="":
            response_error["errors"]["EmailEmpty"] = "Empty email"    
        if  data["password"]=="":
            response_error["errors"]["PasswordEmpty"] = "Empty password"   
        if not validemail and not data["email"]=="":
            response_error["errors"]["InvaliEmail"] = "Invalid email"   
        if not validate_password(data["password"]):
            response_error["errors"]["InvaliPassword"] = "The password must have at least 8 characters,special symbols, number, uppercase and lowercase."     
        if not (data["rpassword"]==data["password"]) and validate_password(data["password"]):
            response_error["errors"]["PasswordMissMatch"] = "Passwords do not match."           
        if not response_error=={}:
            resp=make_response(jsonify(response_error),400)
            return resp    



@app.route('/login', methods=['POST'])
def handle_login():
    encodepass = hashlib.sha256(request.json["password"].encode("utf-8")).hexdigest()
    user = User.query.filter_by(username=request.json["username"], password= encodepass).first()
    useremail = User.query.filter_by(email=request.json["username"], password=encodepass).first()
    if user is not None:
        access_token=create_access_token(identity=user.username)
        return jsonify({"token":access_token,"user":user.username,"id":user.id}),200
    elif useremail is not None:
        access_token=create_access_token(identity=useremail.username)
        return jsonify({"token":access_token,"user":useremail.username,"id":useremail.id}),200
    else:       
        return make_response(jsonify({"error":"Missing or Incorrect Credentials"}),401) 
        



@app.route('/user/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get([id])
    db.session.delete(user)
    db.session.commit()
    users = User.query.all()
    users = list(map(lambda x: x.serialize(), users))
    response_body = {
    "users":users
    }
    return jsonify(response_body), 200
# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
