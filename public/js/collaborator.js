const { json } = require("sequelize/types");

const getCollaborators = async (event) => {
    event.preventDefault();
    console.log(event)
    return fetch('./api/users/all').then(response => (
        response.json()

    )).then(json => console.log(json)).catch(err =>
        console.log(err))
}

const collaboratorElement = document.querySelector("form, select")

collaboratorElement.addEventListener("load", getCollaborators)

///bring this in with script.js here


//put the cond statment 
//how am i getting my 

//withAuth for get all user

