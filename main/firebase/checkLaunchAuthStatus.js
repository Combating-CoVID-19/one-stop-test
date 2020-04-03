var userSignedIn = false;

function checkStatus(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
          console.log('Logged in as ' + firebase.User.name)
          userSignedIn = true;
          window.location.replace("app/index.html")
      } else {
          window.location.replace("app/index.html"+"?authStatus=false");
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