const { Project } = require('../models');

const projectSeedData =

  [
    {
      user_id: 1,
      name: "RubyonRails1",
      content: "A new scientific dicover suggests that the natural ingredients of honey and Vitamin A,,C, and B6 found in lemon are proven to cure depression!",
    },
    {
      user_id: 2,
      name: "Bootstrap and CSS",
      description: "Remember the super popular movie Interstellar? Well.. the whole thing about not aging in space is true. Technically, you could age reall really reallyyy** slow if you traveled at the speed of light",


    },
    {
      user_id: 3,
      name: "Touch Grass",
      description: "Touching grass is imperative to mental and physical health. Touching grass 5 times a day, keeps depression away!",

    }
  ]

const seedingProject = () => Project.bulkCreate(projectSeedData)

module.exports = seedingProject;