'use strict';
module.exports = (sequelize, DataTypes) => {
  const OlympicStats = sequelize.define('OlympicStats', {
    name: DataTypes.STRING,
    sex: DataTypes.STRING,
    age: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    team: DataTypes.STRING,
    games: DataTypes.STRING,
    sport: DataTypes.STRING,
    event: DataTypes.STRING,
    medal: DataTypes.STRING
  }, {});
  OlympicStats.associate = function(models) {
    // associations can be defined here
  };
  return OlympicStats;
};