const router = require('express').Router();

const userRoutes = require('./userRoutes.js')
const projectRoutes = require("./projectRoutes")

router.use('/user', userRoutes)
router.use('/projects', projectRoutes)

// router.use('/images')

module.exports = router;