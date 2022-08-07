const { techInterest } = require('../models');

const techInterestSeedData = 
[
    {
        user_id: 2,
        technologies: "REST API's"
        
    },
]

const seedingTechInterest = () => techInterest.bulkCreate(techInterestSeedData)

module.exports = seedingTechInterest;