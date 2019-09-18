var shell = require('shelljs');
var request = require("supertest");
var app = require('../../app');
var cleanup = require('../helper/test_clear_database');

describe('api', () => {
  afterAll(async() => {
    cleanup();
  });

  test('should return overall olympian stats', async() => {
    return await request(app).get("/api/v1/olympian_stats")
    .then(response => {
      expect(response.statusCode).toBe(200)
      expect(Object.keys(response.body)).toContain('olympian_stats')
      expect(Object.keys(response.body.olympian_stats)).toContain('average_weight')
      expect(Object.keys(response.body.olympian_stats)).toContain('average_age')
      expect(Object.keys(response.body.olympian_stats.average_weight)).toContain('male_olympians')
      expect(Object.keys(response.body.olympian_stats.average_weight)).toContain('female_olympians')
    })
  });
});