from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from config import db, bcrypt
from sqlalchemy.ext.associationproxy import association_proxy

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-_password_hash', '-user_items', 'item_list', 'items', '-email')

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True)
    email = db.Column(db.String, unique=True)
    numpad1 = db.Column(db.String, default=1)
    numpad2 = db.Column(db.String, default=2)
    numpad3 = db.Column(db.String, default=3)
    numpad4 = db.Column(db.String, default=4)
    numpad5 = db.Column(db.String, default=5)
    numpad6 = db.Column(db.String, default=6)
    numpad7 = db.Column(db.String, default=7)
    numpad8 = db.Column(db.String, default=8)
    numpad9 = db.Column(db.String, default=9)
    coins = db.Column(db.Integer, default=0)
    item1 = db.Column(db.Integer)
    item2 = db.Column(db.Integer)

    scores = db.relationship('Score', backref='user', cascade='all, delete-orphan')
    user_items = db.relationship('UserItem', backref='user', cascade='all, delete-orphan')
    items = association_proxy('user_items', 'item')

    @property
    def item_list(self):
        returnlist = []
        for item in self.user_items:
            returnlist.append(item.item_id)
        return returnlist

    _password_hash = db.Column(db.String)

    @hybrid_property
    def password_hash(self):
        return self._password_hash

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))

    @validates('email')
    def validate_email(self, key, email):
        if "@" not in email:
            raise ValueError("Must be a valid email address")
        return email

class Score(db.Model, SerializerMixin):
    __tablename__ = 'scores'

    serialize_rules = ('-user',)

    id = db.Column(db.Integer, primary_key=True)
    score = db.Column(db.Integer)
    date = db.Column(db.DateTime, server_default=db.func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

class Item(db.Model, SerializerMixin):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    category = db.Column(db.String)
    description = db.Column(db.String)
    attack = db.Column(db.Integer)
    defense = db.Column(db.Integer)
    health = db.Column(db.Integer)
    cost = db.Column(db.Integer)

    user_items = db.relationship('UserItem', backref='item')
    users = association_proxy('user_items', 'user')

class UserItem(db.Model, SerializerMixin):
    __tablename__ = 'user_items'

    serialize_rules = ('-user', '-item')

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    item_id = db.Column(db.Integer, db.ForeignKey('items.id'))

class Enemy(db.Model, SerializerMixin):
    __tablename__ = 'enemies'

    id = db.Column(db.Integer, primary_key=True)
    tier = db.Column(db.Integer)
    attack = db.Column(db.Integer)
    health = db.Column(db.Integer)
    points = db.Column(db.Integer)