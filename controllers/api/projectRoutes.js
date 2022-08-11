const router = require('express').Router();
const { Project, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
    console.log(newProject);
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
    const project = newProject.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });

    res.status(200).json(newProject);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const allProject = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const projects = allProject.map((project) => project.get({ plain: true }));
    // attributes : ["id", "name", "description"]
    console.log(allProject)
    res.status(200).json(allProject);
    res.render('/', {
      projects,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});


module.exports = router;



