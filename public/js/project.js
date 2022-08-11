const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#project-name-input').value;
    const description = document.querySelector('#project-desc').value.trim();
    const collaborator = document.querySelector('#collab').value.trim();
    if (name && description) {
        const response = await fetch(`/api/projects`, {
            method: 'POST',
            body: JSON.stringify({ name, collaborator, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create project');
        }
    }
};

var newValue = document.querySelector('#new-project-form')
newValue.addEventListener('submit', newFormHandler);

// addEventListener('submit', projectButtonHandler);
console.log(newValue)


