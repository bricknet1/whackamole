#!/usr/bin/env python3

from dotenv import load_dotenv
load_dotenv()
import os

from flask import Flask, request, make_response, session, jsonify, abort, render_template
from flask_migrate import Migrate
from flask_restful import Api
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
app = Flask(
    __name__,
    static_url_path='',
    static_folder='../client/build',
    template_folder='../client/build'
)
CORS(app)
bcrypt = Bcrypt(app)

# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

# python -c 'import os; print(os.urandom(16))'
app.secret_key = os.environ.get('APP_SECRET_KEY')

migrate = Migrate(app, db)
db.init_app(app)

@app.route('/')
@app.route('/<int:id>')
def index(id=0):
    return render_template("index.html")

api = Api(app)
