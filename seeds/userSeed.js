const { User } = require('../models');

const userSeedData =
  [
    {
      name: "Yuh",
      email: "Yuh@hotmail.com",
      password: "password12"
    },
    {
      name: "LarrytheLobster",
      email: "lobster@gmail.com",
      password: "password12",
      profileImage: "https://www.birdlife.org/wp-content/uploads/2021/06/Owl-in-tree-by-Philip-Brown-1-1024x576.jpg",
      Bio: "Hi, I like lobsters"

    },
    {
      name: "Anika",
      email: "anika@aol.com",
      password: "password12"
    }
  ]

const seedingUsers = () => User.bulkCreate(userSeedData, { individualHooks: true })

module.exports = seedingUsers;
