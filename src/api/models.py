from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    firstname = db.Column(db.String(250), nullable=False)
    lastname = db.Column(db.String(250), nullable=False)
    faveplant = db.relationship("PlantFavorites")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "firstname": self.firstname,
            "lastname": self.lastname
            # do not serialize the password, its a security breach
        }

class PlantFavorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userid = db.Column(db.Integer, db.ForeignKey("user.id"))
    plantid = db.Column(db.Integer, db.ForeignKey("plant.id"))
    
    def __repr__(self):
        return f'<PlantFavorites {self.userid}>'

    def serialize(self):
        return {
            "id": self.id,
            "usierid": self.userid,
            "plantid": self.plantid
            # do not serialize the password, its a security breach
        }
