const Sequelize = require("sequelize");
require('dotenv').config();
const db = new Sequelize(
    process.env.database,
    process.env.user,
    process.env.password,
    {
        host: process.env.host,
        dialect: 'mysql',
        logging: false,
        port: 3306,
        define: {
            timestamps: true
        }
    }
);
module.exports = db;

require("./discordReminder")(db);