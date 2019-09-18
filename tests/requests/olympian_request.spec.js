var shell = require('shelljs');
var request = require("supertest");
var app = require('../../app');
var cleanup = require('../helper/test_clear_database');

describe('api', () => {

  test('Should bring back all olympians', async() => {
    return await request(app).get("/api/v1/olympians")
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

  test('should return youngest olympian', async() => {
    return await request(app).get("/api/v1/olympians?age=youngest")
    .then(response => {
      expect(response.statusCode).toBe(200)
      expect(Object.keys(response.body[0])).toContain('name')
      expect(Object.keys(response.body[0])).toContain('age')
      expect(Object.keys(response.body[0])).toContain('team')
      expect(Object.keys(response.body[0])).toContain('sport')
      expect(Object.keys(response.body[0])).toContain('total_medals_won')
    })
  });

  test('should return oldest olympian', async() => {
    return await request(app).get("/api/v1/olympians?age=oldest")
    .then(response => {
      expect(response.statusCode).toBe(200)
      expect(Object.keys(response.body[0])).toContain('name')
      expect(Object.keys(response.body[0])).toContain('age')
      expect(Object.keys(response.body[0])).toContain('team')
      expect(Object.keys(response.body[0])).toContain('sport')
      expect(Object.keys(response.body[0])).toContain('total_medals_won')
    })
  });
});


