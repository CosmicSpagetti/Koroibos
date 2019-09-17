var factory =  'factory-girl'
var OlympianStats = '../models/olympicstats';

factory.define('OlympicStats', OlympianStats, {
  name: factory.sequence('OlympianStats.name', n => `Billy ${n}` ),
  sex: 'Who cares',
  age: factory.sequence('OlympianStats.age', n => 16 + n),
  height: factory.sequence('OlympianStats.height', n => 100 + n),
  weight: factory.sequence('OlympianStats.weight', n => 99 + n),
  team: 'Team Billy',
  games: 'Dodge the wrench',
  sport: 'Ball',
  event:  "Ball Event",
  medal: "I just came so I won't get fined"
});

