//join table

const User = require('./User');
const TechInterest = require('./TechInterest');
const ProjectUser = require('./ProjectUser');
const Project = require('./Project');


//User hasMany projects
User.belongsToMany(Project, {
  foreignKey: 'project_id',
  through: {
    model: ProjectUser,
    unique: false,
  }

  // unique: false
  // as: 'products'
});

Project.belongsToMany(User, {
  foreignKey: 'user_id',
  through: {
    model: ProjectUser,
    unique: false,
  }
});


//User haveMany techInterests
User.hasMany(TechInterest, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

TechInterest.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


module.exports = {
  TechInterest,
  Project,
  User
}



