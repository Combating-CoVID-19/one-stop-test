var userSignedIn = false;

function checkStatus(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
          console.log('Logged in as ' + firebase.User.name)
          userSignedIn = true;

      } else {
          window.location.href = "auth.html"
      }


    })
}

function signOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
  }