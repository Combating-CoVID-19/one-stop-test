var ui = new firebaseui.auth.AuthUI(firebase.auth());
function startUI() {
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            console.log('Logged in as ' + firebase.User.name)
            window.location.href = "launch.html"
        } else {
            ui.start('#firebaseui-auth-container', uiConfig)
            console.log('not signed in')
        }


      })

}

var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'default',
    signInSuccessUrl: 'launch.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,

    ],
    // Terms of service url.
    // tosUrl: '<your-tos-url>',
    // // Privacy policy url.
    // privacyPolicyUrl: '<your-privacy-policy-url>'
  };

  function signOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
  }

  function checkStatus(){
      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            console.log('Logged in as ' + firebase.User.name)
 
        } else {
            console.log('not-epic')
        }


      })
  }