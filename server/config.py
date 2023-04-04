#!/usr/bin/env python3

from flask import Flask, request, make_response, session, jsonify, abort
from flask_migrate import Migrate
from flask_restful import Api
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
app = Flask(__name__)
CORS(app)
bcrypt = Bcrypt(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

# python -c 'import os; print(os.urandom(16))'
app.secret_key = b'\xf0L\xeb\r\x14\x8by\x83\x08\xc9\x97\x01\xb6#f\x9b'

migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)
