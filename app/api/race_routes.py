from flask import Blueprint
import requests
from flask import request
import json
from random import randint

race_routes=Blueprint('races', __name__)

@race_routes.route('/', methods=["GET"])
def get_races():
    res = requests.get(
        f"https://www.dnd5eapi.co/api/races")
    data = res.json()
    return data


@race_routes.route('/<string:race>/', methods=["GET"])
def get_single_race(race):

    response = requests.get(
        f"https://www.dnd5eapi.co/api/races/{race}")

    return response.json()
