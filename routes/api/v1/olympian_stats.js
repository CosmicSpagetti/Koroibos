var express = require('express');
var router = express.Router();
var Olympian = require('../../../models').Olympian
var sequelize = require('sequelize');

router.get('/', async (request, response) => {
  var olympians = await Olympian.findAll({
    attributes: [
      [sequelize.fn('COUNT', sequelize.col('name')), 'total_olympians']
    ],
    group: ['Olympian.age', 'Olympian.name']
  })
  var avgAge = await Olympian.findAll({
    attributes: [
      [sequelize.fn('AVG', sequelize.col('age')), 'average_age']
    ]
  });
  var age = avgAge[0].dataValues.average_age
  var avgMale = await Olympian.findAll({
    attributes: [
      [sequelize.fn('AVG', sequelize.col('weight')), 'male_olympians']
    ],
    where: { sex: 'M' }
  });
  var maleWt = avgMale[0].dataValues.male_olympians;
  var avgFemale = await Olympian.findAll({
    attributes: [
      [sequelize.fn('AVG', sequelize.col('weight')), 'female_olympians']
    ],
    where: { sex: 'F' }
  });
  var femaleWt = avgFemale[0].dataValues.female_olympians;
  response.setHeader('Content-Type', 'application/json');
  response.status(200).send(JSON.stringify({
    olympian_stats: {
      total_competing_olympians: olympians.length,
      average_weight: {
        unit: 'kg',
        male_olympians: Math.round(maleWt * 100) / 100,
        female_olympians: Math.round(femaleWt * 100) / 100
      },
      average_age: Math.round(age * 100) / 100
    }
  }));
})
module.exports = router