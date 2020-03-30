var ui = new firebaseui.auth.AuthUI(firebase.auth());
function startUI() {
    ui.start('#firebaseui-auth-container', {
        signInSuccessUrl: 'launch.html',
        signInOptions: [
        
        
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        
        ],
        // Other config options...
    });
}