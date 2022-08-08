const projectButtonHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#project-name')
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
            document.location.replace('/home');
        } else {
            alert('Failed to create project');
        }
    }
};

document
    .querySelector('.new-project')
    .addEventListener('submit', projectButtonHandler);


module.exports = router; 
