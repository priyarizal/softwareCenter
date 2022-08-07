const sequelize = require('../config/connection');

const seedingUsers = require('./userSeed');
const seedingTechInterest = require('./techInterestSeed');
const seedingProject = require('./projectSeeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedingUsers()
  console.log("users seeded");

  await seedingTechInterest();
  console.log("techInterest seeded");

  await seedingProject();
  console.log("projects seeded");

  process.exit(0);
};
seedDatabase();