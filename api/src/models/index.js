const dbConfig = require('../../config/databaseConfig')

const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.vehicle = require('./vehicleModel')(sequelize, Sequelize);

module.exports = db;