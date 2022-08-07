const { User } = require('../models');

const userSeedData =
  [
    {
      name: "Yuh",
      email: "Yuh@hotmail.com",
      password: "password12",
      profileImage: "https://www.lomsnesvet.ca/wp-content/uploads/sites/21/2019/08/Kitten-Blog.jpg",
      Bio: "Hi, I have 5 kittens and I love them"

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
      password: "password12",
      profileImage: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623959191-medium-plant-dieffenbachia-white-pot_2048x.jpg",
      Bio: "Hi, outside of coding, I am a plant mom"
    }
  ]

const seedingUsers = () => User.bulkCreate(userSeedData, { individualHooks: true })

module.exports = seedingUsers;
