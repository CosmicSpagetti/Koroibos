var express = require('express');
var router = express.Router();
var Olympian = require('../../../models').Olympian
var sequelize = require('sequelize');

router.get('/', async(request,response) => {
  await Olympian.findAll({
    attributes: ['name', 'age', 'team', 'sport', [sequelize.fn('COUNT', sequelize.col('medal')), 'total_medals_won']],
    group: ['Olympian.sport', 'Olympian.team', 'Olympian.age', 'Olympian.name']
  })
    .then(olympian => {
      response.setHeader("Content-Type", "application/json");
      response.send(JSON.stringify({olympians: olympian}))
    })
    .catch(error => {
      response.setHeader("Content-Type", "application/json");
      response.status(500).send({ error })
    });
})

module.exports = router