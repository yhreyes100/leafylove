from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

favorite_plant=db.Table("favorite_plant",
    db.Column("plant_id", db.Integer, db.ForeignKey("plant_table.id"), primary_key=True),
    db.Column("user_id", db.Integer, db.ForeignKey("user_table.id"), primary_key=True)
)


class User(db.Model):
    __tablename__="user_table"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean, unique=False, nullable=False)
    firstname = db.Column(db.String(250), nullable=False)
    lastname = db.Column(db.String(250), nullable=False)
    plants = db.relationship("Plants", back_populates="user")
    favorite_plant=db.relationship("Plants", secondary=favorite_plant, lazy="subquery")

    def __repr__(self):
        return f'<User {self.email}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "is_active": self.is_active,
            "plants":[plant.serialize() for plant in self.plants],
            "favorite_plant": [plant.serialize() for plant in self.favorite_plant]
            # do not serialize the password, its a security breach
        }
   
class Plants(db.Model):
    __tablename__="plant_table"
    id=db.Column(db.Integer,primary_key=True)
    common_name=db.Column(db.String(250),nullable=False)
    scientific_name=db.Column(db.String(250),nullable=True)
    other_name=db.Column(db.String(250),nullable=True)
    default_image=db.Column(db.String(250),nullable=True)
    watering=db.Column(db.String(250),nullable=True)
    user_id=db.Column(db.Integer, db.ForeignKey("user_table.id"))
    user=db.relationship("User", back_populates="plants")

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