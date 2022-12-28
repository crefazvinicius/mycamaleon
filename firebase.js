import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCeaLpwxWU19dt171O_7OFWNSNKydDG__4",
    authDomain: "mycamaleon-a17ee.firebaseapp.com",
    projectId: "mycamaleon-a17ee",
    storageBucket: "mycamaleon-a17ee.appspot.com",
    messagingSenderId: "1043782384671",
    appId: "1:1043782384671:web:74fb812868917b1482e92a",
    measurementId: "G-9Q4XXQBQCP"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
createUserWithEmailAndPassword(form.email().value, form.password().value)
  .then(() => {
    hideLoading();
    window.location.href = "pages/home/home.html";
}).catch(error => {
    hideLoading();
    alert(getErrorMessage(error));
});
}
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location.href = "pages/home/home.html";
    }
})


function login() {
    showLoading();
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(() => {
        hideLoading();
        window.location.href = "pages/home/home.html";
    }).catch(error => {
        hideLoading();
        alert(getErrorMessage(error));
    });
}
