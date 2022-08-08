const router = require('express').Router();

const userRoutes = require('./userRoutes.js')
const projectRoutes = require("./projectRoutes")

router.use('/user', userRoutes)
router.use('/project', projectRoutes)

// router.use('/images')

module.exports = router;