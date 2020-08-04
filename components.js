import navbar from '/navbar.html';

fetch(navbar).then(response => {
    if(response.ok)
        return response.txt();
}).then(page => {
    document.body.innerHTML += page;
    });