var Olympian = require('../../models').Olympian
var factory = require('factory-bot');
const adapter = new factory.SequelizeAdapter();
factory = factory.factory;
factory.setAdapter(adapter);


factory.define('olympic', Olympian, {
  name: factory.sequence('olympian.name', n => `Billy ${n}` ),
  sex: 'Who cares',
  age: factory.sequence('olympian.age', n => 16 + n),
  height: factory.sequence('olympian.height', n => 100 + n),
  weight: factory.sequence('olympian.weight', n => 99 + n),
  team: 'Team Billy',
  games: 'Dodge the wrench',
  sport: 'Ball',
  event:  "Ball Event",
  medal: "I just came so I won't get fined"
});

