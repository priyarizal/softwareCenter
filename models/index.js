//join table

const User = require('./User');
const project = require('./Project');
const techInterest = require('./techinterests');
const ProjectUser = require('./projectUser');
const Project = require('./Project');


//User hasMany projects
User.belongsToMany(project, {
    foreignKey: 'project_id', 
    through:{
      model: ProjectUser,
      unique: false,
    }
    
    // unique: false
    // as: 'products'
  });

Project.belongsToMany(User, {
    foreignKey: 'user_id', 
    through:{
      model: ProjectUser,
      unique: false,
    }
  });
  
 
 //User haveMany techInterests
  User.hasMany(techInterest, {
    foreignKey: 'user_id', 
    onDelete: "CASCADE"
  });

  techInterest.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  

module.exports = {
    techInterest,
    project, 
    User
}



