const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./userData.json');
const planData = require('./planData.json');

const seedDatabase = async() => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Project.bulkCreate(planData);

    process.exit(0);
};

seedDatabase();