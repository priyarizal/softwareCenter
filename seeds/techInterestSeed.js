const { TechInterest } = require('../models');

const techInterestSeedData = 
[
    {
        user_id: 2,
        technologies: "REST API's"
        
    },
]

const seedingTechInterest = () => TechInterest.bulkCreate(techInterestSeedData)

module.exports = seedingTechInterest;