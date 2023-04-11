const enemiesReducer = (state = [
  {
      "attack": 0,
      "health": 1,
      "id": 1,
      "points": 1,
      "tier": 1
  },
  {
      "attack": 1,
      "health": 1,
      "id": 2,
      "points": 2,
      "tier": 1
  },
  {
      "attack": 0,
      "health": 2,
      "id": 3,
      "points": 2,
      "tier": 1
  },
  {
      "attack": 1,
      "health": 2,
      "id": 4,
      "points": 3,
      "tier": 1
  },
  {
      "attack": 0,
      "health": 3,
      "id": 5,
      "points": 3,
      "tier": 1
  },
  {
      "attack": 1,
      "health": 2,
      "id": 6,
      "points": 3,
      "tier": 2
  },
  {
      "attack": 2,
      "health": 2,
      "id": 7,
      "points": 4,
      "tier": 2
  },
  {
      "attack": 1,
      "health": 3,
      "id": 8,
      "points": 4,
      "tier": 2
  },
  {
      "attack": 2,
      "health": 3,
      "id": 9,
      "points": 5,
      "tier": 2
  },
  {
      "attack": 1,
      "health": 4,
      "id": 10,
      "points": 5,
      "tier": 2
  },
  {
      "attack": 2,
      "health": 3,
      "id": 11,
      "points": 5,
      "tier": 3
  },
  {
      "attack": 3,
      "health": 3,
      "id": 12,
      "points": 6,
      "tier": 3
  },
  {
      "attack": 2,
      "health": 4,
      "id": 13,
      "points": 6,
      "tier": 3
  },
  {
      "attack": 3,
      "health": 4,
      "id": 14,
      "points": 7,
      "tier": 3
  },
  {
      "attack": 2,
      "health": 5,
      "id": 15,
      "points": 7,
      "tier": 3
  },
  {
      "attack": 3,
      "health": 4,
      "id": 16,
      "points": 7,
      "tier": 4
  },
  {
      "attack": 4,
      "health": 4,
      "id": 17,
      "points": 8,
      "tier": 4
  },
  {
      "attack": 3,
      "health": 5,
      "id": 18,
      "points": 8,
      "tier": 4
  },
  {
      "attack": 4,
      "health": 5,
      "id": 19,
      "points": 9,
      "tier": 4
  },
  {
      "attack": 3,
      "health": 6,
      "id": 20,
      "points": 9,
      "tier": 4
  },
  {
      "attack": 4,
      "health": 5,
      "id": 21,
      "points": 9,
      "tier": 5
  },
  {
      "attack": 5,
      "health": 5,
      "id": 22,
      "points": 10,
      "tier": 5
  },
  {
      "attack": 4,
      "health": 6,
      "id": 23,
      "points": 10,
      "tier": 5
  },
  {
      "attack": 5,
      "health": 6,
      "id": 24,
      "points": 11,
      "tier": 5
  },
  {
      "attack": 4,
      "health": 7,
      "id": 25,
      "points": 11,
      "tier": 5
  },
  {
      "attack": 5,
      "health": 6,
      "id": 26,
      "points": 11,
      "tier": 6
  },
  {
      "attack": 6,
      "health": 6,
      "id": 27,
      "points": 12,
      "tier": 6
  },
  {
      "attack": 5,
      "health": 7,
      "id": 28,
      "points": 12,
      "tier": 6
  },
  {
      "attack": 6,
      "health": 7,
      "id": 29,
      "points": 13,
      "tier": 6
  },
  {
      "attack": 5,
      "health": 8,
      "id": 30,
      "points": 13,
      "tier": 6
  },
  {
      "attack": 6,
      "health": 7,
      "id": 31,
      "points": 13,
      "tier": 7
  },
  {
      "attack": 7,
      "health": 7,
      "id": 32,
      "points": 14,
      "tier": 7
  },
  {
      "attack": 6,
      "health": 8,
      "id": 33,
      "points": 14,
      "tier": 7
  },
  {
      "attack": 7,
      "health": 8,
      "id": 34,
      "points": 15,
      "tier": 7
  },
  {
      "attack": 6,
      "health": 9,
      "id": 35,
      "points": 15,
      "tier": 7
  },
  {
      "attack": 7,
      "health": 8,
      "id": 36,
      "points": 15,
      "tier": 8
  },
  {
      "attack": 8,
      "health": 8,
      "id": 37,
      "points": 16,
      "tier": 8
  },
  {
      "attack": 7,
      "health": 9,
      "id": 38,
      "points": 16,
      "tier": 8
  },
  {
      "attack": 8,
      "health": 9,
      "id": 39,
      "points": 17,
      "tier": 8
  },
  {
      "attack": 7,
      "health": 10,
      "id": 40,
      "points": 17,
      "tier": 8
  },
  {
      "attack": 8,
      "health": 9,
      "id": 41,
      "points": 17,
      "tier": 9
  },
  {
      "attack": 9,
      "health": 9,
      "id": 42,
      "points": 18,
      "tier": 9
  },
  {
      "attack": 8,
      "health": 10,
      "id": 43,
      "points": 18,
      "tier": 9
  },
  {
      "attack": 9,
      "health": 10,
      "id": 44,
      "points": 19,
      "tier": 9
  },
  {
      "attack": 8,
      "health": 11,
      "id": 45,
      "points": 19,
      "tier": 9
  },
  {
      "attack": 9,
      "health": 10,
      "id": 46,
      "points": 19,
      "tier": 10
  },
  {
      "attack": 10,
      "health": 10,
      "id": 47,
      "points": 20,
      "tier": 10
  },
  {
      "attack": 9,
      "health": 11,
      "id": 48,
      "points": 20,
      "tier": 10
  },
  {
      "attack": 10,
      "health": 11,
      "id": 49,
      "points": 21,
      "tier": 10
  },
  {
      "attack": 9,
      "health": 12,
      "id": 50,
      "points": 21,
      "tier": 10
  },
  {
      "attack": 10,
      "health": 11,
      "id": 51,
      "points": 21,
      "tier": 11
  },
  {
      "attack": 11,
      "health": 11,
      "id": 52,
      "points": 22,
      "tier": 11
  },
  {
      "attack": 10,
      "health": 12,
      "id": 53,
      "points": 22,
      "tier": 11
  },
  {
      "attack": 11,
      "health": 12,
      "id": 54,
      "points": 23,
      "tier": 11
  },
  {
      "attack": 10,
      "health": 13,
      "id": 55,
      "points": 23,
      "tier": 11
  },
  {
      "attack": 11,
      "health": 12,
      "id": 56,
      "points": 23,
      "tier": 12
  },
  {
      "attack": 12,
      "health": 12,
      "id": 57,
      "points": 24,
      "tier": 12
  },
  {
      "attack": 11,
      "health": 13,
      "id": 58,
      "points": 24,
      "tier": 12
  },
  {
      "attack": 12,
      "health": 13,
      "id": 59,
      "points": 25,
      "tier": 12
  },
  {
      "attack": 11,
      "health": 14,
      "id": 60,
      "points": 25,
      "tier": 12
  },
  {
      "attack": 12,
      "health": 13,
      "id": 61,
      "points": 25,
      "tier": 13
  },
  {
      "attack": 13,
      "health": 13,
      "id": 62,
      "points": 26,
      "tier": 13
  },
  {
      "attack": 12,
      "health": 14,
      "id": 63,
      "points": 26,
      "tier": 13
  },
  {
      "attack": 13,
      "health": 14,
      "id": 64,
      "points": 27,
      "tier": 13
  },
  {
      "attack": 12,
      "health": 15,
      "id": 65,
      "points": 27,
      "tier": 13
  },
  {
      "attack": 13,
      "health": 14,
      "id": 66,
      "points": 27,
      "tier": 14
  },
  {
      "attack": 14,
      "health": 14,
      "id": 67,
      "points": 28,
      "tier": 14
  },
  {
      "attack": 13,
      "health": 15,
      "id": 68,
      "points": 28,
      "tier": 14
  },
  {
      "attack": 14,
      "health": 15,
      "id": 69,
      "points": 29,
      "tier": 14
  },
  {
      "attack": 13,
      "health": 16,
      "id": 70,
      "points": 29,
      "tier": 14
  },
  {
      "attack": 14,
      "health": 15,
      "id": 71,
      "points": 29,
      "tier": 15
  },
  {
      "attack": 15,
      "health": 15,
      "id": 72,
      "points": 30,
      "tier": 15
  },
  {
      "attack": 14,
      "health": 16,
      "id": 73,
      "points": 30,
      "tier": 15
  },
  {
      "attack": 15,
      "health": 16,
      "id": 74,
      "points": 31,
      "tier": 15
  },
  {
      "attack": 14,
      "health": 17,
      "id": 75,
      "points": 31,
      "tier": 15
  },
  {
      "attack": 15,
      "health": 16,
      "id": 76,
      "points": 31,
      "tier": 16
  },
  {
      "attack": 16,
      "health": 16,
      "id": 77,
      "points": 32,
      "tier": 16
  },
  {
      "attack": 15,
      "health": 17,
      "id": 78,
      "points": 32,
      "tier": 16
  },
  {
      "attack": 16,
      "health": 17,
      "id": 79,
      "points": 33,
      "tier": 16
  },
  {
      "attack": 15,
      "health": 18,
      "id": 80,
      "points": 33,
      "tier": 16
  },
  {
      "attack": 16,
      "health": 17,
      "id": 81,
      "points": 33,
      "tier": 17
  },
  {
      "attack": 17,
      "health": 17,
      "id": 82,
      "points": 34,
      "tier": 17
  },
  {
      "attack": 16,
      "health": 18,
      "id": 83,
      "points": 34,
      "tier": 17
  },
  {
      "attack": 17,
      "health": 18,
      "id": 84,
      "points": 35,
      "tier": 17
  },
  {
      "attack": 16,
      "health": 19,
      "id": 85,
      "points": 35,
      "tier": 17
  },
  {
      "attack": 17,
      "health": 18,
      "id": 86,
      "points": 35,
      "tier": 18
  },
  {
      "attack": 18,
      "health": 18,
      "id": 87,
      "points": 36,
      "tier": 18
  },
  {
      "attack": 17,
      "health": 19,
      "id": 88,
      "points": 36,
      "tier": 18
  },
  {
      "attack": 18,
      "health": 19,
      "id": 89,
      "points": 37,
      "tier": 18
  },
  {
      "attack": 17,
      "health": 20,
      "id": 90,
      "points": 37,
      "tier": 18
  },
  {
      "attack": 18,
      "health": 19,
      "id": 91,
      "points": 37,
      "tier": 19
  },
  {
      "attack": 19,
      "health": 19,
      "id": 92,
      "points": 38,
      "tier": 19
  },
  {
      "attack": 18,
      "health": 20,
      "id": 93,
      "points": 38,
      "tier": 19
  },
  {
      "attack": 19,
      "health": 20,
      "id": 94,
      "points": 39,
      "tier": 19
  },
  {
      "attack": 18,
      "health": 21,
      "id": 95,
      "points": 39,
      "tier": 19
  },
  {
      "attack": 19,
      "health": 20,
      "id": 96,
      "points": 39,
      "tier": 20
  },
  {
      "attack": 20,
      "health": 20,
      "id": 97,
      "points": 40,
      "tier": 20
  },
  {
      "attack": 19,
      "health": 21,
      "id": 98,
      "points": 40,
      "tier": 20
  },
  {
      "attack": 20,
      "health": 21,
      "id": 99,
      "points": 41,
      "tier": 20
  },
  {
      "attack": 19,
      "health": 22,
      "id": 100,
      "points": 41,
      "tier": 20
  }
], action) => {
  switch(action.type){
    default:
      return state;
  }
}

export default enemiesReducer;