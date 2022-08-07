//join table

const User = require('./User');
const project = require('./Project');
const techInterest = require('./techinterests');
const ProjectUser = require('./projectUser');
const Project = require('./Project');

//userproject join table - how Im joining them 
// users are the collaborators
//collabs can go through many to many join table
//one user can have many proj but can only have one owner

//User hasMany projects
User.belongsToMany(project, {
    foreignKey: 'project_id', //is this correct?
    through:{
      model: ProjectUser,
      unique: false,
    }
    
    // unique: false
    // as: 'products'
  });

Project.belongsToMany(User, {
    foreignKey: 'user_id', //is this correct?
    through:{
      model: ProjectUser,
      unique: false,
    }
  });
  
 
 //User haveMany techInterests
  User.hasMany(techInterest, {
    foreignKey: 'user_id', //is this foreign key correct? confused about foreign keys?
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



