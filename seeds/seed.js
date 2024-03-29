const Sequelize = require('sequelize');
const sequelize = require('../config/connection');
const { User, Plan } = require('../models');
const userData = require('./userData.json');
const planData = require('./planData.json');

const createDatabase = async() => {
    const config = sequelize.config;
    const sequelize2 = new Sequelize(`mysql://${config.username}:${config.password}@${config.host}:${config.port}`);
    await sequelize2.query(`DROP DATABASE IF EXISTS ${config.database};`);
    await sequelize2.query(`CREATE DATABASE ${config.database};`);
}

const seedDatabase = async() => {
    await createDatabase();
    await sequelize.sync({ force: true });
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    process.exit(0);
};

seedDatabase();