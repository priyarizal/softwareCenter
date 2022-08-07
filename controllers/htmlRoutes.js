const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    res.render('home', {})
});

router.get('/profile/:userId', async (req, res) => {
    //destructiring
    const { userId } = req.params
    // const userId = req.params.userId
    const userData = await User.findOne({
        where: {
            id:
                userId
        }
    });
    console.log(userData)
    //datavalue had the json I wanted
    res.render('userprofile', userData.dataValues)
});

router.get('/login', async (req, res) => {
    try {

        // Pass serialized data and session flag into template
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/signup', async (req, res) => {
    try {

        // Pass serialized data and session flag into template
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;