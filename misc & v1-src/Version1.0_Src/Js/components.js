//there is no way this import schema would work properly,,,
import navbar from '/navbar.html';


//trying to get html from 'navbar' file and inject it into the current html.
fetch(navbar).then(response => {
    if(response.ok)
        return response.txt();
}).then(page => {
    document.body.innerHTML += page;
    });
//getting a CORS error: firefox info regarding that is ! very helpful.