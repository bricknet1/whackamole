#!/usr/bin/env python3

from flask import request, make_response, session, jsonify, abort
from flask_restful import Resource
from werkzeug.exceptions import NotFound, Unauthorized

from models import User, Score, Item
from config import app, db, api

class Signup(Resource):
    def post(self):
        data = request.get_json()
        user = User(
            username=data['username'],
            email=data['email']
        )
        user.password_hash = data['password']
        db.session.add(user)
        db.session.commit()
        session['user_id'] = user.id
        return make_response(user.to_dict(), 201)
api.add_resource(Signup, '/signup')

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
api.add_resource(Login, '/login')

class AuthorizedSession(Resource):
    def get(self):
        try:
            user = User.query.filter_by(id=session['user_id']).first()
            return make_response(user.to_dict(), 200)
        except:
            abort(401, "Not Authorized")
api.add_resource(AuthorizedSession, '/authorized')

class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        return make_response('', 204)
api.add_resource(Logout, '/logout')

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
api.add_resource(Scores, '/highscores')

class Items(Resource):
    def get(self):
        items = [item.to_dict() for item in Item.query.all()]
        return make_response(items, 200)
api.add_resource(Items, '/items')

if __name__ == '__main__':
    app.run(port=5555, debug=True)