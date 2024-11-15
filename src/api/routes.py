"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, PlantFavorites
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/library', methods=['GET'])
def get_favorite_plant_list():
    favorite_plant_list = PlantFavorites.query.all()
    favorite_plant_list_sr = [x.serialize() for x in favorite_plant_list]
    

    return jsonify(favorite_plant_list_sr), 200


