// Import FirebaseAuth and initialize it
const auth = firebase.auth();

// Google Authentication function
function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    
    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            console.log('User signed in:', user);

            // Redirect to dashboard or any page after successful login
            window.location.href = 'dashboard.html'; 
        })
        .catch((error) => {
            console.log(error);
        });
}

// Add event listener to Google sign-up button
document.querySelector('.google-btn').addEventListener('click', signInWithGoogle);
