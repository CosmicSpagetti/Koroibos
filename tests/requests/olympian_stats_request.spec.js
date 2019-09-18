var shell = require('shelljs');
var request = require("supertest");
var app = require('../../app');

var OlympicStats = require('../../models').Olympian
var factory = require('factory-bot');
const adapter = new factory.SequelizeAdapter();
factory = factory.factory;
factory.setAdapter(adapter);

describe('api', () => {
  beforeAll(async() => {
    await shell.exec('npx sequelize db:create')
  });
  beforeEach(async() => {
    await shell.exec('npx sequelize db:migrate')
    await factory.createMany('olympicStats', 5)
  });
  afterEach(async() => {
    await shell.exec('npx sequelize db:migrate:undo:all')
    await factory.cleanup
    await shell.exec('npx sequelize db:drop') 
  });

  test('Should bring back all olympians', () => {
    return request(app).get("/api/v1/olympians")
    .then(response => {
      expect(response.statusCode).toBe(200)
      expect(Object.keys(response.body)).toContain('olympians')
      expect(Object.keys(response.body.olympians[0])).toContain('name')
      expect(Object.keys(response.body.olympians[0])).toContain('age')
      expect(Object.keys(response.body.olympians[0])).toContain('team')
      expect(Object.keys(response.body.olympians[0])).toContain('sport')
      expect(Object.keys(response.body.olympians[0])).toContain('total_medals_won')
    })
  });

  test('should return youngest olympian', () => {
    return request(app).get("/api/v1/olympians?age=youngest")
    .then(response => {
      expect(response.statusCode).toBe(200)
      expect(Object.keys(response.body)).toContain('olympians')
      expect(Object.keys(response.body.olympians[0])).toContain('name')
      expect(Object.keys(response.body.olympians[0])).toContain('age')
      expect(Object.keys(response.body.olympians[0])).toContain('team')
      expect(Object.keys(response.body.olympians[0])).toContain('sport')
      expect(Object.keys(response.body.olympians[0])).toContain('total_medals_won')
      expect(Object.keys(response.body.olympians[0].age)).toBe(16)
    })
  });
});



factory.define('olympicStats', OlympicStats, {
  name: factory.sequence('olympianStats.name', n => `Billy`),
  sex: 'Who cares',
  age: factory.sequence('olympianStats.age', n => 16 + n),
  height: factory.sequence('olympianStats.height', n => 100 + n),
  weight: factory.sequence('olympianStats.weight', n => 99 + n),
  team: 'Team Billy',
  games: 'Dodge the wrench',
  sport: 'Ball',
  event: "Ball Event",
  medal: "I just came so I won't get fined"
});

