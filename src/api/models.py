from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean, unique=False, nullable=False)
    firstname = db.Column(db.String(250), nullable=False)
    lastname = db.Column(db.String(250), nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
   
class Plants(db.Model):
   # __tablename__="plant_table"
    id=db.Column(db.Integer,primary_key=True)
    common_name=db.Column(db.String(250),nullable=False)
    scientific_name=db.Column(db.String(250),nullable=True)
    other_name=db.Column(db.String(250),nullable=True)
    default_image=db.Column(db.String(250),nullable=True)
    watering=db.Column(db.String(250),nullable=True)

    def __repr__(self):
        return f'<Plants {self.common_name}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "common_name": self.common_name,
            "scientific__name": self.scientific_name,
            "other_name":self.other_name,
            "default_image":self.default_image,
            "watering":self.watering,
        }