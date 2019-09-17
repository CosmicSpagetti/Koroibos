var OlympicStats = require('./models').OlympicStats
var csv = require('csv-parser')
var fs = require('fs');


task('seedDataBase', () => {
  fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (olympian) => {
    OlympicStats.create({
      name: olympian.Name,
      sex: olympian.Sex,
      age: olympian.Age,
      height: olympian.Height == 'NA' ? null : olympian.Height,
      weight: olympian.Weight == 'NA' ? null : olympian.Weight,
      team: olympian.Team,
      games: olympian.Games,
      sport: olympian.Sport,
      event: olympian.Event,
      medal: olympian.Medal == 'NA' ? null : olympian.Medal
    })
  })
})