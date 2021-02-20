var DataTypes = require("sequelize").DataTypes;
var _discordReminder = require("./discordReminder");

function initModels(sequelize) {
  var discordReminder = _discordReminder(sequelize, DataTypes);


  return {
    discordReminder,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
