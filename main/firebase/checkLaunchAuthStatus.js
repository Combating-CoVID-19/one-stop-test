var userSignedIn = false;

function checkStatus(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
          console.log('Logged in as ' + firebase.User.name)
          userSignedIn = true;

      } else {
          console.log('not-epic')
      }


    })
}