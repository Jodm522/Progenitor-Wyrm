from flask import Blueprint
import requests
from flask import request
import json
from random import randint

details_routes=Blueprint('details', __name__)

@details_routes.route('language//<string:language>/', methods=["GET"])
def get_lang_details(language):
    res= requests.get(f"https://www.dnd5eapi.co/api/languages/{language}")
    return res.json();
