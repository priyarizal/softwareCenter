const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});


router.get('/user/:id', withAuth, async (req, res) => {
  try {
    const newProject = await Project.findByPk({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      }
    });
    res.status(200).json(newProject);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});




module.exports = router;

