const sequelize = require("../config/connection");
const User = require("../models");

const userSeedData = require("./userSeedData.json");

const seedDataBase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeedData);

  process.exit(0);
};

seedDataBase();
