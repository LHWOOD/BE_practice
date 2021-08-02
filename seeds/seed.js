const sequelize = require("../config/connection");
const { User } = require("../models");

const userSeedData = require("./userSeedData.json");

const seedDataBase = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  const user = await User.bulkCreate(userSeedData);
  console.log("\n----- DATABASE SEEDED -----\n");

  process.exit(0);
};

seedDataBase();
