from .db import db
# from werkzeug.security import generate_password_hash, check_password_hash
# from flask_login import UserMixin

class Character(db.Model):
  __tablename__ = 'characters'

  id = db.Column(db.Integer, primary_key = True)
  user_id = db.Column(db.Integer, nullable=False)
  name = db.Column(db.String(100))
  alignment = db.Column(db.String(50))
  race = db.Column(db.String(50))
  background = db.Column(db.String(50))
  charClass=db.Column(db.String(50))
  charStats=db.Column(db.PickleType,nullable=False)
  spellChoices=db.Column(db.PickleType,)
  cantripChoices=db.Column(db.PickleType,)
  equipment=db.Column(db.PickleType,)
  weapons=db.Column(db.PickleType,)

  def to_dict(self):
    return {
      "id": self.id,
      "user_id":self.user_id,
      "alignment":self.alignment,
      "race":self.race,
      "background":self.background,
      "charClass":self.charClass,
      "charStats":self.charStats,
      "spellChoices":self.spellChoices,
      "cantripChoices":self.cantripChoices,
      "equipment":self.equipment,
      "weapons":self.weapons
    }
