
const router = require('express').Router();
const apiRoutes = require("./api")
const htmlRoutes = require("./htmlRoutes")
const projectRoutes = require("./api/projectRoutes")

router.use(htmlRoutes)


// router.use(projectRoutes)

router.use("/api", apiRoutes)




module.exports = router; 