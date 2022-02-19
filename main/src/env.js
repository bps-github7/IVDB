(function (window) {
  window.__env = window.__env || {};

  // defining some env variables to hide our Firebase app configs
	window.__env.firebaseConfig = {
		apiKey : "AIzaSyDM25NkiosA1Xy8iH9H9jUlF62MBHvEinQ",
		authDomain : "internet-videogame-datab-34145.firebaseapp.com",
		projectId : "internet-videogame-datab-34145",
		storageBucket : "internet-videogame-datab-34145.appspot.com",
		messagingSenderId : "787195740544",
		appId : "1:787195740544:web:d0c6629f7901ba0e794165"
	}
	
	
	/*TODO: gotta note, this isnt committed to github, and so if using netlify for the deployed
	app, we will need to find a different solution */

	// window.__env.enableDebug = true;
}(this));