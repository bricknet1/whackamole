#!/usr/bin/env python3
from faker import Faker
import random

# from app import app
from config import db, app
from models import User, Score, Item, UserItem, Enemy

fake = Faker()

with app.app_context():

    User.query.delete()
    Score.query.delete()
    Item.query.delete()
    UserItem.query.delete()
    Enemy.query.delete()

    print('Creating Users')
    usernames = ['TophDoggy', 'SAAAAAM', 'Ari_Potter', 'Queen Bee', 'D Bear', 'Liana Din', 'EmileyRulz', 'Wyle', 'Schnyle', 'Stove', 'Cherrence', 'Trasha']
    users = []
    user1 = User(
        username='bricknet',
        email='test@test.com',
        coins=1000,
        item1=5,
        item2=10
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

    print('Creating Enemies')
    tier = [1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,11,11,11,11,11,12,12,12,12,12,13,13,13,13,13,14,14,14,14,14,15,15,15,15,15,16,16,16,16,16,17,17,17,17,17,18,18,18,18,18,19,19,19,19,19,20,20,20,20,20]
    enemyattack = [0,1,0,1,0,1,2,1,2,1,2,3,2,3,2,3,4,3,4,3,4,5,4,5,4,5,6,5,6,5,6,7,6,7,6,7,8,7,8,7,8,9,8,9,8,9,10,9,10,9,10,11,10,11,10,11,12,11,12,11,12,13,12,13,12,13,14,13,14,13,14,15,14,15,14,15,16,15,16,15,16,17,16,17,16,17,18,17,18,17,18,19,18,19,18,19,20,19,20,19]
    enemyhealth = [1,1,2,2,3,2,2,3,3,4,3,3,4,4,5,4,4,5,5,6,5,5,6,6,7,6,6,7,7,8,7,7,8,8,9,8,8,9,9,10,9,9,10,10,11,10,10,11,11,12,11,11,12,12,13,12,12,13,13,14,13,13,14,14,15,14,14,15,15,16,15,15,16,16,17,16,16,17,17,18,17,17,18,18,19,18,18,19,19,20,19,19,20,20,21,20,20,21,21,22]
    points = [1,2,2,3,3,3,4,4,5,5,5,6,6,7,7,7,8,8,9,9,9,10,10,11,11,11,12,12,13,13,13,14,14,15,15,15,16,16,17,17,17,18,18,19,19,19,20,20,21,21,21,22,22,23,23,23,24,24,25,25,25,26,26,27,27,27,28,28,29,29,29,30,30,31,31,31,32,32,33,33,33,34,34,35,35,35,36,36,37,37,37,38,38,39,39,39,40,40,41,41]
    enemies = []
    for i in range(len(tier)):
        enemy = Enemy(
            tier=tier[i],
            attack=enemyattack[i],
            health=enemyhealth[i],
            points=points[i]
        )
        enemies.append(enemy)

    db.session.add_all(users)
    db.session.add_all(scores)
    db.session.add_all(items)
    db.session.add_all(useritems)
    db.session.add_all(enemies)
    db.session.commit()
    print('Seeds are planted')