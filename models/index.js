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
  
  //Users HasMany (users) - through a join friends table
  // User.belongsToMany(User, {

  //   through: {
  //     model: User, //should I be creating a User/friends table then? user belongs to many user makes no sense + through user makes no sense
  //     unique: false
  //   },
  //   foreignKey: 'user_id',
  // })

  //techinterests

//techinterests BelongsToMany Users
  // techInterest.belongsToMany(User, {
  
  //   through: {
  //     model: User, //dont think this is correct
  //     unique: false
  //   },
  //   foreignKey: 'user_id',
  // })


module.exports = {
    techInterest,
    project, 
    User
}



