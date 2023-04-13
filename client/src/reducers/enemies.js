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
},
{
    "attack": 20,
    "health": 21,
    "id": 101,
    "points": 41,
    "tier": 21
},
{
    "attack": 21,
    "health": 21,
    "id": 102,
    "points": 42,
    "tier": 21
},
{
    "attack": 20,
    "health": 22,
    "id": 103,
    "points": 42,
    "tier": 21
},
{
    "attack": 21,
    "health": 22,
    "id": 104,
    "points": 43,
    "tier": 21
},
{
    "attack": 20,
    "health": 23,
    "id": 105,
    "points": 43,
    "tier": 21
},
{
    "attack": 21,
    "health": 22,
    "id": 106,
    "points": 43,
    "tier": 22
},
{
    "attack": 22,
    "health": 22,
    "id": 107,
    "points": 44,
    "tier": 22
},
{
    "attack": 21,
    "health": 23,
    "id": 108,
    "points": 44,
    "tier": 22
},
{
    "attack": 22,
    "health": 23,
    "id": 109,
    "points": 45,
    "tier": 22
},
{
    "attack": 21,
    "health": 24,
    "id": 110,
    "points": 45,
    "tier": 22
},
{
    "attack": 22,
    "health": 23,
    "id": 111,
    "points": 45,
    "tier": 23
},
{
    "attack": 23,
    "health": 23,
    "id": 112,
    "points": 46,
    "tier": 23
},
{
    "attack": 22,
    "health": 24,
    "id": 113,
    "points": 46,
    "tier": 23
},
{
    "attack": 23,
    "health": 24,
    "id": 114,
    "points": 47,
    "tier": 23
},
{
    "attack": 22,
    "health": 25,
    "id": 115,
    "points": 47,
    "tier": 23
},
{
    "attack": 23,
    "health": 24,
    "id": 116,
    "points": 47,
    "tier": 24
},
{
    "attack": 24,
    "health": 24,
    "id": 117,
    "points": 48,
    "tier": 24
},
{
    "attack": 23,
    "health": 25,
    "id": 118,
    "points": 48,
    "tier": 24
},
{
    "attack": 24,
    "health": 25,
    "id": 119,
    "points": 49,
    "tier": 24
},
{
    "attack": 23,
    "health": 26,
    "id": 120,
    "points": 49,
    "tier": 24
},
{
    "attack": 24,
    "health": 25,
    "id": 121,
    "points": 49,
    "tier": 25
},
{
    "attack": 25,
    "health": 25,
    "id": 122,
    "points": 50,
    "tier": 25
},
{
    "attack": 24,
    "health": 26,
    "id": 123,
    "points": 50,
    "tier": 25
},
{
    "attack": 25,
    "health": 26,
    "id": 124,
    "points": 51,
    "tier": 25
},
{
    "attack": 24,
    "health": 27,
    "id": 125,
    "points": 51,
    "tier": 25
},
{
    "attack": 25,
    "health": 26,
    "id": 126,
    "points": 51,
    "tier": 26
},
{
    "attack": 26,
    "health": 26,
    "id": 127,
    "points": 52,
    "tier": 26
},
{
    "attack": 25,
    "health": 27,
    "id": 128,
    "points": 52,
    "tier": 26
},
{
    "attack": 26,
    "health": 27,
    "id": 129,
    "points": 53,
    "tier": 26
},
{
    "attack": 25,
    "health": 28,
    "id": 130,
    "points": 53,
    "tier": 26
},
{
    "attack": 26,
    "health": 27,
    "id": 131,
    "points": 53,
    "tier": 27
},
{
    "attack": 27,
    "health": 27,
    "id": 132,
    "points": 54,
    "tier": 27
},
{
    "attack": 26,
    "health": 28,
    "id": 133,
    "points": 54,
    "tier": 27
},
{
    "attack": 27,
    "health": 28,
    "id": 134,
    "points": 55,
    "tier": 27
},
{
    "attack": 26,
    "health": 29,
    "id": 135,
    "points": 55,
    "tier": 27
},
{
    "attack": 27,
    "health": 28,
    "id": 136,
    "points": 55,
    "tier": 28
},
{
    "attack": 28,
    "health": 28,
    "id": 137,
    "points": 56,
    "tier": 28
},
{
    "attack": 27,
    "health": 29,
    "id": 138,
    "points": 56,
    "tier": 28
},
{
    "attack": 28,
    "health": 29,
    "id": 139,
    "points": 57,
    "tier": 28
},
{
    "attack": 27,
    "health": 30,
    "id": 140,
    "points": 57,
    "tier": 28
},
{
    "attack": 28,
    "health": 29,
    "id": 141,
    "points": 57,
    "tier": 29
},
{
    "attack": 29,
    "health": 29,
    "id": 142,
    "points": 58,
    "tier": 29
},
{
    "attack": 28,
    "health": 30,
    "id": 143,
    "points": 58,
    "tier": 29
},
{
    "attack": 29,
    "health": 30,
    "id": 144,
    "points": 59,
    "tier": 29
},
{
    "attack": 28,
    "health": 31,
    "id": 145,
    "points": 59,
    "tier": 29
},
{
    "attack": 29,
    "health": 30,
    "id": 146,
    "points": 59,
    "tier": 30
},
{
    "attack": 30,
    "health": 30,
    "id": 147,
    "points": 60,
    "tier": 30
},
{
    "attack": 29,
    "health": 31,
    "id": 148,
    "points": 60,
    "tier": 30
},
{
    "attack": 30,
    "health": 31,
    "id": 149,
    "points": 61,
    "tier": 30
},
{
    "attack": 29,
    "health": 32,
    "id": 150,
    "points": 61,
    "tier": 30
},
{
    "attack": 30,
    "health": 31,
    "id": 151,
    "points": 61,
    "tier": 31
},
{
    "attack": 31,
    "health": 31,
    "id": 152,
    "points": 62,
    "tier": 31
},
{
    "attack": 30,
    "health": 32,
    "id": 153,
    "points": 62,
    "tier": 31
},
{
    "attack": 31,
    "health": 32,
    "id": 154,
    "points": 63,
    "tier": 31
},
{
    "attack": 30,
    "health": 33,
    "id": 155,
    "points": 63,
    "tier": 31
},
{
    "attack": 31,
    "health": 32,
    "id": 156,
    "points": 63,
    "tier": 32
},
{
    "attack": 32,
    "health": 32,
    "id": 157,
    "points": 64,
    "tier": 32
},
{
    "attack": 31,
    "health": 33,
    "id": 158,
    "points": 64,
    "tier": 32
},
{
    "attack": 32,
    "health": 33,
    "id": 159,
    "points": 65,
    "tier": 32
},
{
    "attack": 31,
    "health": 34,
    "id": 160,
    "points": 65,
    "tier": 32
},
{
    "attack": 32,
    "health": 33,
    "id": 161,
    "points": 65,
    "tier": 33
},
{
    "attack": 33,
    "health": 33,
    "id": 162,
    "points": 66,
    "tier": 33
},
{
    "attack": 32,
    "health": 34,
    "id": 163,
    "points": 66,
    "tier": 33
},
{
    "attack": 33,
    "health": 34,
    "id": 164,
    "points": 67,
    "tier": 33
},
{
    "attack": 32,
    "health": 35,
    "id": 165,
    "points": 67,
    "tier": 33
},
{
    "attack": 33,
    "health": 34,
    "id": 166,
    "points": 67,
    "tier": 34
},
{
    "attack": 34,
    "health": 34,
    "id": 167,
    "points": 68,
    "tier": 34
},
{
    "attack": 33,
    "health": 35,
    "id": 168,
    "points": 68,
    "tier": 34
},
{
    "attack": 34,
    "health": 35,
    "id": 169,
    "points": 69,
    "tier": 34
},
{
    "attack": 33,
    "health": 36,
    "id": 170,
    "points": 69,
    "tier": 34
},
{
    "attack": 34,
    "health": 35,
    "id": 171,
    "points": 69,
    "tier": 35
},
{
    "attack": 35,
    "health": 35,
    "id": 172,
    "points": 70,
    "tier": 35
},
{
    "attack": 34,
    "health": 36,
    "id": 173,
    "points": 70,
    "tier": 35
},
{
    "attack": 35,
    "health": 36,
    "id": 174,
    "points": 71,
    "tier": 35
},
{
    "attack": 34,
    "health": 37,
    "id": 175,
    "points": 71,
    "tier": 35
},
{
    "attack": 35,
    "health": 36,
    "id": 176,
    "points": 71,
    "tier": 36
},
{
    "attack": 36,
    "health": 36,
    "id": 177,
    "points": 72,
    "tier": 36
},
{
    "attack": 35,
    "health": 37,
    "id": 178,
    "points": 72,
    "tier": 36
},
{
    "attack": 36,
    "health": 37,
    "id": 179,
    "points": 73,
    "tier": 36
},
{
    "attack": 35,
    "health": 38,
    "id": 180,
    "points": 73,
    "tier": 36
},
{
    "attack": 36,
    "health": 37,
    "id": 181,
    "points": 73,
    "tier": 37
},
{
    "attack": 37,
    "health": 37,
    "id": 182,
    "points": 74,
    "tier": 37
},
{
    "attack": 36,
    "health": 38,
    "id": 183,
    "points": 74,
    "tier": 37
},
{
    "attack": 37,
    "health": 38,
    "id": 184,
    "points": 75,
    "tier": 37
},
{
    "attack": 36,
    "health": 39,
    "id": 185,
    "points": 75,
    "tier": 37
},
{
    "attack": 37,
    "health": 38,
    "id": 186,
    "points": 75,
    "tier": 38
},
{
    "attack": 38,
    "health": 38,
    "id": 187,
    "points": 76,
    "tier": 38
},
{
    "attack": 37,
    "health": 39,
    "id": 188,
    "points": 76,
    "tier": 38
},
{
    "attack": 38,
    "health": 39,
    "id": 189,
    "points": 77,
    "tier": 38
},
{
    "attack": 37,
    "health": 40,
    "id": 190,
    "points": 77,
    "tier": 38
},
{
    "attack": 38,
    "health": 39,
    "id": 191,
    "points": 77,
    "tier": 39
},
{
    "attack": 39,
    "health": 39,
    "id": 192,
    "points": 78,
    "tier": 39
},
{
    "attack": 38,
    "health": 40,
    "id": 193,
    "points": 78,
    "tier": 39
},
{
    "attack": 39,
    "health": 40,
    "id": 194,
    "points": 79,
    "tier": 39
},
{
    "attack": 38,
    "health": 41,
    "id": 195,
    "points": 79,
    "tier": 39
},
{
    "attack": 39,
    "health": 40,
    "id": 196,
    "points": 79,
    "tier": 40
},
{
    "attack": 40,
    "health": 40,
    "id": 197,
    "points": 80,
    "tier": 40
},
{
    "attack": 39,
    "health": 41,
    "id": 198,
    "points": 80,
    "tier": 40
},
{
    "attack": 40,
    "health": 41,
    "id": 199,
    "points": 81,
    "tier": 40
},
{
    "attack": 39,
    "health": 42,
    "id": 200,
    "points": 81,
    "tier": 40
},
{
    "attack": 40,
    "health": 41,
    "id": 201,
    "points": 81,
    "tier": 41
},
{
    "attack": 41,
    "health": 41,
    "id": 202,
    "points": 82,
    "tier": 41
},
{
    "attack": 40,
    "health": 42,
    "id": 203,
    "points": 82,
    "tier": 41
},
{
    "attack": 41,
    "health": 42,
    "id": 204,
    "points": 83,
    "tier": 41
},
{
    "attack": 40,
    "health": 43,
    "id": 205,
    "points": 83,
    "tier": 41
},
{
    "attack": 41,
    "health": 42,
    "id": 206,
    "points": 83,
    "tier": 42
},
{
    "attack": 42,
    "health": 42,
    "id": 207,
    "points": 84,
    "tier": 42
},
{
    "attack": 41,
    "health": 43,
    "id": 208,
    "points": 84,
    "tier": 42
},
{
    "attack": 42,
    "health": 43,
    "id": 209,
    "points": 85,
    "tier": 42
},
{
    "attack": 41,
    "health": 44,
    "id": 210,
    "points": 85,
    "tier": 42
},
{
    "attack": 42,
    "health": 43,
    "id": 211,
    "points": 85,
    "tier": 43
},
{
    "attack": 43,
    "health": 43,
    "id": 212,
    "points": 86,
    "tier": 43
},
{
    "attack": 42,
    "health": 44,
    "id": 213,
    "points": 86,
    "tier": 43
},
{
    "attack": 43,
    "health": 44,
    "id": 214,
    "points": 87,
    "tier": 43
},
{
    "attack": 42,
    "health": 45,
    "id": 215,
    "points": 87,
    "tier": 43
},
{
    "attack": 43,
    "health": 44,
    "id": 216,
    "points": 87,
    "tier": 44
},
{
    "attack": 44,
    "health": 44,
    "id": 217,
    "points": 88,
    "tier": 44
},
{
    "attack": 43,
    "health": 45,
    "id": 218,
    "points": 88,
    "tier": 44
},
{
    "attack": 44,
    "health": 45,
    "id": 219,
    "points": 89,
    "tier": 44
},
{
    "attack": 43,
    "health": 46,
    "id": 220,
    "points": 89,
    "tier": 44
},
{
    "attack": 44,
    "health": 45,
    "id": 221,
    "points": 89,
    "tier": 45
},
{
    "attack": 45,
    "health": 45,
    "id": 222,
    "points": 90,
    "tier": 45
},
{
    "attack": 44,
    "health": 46,
    "id": 223,
    "points": 90,
    "tier": 45
},
{
    "attack": 45,
    "health": 46,
    "id": 224,
    "points": 91,
    "tier": 45
},
{
    "attack": 44,
    "health": 47,
    "id": 225,
    "points": 91,
    "tier": 45
},
{
    "attack": 45,
    "health": 46,
    "id": 226,
    "points": 91,
    "tier": 46
},
{
    "attack": 46,
    "health": 46,
    "id": 227,
    "points": 92,
    "tier": 46
},
{
    "attack": 45,
    "health": 47,
    "id": 228,
    "points": 92,
    "tier": 46
},
{
    "attack": 46,
    "health": 47,
    "id": 229,
    "points": 93,
    "tier": 46
},
{
    "attack": 45,
    "health": 48,
    "id": 230,
    "points": 93,
    "tier": 46
},
{
    "attack": 46,
    "health": 47,
    "id": 231,
    "points": 93,
    "tier": 47
},
{
    "attack": 47,
    "health": 47,
    "id": 232,
    "points": 94,
    "tier": 47
},
{
    "attack": 46,
    "health": 48,
    "id": 233,
    "points": 94,
    "tier": 47
},
{
    "attack": 47,
    "health": 48,
    "id": 234,
    "points": 95,
    "tier": 47
},
{
    "attack": 46,
    "health": 49,
    "id": 235,
    "points": 95,
    "tier": 47
},
{
    "attack": 47,
    "health": 48,
    "id": 236,
    "points": 95,
    "tier": 48
},
{
    "attack": 48,
    "health": 48,
    "id": 237,
    "points": 96,
    "tier": 48
},
{
    "attack": 47,
    "health": 49,
    "id": 238,
    "points": 96,
    "tier": 48
},
{
    "attack": 48,
    "health": 49,
    "id": 239,
    "points": 97,
    "tier": 48
},
{
    "attack": 47,
    "health": 50,
    "id": 240,
    "points": 97,
    "tier": 48
},
{
    "attack": 48,
    "health": 49,
    "id": 241,
    "points": 97,
    "tier": 49
},
{
    "attack": 49,
    "health": 49,
    "id": 242,
    "points": 98,
    "tier": 49
},
{
    "attack": 48,
    "health": 50,
    "id": 243,
    "points": 98,
    "tier": 49
},
{
    "attack": 49,
    "health": 50,
    "id": 244,
    "points": 99,
    "tier": 49
},
{
    "attack": 48,
    "health": 51,
    "id": 245,
    "points": 99,
    "tier": 49
},
{
    "attack": 49,
    "health": 50,
    "id": 246,
    "points": 99,
    "tier": 50
},
{
    "attack": 50,
    "health": 50,
    "id": 247,
    "points": 100,
    "tier": 50
},
{
    "attack": 49,
    "health": 51,
    "id": 248,
    "points": 100,
    "tier": 50
},
{
    "attack": 50,
    "health": 51,
    "id": 249,
    "points": 101,
    "tier": 50
},
{
    "attack": 49,
    "health": 52,
    "id": 250,
    "points": 101,
    "tier": 50
},
{
    "attack": 50,
    "health": 51,
    "id": 251,
    "points": 101,
    "tier": 51
},
{
    "attack": 51,
    "health": 51,
    "id": 252,
    "points": 102,
    "tier": 51
},
{
    "attack": 50,
    "health": 52,
    "id": 253,
    "points": 102,
    "tier": 51
},
{
    "attack": 51,
    "health": 52,
    "id": 254,
    "points": 103,
    "tier": 51
},
{
    "attack": 50,
    "health": 53,
    "id": 255,
    "points": 103,
    "tier": 51
},
{
    "attack": 51,
    "health": 52,
    "id": 256,
    "points": 103,
    "tier": 52
},
{
    "attack": 52,
    "health": 52,
    "id": 257,
    "points": 104,
    "tier": 52
},
{
    "attack": 51,
    "health": 53,
    "id": 258,
    "points": 104,
    "tier": 52
},
{
    "attack": 52,
    "health": 53,
    "id": 259,
    "points": 105,
    "tier": 52
},
{
    "attack": 51,
    "health": 54,
    "id": 260,
    "points": 105,
    "tier": 52
},
{
    "attack": 52,
    "health": 53,
    "id": 261,
    "points": 105,
    "tier": 53
},
{
    "attack": 53,
    "health": 53,
    "id": 262,
    "points": 106,
    "tier": 53
},
{
    "attack": 52,
    "health": 54,
    "id": 263,
    "points": 106,
    "tier": 53
},
{
    "attack": 53,
    "health": 54,
    "id": 264,
    "points": 107,
    "tier": 53
},
{
    "attack": 52,
    "health": 55,
    "id": 265,
    "points": 107,
    "tier": 53
},
{
    "attack": 53,
    "health": 54,
    "id": 266,
    "points": 107,
    "tier": 54
},
{
    "attack": 54,
    "health": 54,
    "id": 267,
    "points": 108,
    "tier": 54
},
{
    "attack": 53,
    "health": 55,
    "id": 268,
    "points": 108,
    "tier": 54
},
{
    "attack": 54,
    "health": 55,
    "id": 269,
    "points": 109,
    "tier": 54
},
{
    "attack": 53,
    "health": 56,
    "id": 270,
    "points": 109,
    "tier": 54
},
{
    "attack": 54,
    "health": 55,
    "id": 271,
    "points": 109,
    "tier": 55
},
{
    "attack": 55,
    "health": 55,
    "id": 272,
    "points": 110,
    "tier": 55
},
{
    "attack": 54,
    "health": 56,
    "id": 273,
    "points": 110,
    "tier": 55
},
{
    "attack": 55,
    "health": 56,
    "id": 274,
    "points": 111,
    "tier": 55
},
{
    "attack": 54,
    "health": 57,
    "id": 275,
    "points": 111,
    "tier": 55
},
{
    "attack": 55,
    "health": 56,
    "id": 276,
    "points": 111,
    "tier": 56
},
{
    "attack": 56,
    "health": 56,
    "id": 277,
    "points": 112,
    "tier": 56
},
{
    "attack": 55,
    "health": 57,
    "id": 278,
    "points": 112,
    "tier": 56
},
{
    "attack": 56,
    "health": 57,
    "id": 279,
    "points": 113,
    "tier": 56
},
{
    "attack": 55,
    "health": 58,
    "id": 280,
    "points": 113,
    "tier": 56
},
{
    "attack": 56,
    "health": 57,
    "id": 281,
    "points": 113,
    "tier": 57
},
{
    "attack": 57,
    "health": 57,
    "id": 282,
    "points": 114,
    "tier": 57
},
{
    "attack": 56,
    "health": 58,
    "id": 283,
    "points": 114,
    "tier": 57
},
{
    "attack": 57,
    "health": 58,
    "id": 284,
    "points": 115,
    "tier": 57
},
{
    "attack": 56,
    "health": 59,
    "id": 285,
    "points": 115,
    "tier": 57
},
{
    "attack": 57,
    "health": 58,
    "id": 286,
    "points": 115,
    "tier": 58
},
{
    "attack": 58,
    "health": 58,
    "id": 287,
    "points": 116,
    "tier": 58
},
{
    "attack": 57,
    "health": 59,
    "id": 288,
    "points": 116,
    "tier": 58
},
{
    "attack": 58,
    "health": 59,
    "id": 289,
    "points": 117,
    "tier": 58
},
{
    "attack": 57,
    "health": 60,
    "id": 290,
    "points": 117,
    "tier": 58
},
{
    "attack": 58,
    "health": 59,
    "id": 291,
    "points": 117,
    "tier": 59
},
{
    "attack": 59,
    "health": 59,
    "id": 292,
    "points": 118,
    "tier": 59
},
{
    "attack": 58,
    "health": 60,
    "id": 293,
    "points": 118,
    "tier": 59
},
{
    "attack": 59,
    "health": 60,
    "id": 294,
    "points": 119,
    "tier": 59
},
{
    "attack": 58,
    "health": 61,
    "id": 295,
    "points": 119,
    "tier": 59
},
{
    "attack": 59,
    "health": 60,
    "id": 296,
    "points": 119,
    "tier": 60
},
{
    "attack": 60,
    "health": 60,
    "id": 297,
    "points": 120,
    "tier": 60
},
{
    "attack": 59,
    "health": 61,
    "id": 298,
    "points": 120,
    "tier": 60
},
{
    "attack": 60,
    "health": 61,
    "id": 299,
    "points": 121,
    "tier": 60
},
{
    "attack": 59,
    "health": 62,
    "id": 300,
    "points": 121,
    "tier": 60
},
{
    "attack": 60,
    "health": 61,
    "id": 301,
    "points": 121,
    "tier": 61
},
{
    "attack": 61,
    "health": 61,
    "id": 302,
    "points": 122,
    "tier": 61
},
{
    "attack": 60,
    "health": 62,
    "id": 303,
    "points": 122,
    "tier": 61
},
{
    "attack": 61,
    "health": 62,
    "id": 304,
    "points": 123,
    "tier": 61
},
{
    "attack": 60,
    "health": 63,
    "id": 305,
    "points": 123,
    "tier": 61
},
{
    "attack": 61,
    "health": 62,
    "id": 306,
    "points": 123,
    "tier": 62
},
{
    "attack": 62,
    "health": 62,
    "id": 307,
    "points": 124,
    "tier": 62
},
{
    "attack": 61,
    "health": 63,
    "id": 308,
    "points": 124,
    "tier": 62
},
{
    "attack": 62,
    "health": 63,
    "id": 309,
    "points": 125,
    "tier": 62
},
{
    "attack": 61,
    "health": 64,
    "id": 310,
    "points": 125,
    "tier": 62
},
{
    "attack": 62,
    "health": 63,
    "id": 311,
    "points": 125,
    "tier": 63
},
{
    "attack": 63,
    "health": 63,
    "id": 312,
    "points": 126,
    "tier": 63
},
{
    "attack": 62,
    "health": 64,
    "id": 313,
    "points": 126,
    "tier": 63
},
{
    "attack": 63,
    "health": 64,
    "id": 314,
    "points": 127,
    "tier": 63
},
{
    "attack": 62,
    "health": 65,
    "id": 315,
    "points": 127,
    "tier": 63
},
{
    "attack": 63,
    "health": 64,
    "id": 316,
    "points": 127,
    "tier": 64
},
{
    "attack": 64,
    "health": 64,
    "id": 317,
    "points": 128,
    "tier": 64
},
{
    "attack": 63,
    "health": 65,
    "id": 318,
    "points": 128,
    "tier": 64
},
{
    "attack": 64,
    "health": 65,
    "id": 319,
    "points": 129,
    "tier": 64
},
{
    "attack": 63,
    "health": 66,
    "id": 320,
    "points": 129,
    "tier": 64
},
{
    "attack": 64,
    "health": 65,
    "id": 321,
    "points": 129,
    "tier": 65
},
{
    "attack": 65,
    "health": 65,
    "id": 322,
    "points": 130,
    "tier": 65
},
{
    "attack": 64,
    "health": 66,
    "id": 323,
    "points": 130,
    "tier": 65
},
{
    "attack": 65,
    "health": 66,
    "id": 324,
    "points": 131,
    "tier": 65
},
{
    "attack": 64,
    "health": 67,
    "id": 325,
    "points": 131,
    "tier": 65
},
{
    "attack": 65,
    "health": 66,
    "id": 326,
    "points": 131,
    "tier": 66
},
{
    "attack": 66,
    "health": 66,
    "id": 327,
    "points": 132,
    "tier": 66
},
{
    "attack": 65,
    "health": 67,
    "id": 328,
    "points": 132,
    "tier": 66
},
{
    "attack": 66,
    "health": 67,
    "id": 329,
    "points": 133,
    "tier": 66
},
{
    "attack": 65,
    "health": 68,
    "id": 330,
    "points": 133,
    "tier": 66
},
{
    "attack": 66,
    "health": 67,
    "id": 331,
    "points": 133,
    "tier": 67
},
{
    "attack": 67,
    "health": 67,
    "id": 332,
    "points": 134,
    "tier": 67
},
{
    "attack": 66,
    "health": 68,
    "id": 333,
    "points": 134,
    "tier": 67
},
{
    "attack": 67,
    "health": 68,
    "id": 334,
    "points": 135,
    "tier": 67
},
{
    "attack": 66,
    "health": 69,
    "id": 335,
    "points": 135,
    "tier": 67
},
{
    "attack": 67,
    "health": 68,
    "id": 336,
    "points": 135,
    "tier": 68
},
{
    "attack": 68,
    "health": 68,
    "id": 337,
    "points": 136,
    "tier": 68
},
{
    "attack": 67,
    "health": 69,
    "id": 338,
    "points": 136,
    "tier": 68
},
{
    "attack": 68,
    "health": 69,
    "id": 339,
    "points": 137,
    "tier": 68
},
{
    "attack": 67,
    "health": 70,
    "id": 340,
    "points": 137,
    "tier": 68
},
{
    "attack": 68,
    "health": 69,
    "id": 341,
    "points": 137,
    "tier": 69
},
{
    "attack": 69,
    "health": 69,
    "id": 342,
    "points": 138,
    "tier": 69
},
{
    "attack": 68,
    "health": 70,
    "id": 343,
    "points": 138,
    "tier": 69
},
{
    "attack": 69,
    "health": 70,
    "id": 344,
    "points": 139,
    "tier": 69
},
{
    "attack": 68,
    "health": 71,
    "id": 345,
    "points": 139,
    "tier": 69
},
{
    "attack": 69,
    "health": 70,
    "id": 346,
    "points": 139,
    "tier": 70
},
{
    "attack": 70,
    "health": 70,
    "id": 347,
    "points": 140,
    "tier": 70
},
{
    "attack": 69,
    "health": 71,
    "id": 348,
    "points": 140,
    "tier": 70
},
{
    "attack": 70,
    "health": 71,
    "id": 349,
    "points": 141,
    "tier": 70
},
{
    "attack": 69,
    "health": 72,
    "id": 350,
    "points": 141,
    "tier": 70
},
{
    "attack": 70,
    "health": 71,
    "id": 351,
    "points": 141,
    "tier": 71
},
{
    "attack": 71,
    "health": 71,
    "id": 352,
    "points": 142,
    "tier": 71
},
{
    "attack": 70,
    "health": 72,
    "id": 353,
    "points": 142,
    "tier": 71
},
{
    "attack": 71,
    "health": 72,
    "id": 354,
    "points": 143,
    "tier": 71
},
{
    "attack": 70,
    "health": 73,
    "id": 355,
    "points": 143,
    "tier": 71
},
{
    "attack": 71,
    "health": 72,
    "id": 356,
    "points": 143,
    "tier": 72
},
{
    "attack": 72,
    "health": 72,
    "id": 357,
    "points": 144,
    "tier": 72
},
{
    "attack": 71,
    "health": 73,
    "id": 358,
    "points": 144,
    "tier": 72
},
{
    "attack": 72,
    "health": 73,
    "id": 359,
    "points": 145,
    "tier": 72
},
{
    "attack": 71,
    "health": 74,
    "id": 360,
    "points": 145,
    "tier": 72
},
{
    "attack": 72,
    "health": 73,
    "id": 361,
    "points": 145,
    "tier": 73
},
{
    "attack": 73,
    "health": 73,
    "id": 362,
    "points": 146,
    "tier": 73
},
{
    "attack": 72,
    "health": 74,
    "id": 363,
    "points": 146,
    "tier": 73
},
{
    "attack": 73,
    "health": 74,
    "id": 364,
    "points": 147,
    "tier": 73
},
{
    "attack": 72,
    "health": 75,
    "id": 365,
    "points": 147,
    "tier": 73
},
{
    "attack": 73,
    "health": 74,
    "id": 366,
    "points": 147,
    "tier": 74
},
{
    "attack": 74,
    "health": 74,
    "id": 367,
    "points": 148,
    "tier": 74
},
{
    "attack": 73,
    "health": 75,
    "id": 368,
    "points": 148,
    "tier": 74
},
{
    "attack": 74,
    "health": 75,
    "id": 369,
    "points": 149,
    "tier": 74
},
{
    "attack": 73,
    "health": 76,
    "id": 370,
    "points": 149,
    "tier": 74
},
{
    "attack": 74,
    "health": 75,
    "id": 371,
    "points": 149,
    "tier": 75
},
{
    "attack": 75,
    "health": 75,
    "id": 372,
    "points": 150,
    "tier": 75
},
{
    "attack": 74,
    "health": 76,
    "id": 373,
    "points": 150,
    "tier": 75
},
{
    "attack": 75,
    "health": 76,
    "id": 374,
    "points": 151,
    "tier": 75
},
{
    "attack": 74,
    "health": 77,
    "id": 375,
    "points": 151,
    "tier": 75
},
{
    "attack": 75,
    "health": 76,
    "id": 376,
    "points": 151,
    "tier": 76
},
{
    "attack": 76,
    "health": 76,
    "id": 377,
    "points": 152,
    "tier": 76
},
{
    "attack": 75,
    "health": 77,
    "id": 378,
    "points": 152,
    "tier": 76
},
{
    "attack": 76,
    "health": 77,
    "id": 379,
    "points": 153,
    "tier": 76
},
{
    "attack": 75,
    "health": 78,
    "id": 380,
    "points": 153,
    "tier": 76
},
{
    "attack": 76,
    "health": 77,
    "id": 381,
    "points": 153,
    "tier": 77
},
{
    "attack": 77,
    "health": 77,
    "id": 382,
    "points": 154,
    "tier": 77
},
{
    "attack": 76,
    "health": 78,
    "id": 383,
    "points": 154,
    "tier": 77
},
{
    "attack": 77,
    "health": 78,
    "id": 384,
    "points": 155,
    "tier": 77
},
{
    "attack": 76,
    "health": 79,
    "id": 385,
    "points": 155,
    "tier": 77
},
{
    "attack": 77,
    "health": 78,
    "id": 386,
    "points": 155,
    "tier": 78
},
{
    "attack": 78,
    "health": 78,
    "id": 387,
    "points": 156,
    "tier": 78
},
{
    "attack": 77,
    "health": 79,
    "id": 388,
    "points": 156,
    "tier": 78
},
{
    "attack": 78,
    "health": 79,
    "id": 389,
    "points": 157,
    "tier": 78
},
{
    "attack": 77,
    "health": 80,
    "id": 390,
    "points": 157,
    "tier": 78
},
{
    "attack": 78,
    "health": 79,
    "id": 391,
    "points": 157,
    "tier": 79
},
{
    "attack": 79,
    "health": 79,
    "id": 392,
    "points": 158,
    "tier": 79
},
{
    "attack": 78,
    "health": 80,
    "id": 393,
    "points": 158,
    "tier": 79
},
{
    "attack": 79,
    "health": 80,
    "id": 394,
    "points": 159,
    "tier": 79
},
{
    "attack": 78,
    "health": 81,
    "id": 395,
    "points": 159,
    "tier": 79
},
{
    "attack": 79,
    "health": 80,
    "id": 396,
    "points": 159,
    "tier": 80
},
{
    "attack": 80,
    "health": 80,
    "id": 397,
    "points": 160,
    "tier": 80
},
{
    "attack": 79,
    "health": 81,
    "id": 398,
    "points": 160,
    "tier": 80
},
{
    "attack": 80,
    "health": 81,
    "id": 399,
    "points": 161,
    "tier": 80
},
{
    "attack": 79,
    "health": 82,
    "id": 400,
    "points": 161,
    "tier": 80
},
{
    "attack": 80,
    "health": 81,
    "id": 401,
    "points": 161,
    "tier": 81
},
{
    "attack": 81,
    "health": 81,
    "id": 402,
    "points": 162,
    "tier": 81
},
{
    "attack": 80,
    "health": 82,
    "id": 403,
    "points": 162,
    "tier": 81
},
{
    "attack": 81,
    "health": 82,
    "id": 404,
    "points": 163,
    "tier": 81
},
{
    "attack": 80,
    "health": 83,
    "id": 405,
    "points": 163,
    "tier": 81
},
{
    "attack": 81,
    "health": 82,
    "id": 406,
    "points": 163,
    "tier": 82
},
{
    "attack": 82,
    "health": 82,
    "id": 407,
    "points": 164,
    "tier": 82
},
{
    "attack": 81,
    "health": 83,
    "id": 408,
    "points": 164,
    "tier": 82
},
{
    "attack": 82,
    "health": 83,
    "id": 409,
    "points": 165,
    "tier": 82
},
{
    "attack": 81,
    "health": 84,
    "id": 410,
    "points": 165,
    "tier": 82
},
{
    "attack": 82,
    "health": 83,
    "id": 411,
    "points": 165,
    "tier": 83
},
{
    "attack": 83,
    "health": 83,
    "id": 412,
    "points": 166,
    "tier": 83
},
{
    "attack": 82,
    "health": 84,
    "id": 413,
    "points": 166,
    "tier": 83
},
{
    "attack": 83,
    "health": 84,
    "id": 414,
    "points": 167,
    "tier": 83
},
{
    "attack": 82,
    "health": 85,
    "id": 415,
    "points": 167,
    "tier": 83
},
{
    "attack": 83,
    "health": 84,
    "id": 416,
    "points": 167,
    "tier": 84
},
{
    "attack": 84,
    "health": 84,
    "id": 417,
    "points": 168,
    "tier": 84
},
{
    "attack": 83,
    "health": 85,
    "id": 418,
    "points": 168,
    "tier": 84
},
{
    "attack": 84,
    "health": 85,
    "id": 419,
    "points": 169,
    "tier": 84
},
{
    "attack": 83,
    "health": 86,
    "id": 420,
    "points": 169,
    "tier": 84
},
{
    "attack": 84,
    "health": 85,
    "id": 421,
    "points": 169,
    "tier": 85
},
{
    "attack": 85,
    "health": 85,
    "id": 422,
    "points": 170,
    "tier": 85
},
{
    "attack": 84,
    "health": 86,
    "id": 423,
    "points": 170,
    "tier": 85
},
{
    "attack": 85,
    "health": 86,
    "id": 424,
    "points": 171,
    "tier": 85
},
{
    "attack": 84,
    "health": 87,
    "id": 425,
    "points": 171,
    "tier": 85
},
{
    "attack": 85,
    "health": 86,
    "id": 426,
    "points": 171,
    "tier": 86
},
{
    "attack": 86,
    "health": 86,
    "id": 427,
    "points": 172,
    "tier": 86
},
{
    "attack": 85,
    "health": 87,
    "id": 428,
    "points": 172,
    "tier": 86
},
{
    "attack": 86,
    "health": 87,
    "id": 429,
    "points": 173,
    "tier": 86
},
{
    "attack": 85,
    "health": 88,
    "id": 430,
    "points": 173,
    "tier": 86
},
{
    "attack": 86,
    "health": 87,
    "id": 431,
    "points": 173,
    "tier": 87
},
{
    "attack": 87,
    "health": 87,
    "id": 432,
    "points": 174,
    "tier": 87
},
{
    "attack": 86,
    "health": 88,
    "id": 433,
    "points": 174,
    "tier": 87
},
{
    "attack": 87,
    "health": 88,
    "id": 434,
    "points": 175,
    "tier": 87
},
{
    "attack": 86,
    "health": 89,
    "id": 435,
    "points": 175,
    "tier": 87
},
{
    "attack": 87,
    "health": 88,
    "id": 436,
    "points": 175,
    "tier": 88
},
{
    "attack": 88,
    "health": 88,
    "id": 437,
    "points": 176,
    "tier": 88
},
{
    "attack": 87,
    "health": 89,
    "id": 438,
    "points": 176,
    "tier": 88
},
{
    "attack": 88,
    "health": 89,
    "id": 439,
    "points": 177,
    "tier": 88
},
{
    "attack": 87,
    "health": 90,
    "id": 440,
    "points": 177,
    "tier": 88
},
{
    "attack": 88,
    "health": 89,
    "id": 441,
    "points": 177,
    "tier": 89
},
{
    "attack": 89,
    "health": 89,
    "id": 442,
    "points": 178,
    "tier": 89
},
{
    "attack": 88,
    "health": 90,
    "id": 443,
    "points": 178,
    "tier": 89
},
{
    "attack": 89,
    "health": 90,
    "id": 444,
    "points": 179,
    "tier": 89
},
{
    "attack": 88,
    "health": 91,
    "id": 445,
    "points": 179,
    "tier": 89
},
{
    "attack": 89,
    "health": 90,
    "id": 446,
    "points": 179,
    "tier": 90
},
{
    "attack": 90,
    "health": 90,
    "id": 447,
    "points": 180,
    "tier": 90
},
{
    "attack": 89,
    "health": 91,
    "id": 448,
    "points": 180,
    "tier": 90
},
{
    "attack": 90,
    "health": 91,
    "id": 449,
    "points": 181,
    "tier": 90
},
{
    "attack": 89,
    "health": 92,
    "id": 450,
    "points": 181,
    "tier": 90
},
{
    "attack": 90,
    "health": 91,
    "id": 451,
    "points": 181,
    "tier": 91
},
{
    "attack": 91,
    "health": 91,
    "id": 452,
    "points": 182,
    "tier": 91
},
{
    "attack": 90,
    "health": 92,
    "id": 453,
    "points": 182,
    "tier": 91
},
{
    "attack": 91,
    "health": 92,
    "id": 454,
    "points": 183,
    "tier": 91
},
{
    "attack": 90,
    "health": 93,
    "id": 455,
    "points": 183,
    "tier": 91
},
{
    "attack": 91,
    "health": 92,
    "id": 456,
    "points": 183,
    "tier": 92
},
{
    "attack": 92,
    "health": 92,
    "id": 457,
    "points": 184,
    "tier": 92
},
{
    "attack": 91,
    "health": 93,
    "id": 458,
    "points": 184,
    "tier": 92
},
{
    "attack": 92,
    "health": 93,
    "id": 459,
    "points": 185,
    "tier": 92
},
{
    "attack": 91,
    "health": 94,
    "id": 460,
    "points": 185,
    "tier": 92
},
{
    "attack": 92,
    "health": 93,
    "id": 461,
    "points": 185,
    "tier": 93
},
{
    "attack": 93,
    "health": 93,
    "id": 462,
    "points": 186,
    "tier": 93
},
{
    "attack": 92,
    "health": 94,
    "id": 463,
    "points": 186,
    "tier": 93
},
{
    "attack": 93,
    "health": 94,
    "id": 464,
    "points": 187,
    "tier": 93
},
{
    "attack": 92,
    "health": 95,
    "id": 465,
    "points": 187,
    "tier": 93
},
{
    "attack": 93,
    "health": 94,
    "id": 466,
    "points": 187,
    "tier": 94
},
{
    "attack": 94,
    "health": 94,
    "id": 467,
    "points": 188,
    "tier": 94
},
{
    "attack": 93,
    "health": 95,
    "id": 468,
    "points": 188,
    "tier": 94
},
{
    "attack": 94,
    "health": 95,
    "id": 469,
    "points": 189,
    "tier": 94
},
{
    "attack": 93,
    "health": 96,
    "id": 470,
    "points": 189,
    "tier": 94
},
{
    "attack": 94,
    "health": 95,
    "id": 471,
    "points": 189,
    "tier": 95
},
{
    "attack": 95,
    "health": 95,
    "id": 472,
    "points": 190,
    "tier": 95
},
{
    "attack": 94,
    "health": 96,
    "id": 473,
    "points": 190,
    "tier": 95
},
{
    "attack": 95,
    "health": 96,
    "id": 474,
    "points": 191,
    "tier": 95
},
{
    "attack": 94,
    "health": 97,
    "id": 475,
    "points": 191,
    "tier": 95
},
{
    "attack": 95,
    "health": 96,
    "id": 476,
    "points": 191,
    "tier": 96
},
{
    "attack": 96,
    "health": 96,
    "id": 477,
    "points": 192,
    "tier": 96
},
{
    "attack": 95,
    "health": 97,
    "id": 478,
    "points": 192,
    "tier": 96
},
{
    "attack": 96,
    "health": 97,
    "id": 479,
    "points": 193,
    "tier": 96
},
{
    "attack": 95,
    "health": 98,
    "id": 480,
    "points": 193,
    "tier": 96
},
{
    "attack": 96,
    "health": 97,
    "id": 481,
    "points": 193,
    "tier": 97
},
{
    "attack": 97,
    "health": 97,
    "id": 482,
    "points": 194,
    "tier": 97
},
{
    "attack": 96,
    "health": 98,
    "id": 483,
    "points": 194,
    "tier": 97
},
{
    "attack": 97,
    "health": 98,
    "id": 484,
    "points": 195,
    "tier": 97
},
{
    "attack": 96,
    "health": 99,
    "id": 485,
    "points": 195,
    "tier": 97
},
{
    "attack": 97,
    "health": 98,
    "id": 486,
    "points": 195,
    "tier": 98
},
{
    "attack": 98,
    "health": 98,
    "id": 487,
    "points": 196,
    "tier": 98
},
{
    "attack": 97,
    "health": 99,
    "id": 488,
    "points": 196,
    "tier": 98
},
{
    "attack": 98,
    "health": 99,
    "id": 489,
    "points": 197,
    "tier": 98
},
{
    "attack": 97,
    "health": 100,
    "id": 490,
    "points": 197,
    "tier": 98
},
{
    "attack": 98,
    "health": 99,
    "id": 491,
    "points": 197,
    "tier": 99
},
{
    "attack": 99,
    "health": 99,
    "id": 492,
    "points": 198,
    "tier": 99
},
{
    "attack": 98,
    "health": 100,
    "id": 493,
    "points": 198,
    "tier": 99
},
{
    "attack": 99,
    "health": 100,
    "id": 494,
    "points": 199,
    "tier": 99
},
{
    "attack": 98,
    "health": 101,
    "id": 495,
    "points": 199,
    "tier": 99
},
{
    "attack": 99,
    "health": 100,
    "id": 496,
    "points": 199,
    "tier": 100
},
{
    "attack": 100,
    "health": 100,
    "id": 497,
    "points": 200,
    "tier": 100
},
{
    "attack": 99,
    "health": 101,
    "id": 498,
    "points": 200,
    "tier": 100
},
{
    "attack": 100,
    "health": 101,
    "id": 499,
    "points": 201,
    "tier": 100
},
{
    "attack": 99,
    "health": 102,
    "id": 500,
    "points": 201,
    "tier": 100
}
], action) => {
  switch(action.type){
    default:
      return state;
  }
}

export default enemiesReducer;