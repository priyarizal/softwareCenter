const projectButtonHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#project-name-input').value;
    const description = document.querySelector('#project-desc').value.trim();
    if (name && description) {
        const response = await fetch(`/api/projects`, {
            method: 'POST',
            body: JSON.stringify({ name, description }),
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

document
    .querySelector('#new-project-form')
    .addEventListener('submit', projectButtonHandler);


