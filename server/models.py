from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from config import db, bcrypt
from sqlalchemy.ext.associationproxy import association_proxy

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-_password_hash',)

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String)
    numpad1 = db.Column(db.String, default=1)
    numpad2 = db.Column(db.String, default=2)
    numpad3 = db.Column(db.String, default=3)
    numpad4 = db.Column(db.String, default=4)
    numpad5 = db.Column(db.String, default=5)
    numpad6 = db.Column(db.String, default=6)
    numpad7 = db.Column(db.String, default=7)
    numpad8 = db.Column(db.String, default=8)
    numpad9 = db.Column(db.String, default=9)
    item1 = db.Column(db.Integer)
    item2 = db.Column(db.Integer)

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