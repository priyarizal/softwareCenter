const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const cloudinary = require("cloudinary");

class User extends Model {
    //probably have to check password here (login)
    //then return a bcrypted password and compare it with signup info
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            isAlphaNumeric: true,
            validate: {
                len: [10],
            },

            profileImage: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            bio: {
                type: DataTypes.TEXT,
                allowNull: true,
            }
        },
    },
    //add hooks for beforecreate and beforeUpdate with .hash and the allowed length of passowrd 
    {

        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },


        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User


//useruser model- jointable (friend)

//projectuser model (collab)

//userProject
// Projectbelongstouseras Owner