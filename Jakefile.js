var OlympicStats = require('./models').OlympicStats
var csv = require('csv-parser')
var fs = require('fs');


task('seedDataBase', () => {
  fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    OlympicStats.create(row)
  })
})