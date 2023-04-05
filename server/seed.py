#!/usr/bin/env python3
from faker import Faker
import random

# from app import app
from config import db, app
from models import User, Score

fake = Faker()

with app.app_context():

    User.query.delete()
    Score.query.delete()

    print('Creating Users')
    usernames = ['TophDoggy', 'SAAAAAM', 'Mari Arz', 'Queen Bee', 'D Bear', 'Liana Din', 'EmileyRulz', 'Wyle', 'Schnyle', 'Stove', 'Cherrence', 'Patty']
    users = []
    user1 = User(
        username='bricknet',
        email='test@test.com',
    )
    user1.password_hash='boat'
    users.append(user1)
    for i in range(12):
        user = User(
            username=usernames[i],
            email=fake.email()
        )
        user.password_hash = '1234'
        users.append(user)

    print('Creating Scores')
    scores = []
    for i in range(1,21):
        score = Score(
            user_id=random.randint(2,13),
            score=i
        )
        scores.append(score)
        

    db.session.add_all(users)
    db.session.add_all(scores)
    db.session.commit()
    print('Seeds are planted')