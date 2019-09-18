var express = require('express');
var router = express.Router();
var Olympian = require('../../../models').Olympian
var sequelize = require('sequelize');

router.get('/', async(request,response) => {
  if (request.query.age){
    if (request.query.age == 'youngest'){
      await Olympian.findAll({
        attributes: ['name', 'age', 'team', 'sport', [sequelize.fn('COUNT', sequelize.col('medal')), 'total_medals_won']],
        group: ['Olympian.sport', 'Olympian.team', 'Olympian.age', 'Olympian.name'],
        order: [['age', 'ASC']],
        limit: 1
    }) 
    .then(yougestOlympian => {
      response.setHeader("Content-Type", "application/json");
      response.send(JSON.stringify(yougestOlympian))
    })
    .catch (error => {
      response.setHeader("Content-Type", "application/json");
      response.status(500).send({ error })
    }) 
    } else if (request.query.age == 'oldest') {
      await Olympian.findAll({
        attributes: ['name', 'age', 'team', 'sport', [sequelize.fn('COUNT', sequelize.col('medal')), 'total_medals_won']],
        group: ['Olympian.sport', 'Olympian.team', 'Olympian.age', 'Olympian.name'],
        order: [['age', 'DESC']],
        limit: 1
    })
    .then(oldestOlympian => {
      response.setHeader("Content-Type", "application/json");
      response.send(JSON.stringify(oldestOlympian))
    }).catch(error =>{
        response.setHeader("Content-Type", "application/json");
        response.status(500).send({ error })
      })}
  } else {
    await Olympian.findAll({
      attributes: ['name', 'age', 'team', 'sport', [sequelize.fn('COUNT', sequelize.col('medal')), 'total_medals_won']],
      group: ['Olympian.sport', 'Olympian.team', 'Olympian.age', 'Olympian.name']
    })
    .then(allOlympian => {
      response.setHeader("Content-Type", "application/json");
      response.send(JSON.stringify({olympians: allOlympian}))
    })
    .catch (error => {
      response.setHeader("Content-Type", "application/json");
      response.status(500).send({ error })
    })
  }
})

module.exports = router