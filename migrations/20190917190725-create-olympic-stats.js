'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OlympicStats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      team: {
        type: Sequelize.STRING
      },
      games: {
        type: Sequelize.STRING
      },
      sport: {
        type: Sequelize.STRING
      },
      event: {
        type: Sequelize.STRING
      },
      medal: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OlympicStats');
  }
};