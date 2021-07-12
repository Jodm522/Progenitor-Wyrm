from flask import Blueprint, jsonify, session, request
from app.models import Character, db
import json
import jsonpickle
# from app.forms import LoginForm


character_routes = Blueprint('characters', __name__)



@character_routes.route('/create', methods=['POST'])
def create_char():

    data=json.loads(request.data.decode('utf-8'))
    user_id=data["user_id"],
    name=data["name"],
    alignment=data["alignment"],
    race=data["race"],
    background=data["background"]
    charClass=data["charClass"],
    charStats=data["charStats"],
    spellChoices=data["spellChoices"],
    cantripChoices=data["cantripChoices"],
    equipment=data["equipment"],
    weapons=data["weapons"]

    newCharacter=Character(
    user_id=user_id,
    name= name,
    alignment=alignment,
    race=race,
    background=background,
    charClass=charClass,
    charStats=charStats,
    spellChoices=spellChoices,
    cantripChoices=cantripChoices,
    equipment=equipment,
    weapons=weapons
    )

    db.session.add(newCharacter)
    db.session.commit()
    return newCharacter.to_dict()

@character_routes.route('/users/<string:userId>', methods=['GET'])
def getUserCharacters(userId):
    characters=Character.query.filter_by(user_id=userId).all()
    res= { "characters":characters}
    pickledRes = jsonpickle.encode(res, unpicklable=False)
    return pickledRes


@character_routes.route('/<string:charId>', methods=['GET'])
def getOneCharacter(charId):
    characters=Character.query.filter_by(id=charId).all()
    res= { "characters":characters}
    pickledRes = jsonpickle.encode(res, unpicklable=False)
    return pickledRes

@character_routes.route('/all', methods=['GET'])
def getAllCharacters():
    characters=Character.query.all()
    res= { "characters":characters}
    pickledRes = jsonpickle.encode(res, unpicklable=False)
    return pickledRes

@character_routes.route('delete/<string:charId>', methods=['DELETE'])
def deleteCharacter(charId):

    character=Character.query.filter_by(id=charId).first()

    db.session.delete(character)
    db.session.commit()

    return '',200
