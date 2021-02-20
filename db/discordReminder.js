const {DataTypes} = require('sequelize')
module.exports = (db) => {
 db.reminders = sequelize.define('discordReminder', {
    discordTag: {
      type: DataTypes.STRING(37),
      allowNull: false,
      primaryKey: true
    },
    discordMessage: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    timeForReminder: {
      type: DataTypes.DATE,
      allowNull: false
    },
    timezone: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    timestamps: false
  });
};
