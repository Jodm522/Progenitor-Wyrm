from flask import Blueprint
import requests
from flask import request
import json
from random import randint

class_routes=Blueprint('classes', __name__)

@class_routes.route('/', methods=["GET"])
def get_classes():
    res = requests.get(
        f"https://www.dnd5eapi.co/api/classes")
    data = res.json()
    return data


@class_routes.route('/<string:class_to_get>/', methods=["GET"])
def get_single_class(class_to_get):

    response = requests.get(
        f"https://www.dnd5eapi.co/api/classes/{class_to_get}")

    return response.json()
