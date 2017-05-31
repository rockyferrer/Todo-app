import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyB3gAMNM84ZVsOJ2m1su_fYk8eDR4JQ9E0",
        authDomain: "rocky-todo-app.firebaseapp.com",
        databaseURL: "https://rocky-todo-app.firebaseio.com",
        projectId: "rocky-todo-app",
        storageBucket: "rocky-todo-app.appspot.com",
        messagingSenderId: "377736971666"
    };
    firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
