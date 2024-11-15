from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# favorite_plant=db.Table("favorite_plant",
#     db.Column("plant_id", db.Integer, db.ForeignKey("plant_table.id"), primary_key=True),
#     db.Column("user_id", db.Integer, db.ForeignKey("user_table.id"), primary_key=True)
# )


class User(db.Model):
    __tablename__="users"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=False, nullable=False)
    is_active = db.Column(db.Boolean, unique=False, nullable=False)
    firstname = db.Column(db.String(250), nullable=False)
    lastname = db.Column(db.String(250), nullable=False)
    plants = db.relationship("Plant", back_populates="user")
    favorites=db.relationship("Favorite",back_populates="user")

    def __repr__(self):
        return f'<User {self.email}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "firstname": self.firstname,
            "lastname":self.lastname,
            "is_active": self.is_active,
            "plants":[plant.serialize() for plant in self.plants],
            "favorites": [favorite.serialize() for favorite in self.favorites]
            # do not serialize the password, its a security breach
        }
class Favorite(db.Model):
    _tablename_="favorites"
    id=db.Column(db.Integer,primary_key=True)
    user_id=db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    api_plant_id=db.Column(db.Integer, nullable=False)
    common_name=db.Column(db.String(250),nullable=False)
    scientific_name=db.Column(db.String(250),nullable=True)
    other_name=db.Column(db.String(250),nullable=True)
    cycle=db.Column(db.String(250),nullable=True)
    watering=db.Column(db.String(250),nullable=True)
    sunlight=db.Column(db.String(250),nullable=True) 
    default_image_original_url=db.Column(db.String(500),nullable=True)
    default_image_medium_url=db.Column(db.String(500),nullable=True)
    user=db.relationship("User", back_populates="favorites")

    def serialize(self):
        return {
            "id": self.id,
            # Do the same as above for line 38 to 47
        }

class Plant(db.Model):
    __tablename__="plants"
    id=db.Column(db.Integer,primary_key=True)
    common_name=db.Column(db.String(250),nullable=False)
    scientific_name=db.Column(db.String(250),nullable=True)
    other_name=db.Column(db.String(250),nullable=True)
    cycle=db.Column(db.String(250),nullable=True)
    watering=db.Column(db.String(250),nullable=True)
    sunlight=db.Column(db.String(250),nullable=True) 
    default_image_original_url=db.Column(db.String(500),nullable=True)
    default_image_medium_url=db.Column(db.String(500),nullable=True)

    users_id=db.Column(db.Integer, db.ForeignKey("users.id"))
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
    # line 59 through 69 make sure i have it serialized