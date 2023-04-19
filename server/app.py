#!/usr/bin/env python3

import os
from dotenv import load_dotenv
load_dotenv()

from flask import request, make_response, session, jsonify, abort, render_template
from flask_restful import Resource
from werkzeug.exceptions import NotFound, Unauthorized

from models import User, Score, Item, UserItem, Enemy
from config import app, db, api

class Signup(Resource):
    def post(self):
        data = request.get_json()
        try:
            user = User(
                username=data['username'],
                email=data['email']
            )
            user.password_hash = data['password']
            db.session.add(user)
            db.session.commit()
            session['user_id'] = user.id
            return make_response(user.to_dict(), 201)
        except Exception as e:
            return make_response({'error': str(e)}, 400)
api.add_resource(Signup, '/signupdb')

class Login(Resource):
    def post(self):
        data = request.get_json()
        user = User.query.filter_by(username=data['username']).first()
        if user:
            if user.authenticate(data['password']):
                session['user_id'] = user.id
                return make_response(user.to_dict(), 200)
            else:
                abort(404, 'Incorrect username or password.')
        else:
            abort(404, 'Incorrect username or password.')
api.add_resource(Login, '/logindb')

class AuthorizedSession(Resource):
    def get(self):
        try:
            user = User.query.filter_by(id=session['user_id']).first()
            return make_response(user.to_dict(), 200)
        except:
            abort(401, "Not Authorized")
api.add_resource(AuthorizedSession, '/authorizeddb')

class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        return make_response('', 204)
api.add_resource(Logout, '/logoutdb')

class Scores(Resource):
    def get(self):
        try:
            scores = [score.to_dict(rules=('user',)) for score in Score.query.all()]
            scores.sort(key=lambda x: x['score'], reverse=True)
            return make_response(scores[:10], 200)
        except Exception as e:
            abort(404, [e.__str__()])

    def post(self):
        data = request.get_json()
        newscore = Score(user_id=data['id'], score=data['score'])
        db.session.add(newscore)
        db.session.commit()
        return make_response(newscore.to_dict(), 201)
api.add_resource(Scores, '/highscoresdb')

class Items(Resource):
    def get(self):
        items = [item.to_dict() for item in Item.query.all()]
        return make_response(items, 200)
api.add_resource(Items, '/itemsdb')

class Users(Resource):
    def patch(self, id):
        user = User.query.filter_by(id=id).first()
        data = request.get_json()
        if not user:
            raise NotFound
        for attr in data:
            setattr(user, attr, data[attr])
        db.session.add(user)
        db.session.commit()
        response = make_response(user.to_dict(), 200)
        return response

    def delete(self, id):
        user = User.query.filter_by(id=id).first()
        if not user:
            raise NotFound
        db.session.delete(user)
        db.session.commit()
        return make_response('', 204)
api.add_resource(Users, '/users/<int:id>')

class UserItems(Resource):
    def post(self):
        data = request.get_json()
        new = UserItem(user_id=data['user_id'], item_id=data['item_id'])
        db.session.add(new)
        db.session.commit()
        return make_response(new.to_dict(), 201)
api.add_resource(UserItems, '/useritemsdb')

class Enemies(Resource):
    def get(self):
        try:
            enemies = [enemy.to_dict() for enemy in Enemy.query.all()]
            return make_response(enemies, 200)
        except Exception as e:
            abort(404, [e.__str__()])
api.add_resource(Enemies, '/enemiesdb')

if __name__ == '__main__':
    app.run(port=5555, debug=True)