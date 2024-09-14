// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTUbiddbhypN0e9QWXI1Y4oSUduiig5AY",
  authDomain: "i-tokri-cdf2e.firebaseapp.com",
  projectId: "i-tokri-cdf2e",
  storageBucket: "i-tokri-cdf2e.appspot.com",
  messagingSenderId: "670631798208",
  appId: "1:670631798208:web:57413269ccc7ae9b8e9425",
  measurementId: "G-JLJ0ZSPXC0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = firebase.auth();

// Google Authentication function
function signInWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  auth
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log("User signed in:", user);

      // Redirect to dashboard or any page after successful login
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.log("Error during sign-in:", error);
    });
}

// Add event listener to Google sign-up button
document.querySelector(".google-btn").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default link behavior
  signInWithGoogle(); // Call Google Sign-In function
});
