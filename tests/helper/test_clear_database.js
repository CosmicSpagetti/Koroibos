var Olympian = require('../../models').Olympian

module.exports = async function cleanup() {
  await Olympian.destroy({ where: {} })
}
