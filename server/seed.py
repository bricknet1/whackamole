#!/usr/bin/env python3
from faker import Faker
import random

# from app import app
from config import db, app
from models import User, Score, Item, UserItem

fake = Faker()

with app.app_context():

    User.query.delete()
    Score.query.delete()
    Item.query.delete()
    UserItem.query.delete()

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
        
    print('Creating Items')
    names = ["Flyswatter", "Spoon", "Fork", "Knife", "Hammer", "Sledgehammer", "Chainsaw", "Thimble", "Rubber Glove", "Leather Glove", "Chain Mail", "Plate Mail", "Titanium Glove", "Diamond Glove", "Bandage", "Gauze", "H3", "Pain Killers", "H5", "H6", "H7", "Nail Polish", "Press-on Nails", "Bracers", "Boxing Glove", "Brass Knuckles", "OD6", "OD7", "OH1", "OH2", "OH3", "OH4", "OH5", "OH6", "OH7", "DH1", "DH2", "DH3", "DH4", "DH5", "DH6", "DH7", "ALL1", "ALL2", "ALL3", "ALL4", "ALL5", "ALL6", "ALL7"]
    categories = ["Pure Offense", "Pure Offense", "Pure Offense", "Pure Offense", "Pure Offense", "Pure Offense", "Pure Offense", "Pure Defense", "Pure Defense", "Pure Defense", "Pure Defense", "Pure Defense", "Pure Defense", "Pure Defense", "Pure Health", "Pure Health", "Pure Health", "Pure Health", "Pure Health", "Pure Health", "Pure Health", "Offense and Defense", "Offense and Defense", "Offense and Defense", "Offense and Defense", "Offense and Defense", "Offense and Defense", "Offense and Defense", "Offense and Health", "Offense and Health", "Offense and Health", "Offense and Health", "Offense and Health", "Offense and Health", "Offense and Health", "Defense and Health", "Defense and Health", "Defense and Health", "Defense and Health", "Defense and Health", "Defense and Health", "Defense and Health", "All Stats Boosted", "All Stats Boosted", "All Stats Boosted", "All Stats Boosted", "All Stats Boosted", "All Stats Boosted", "All Stats Boosted"]
    descriptions = ["tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd"]
    attacks = [1, 2, 4, 7, 11, 15, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 7, 11, 15, 20, 1, 2, 4, 7, 11, 15, 20, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 7, 11, 15, 20]
    defenses = [0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 7, 11, 15, 20, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 7, 11, 15, 20, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 7, 11, 15, 20, 1, 2, 4, 7, 11, 15, 20]
    healths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 7, 11, 15, 20, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 7, 11, 15, 20, 1, 2, 4, 7, 11, 15, 20, 1, 2, 4, 7, 11, 15, 20]
    costs = [10, 20, 40, 70, 110, 150, 200, 10, 20, 40, 70, 110, 150, 200, 10, 20, 40, 70, 110, 150, 200, 20, 40, 80, 140, 220, 300, 400, 20, 40, 80, 140, 220, 300, 400, 20, 40, 80, 140, 220, 300, 400, 30, 60, 120, 210, 330, 450, 600]
    items=[]
    for i in range(len(names)):
        item = Item(
            name=names[i],
            category=categories[i],
            description=descriptions[i],
            attack=attacks[i],
            defense=defenses[i],
            health=healths[i],
            cost=costs[i]
        )
        items.append(item)

    print('Creating UserItems')
    useritems=[]
    for i in range(1,10):
        useritem = UserItem(
            user_id=1,
            item_id=i*5
        )
        useritems.append(useritem)

    db.session.add_all(users)
    db.session.add_all(scores)
    db.session.add_all(items)
    db.session.add_all(useritems)
    db.session.commit()
    print('Seeds are planted')