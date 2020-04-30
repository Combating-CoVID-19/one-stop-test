var db = firebase.database();

// var content = document.getElementById('tracker-content')

var headlines = [];

var newsData = firebase.database().ref('News/');

newsData.on('value', function (snapshot) {
    headlines = []
    retrievedData = snapshot.val();
    for (i = 0; 20 > i; i++) {
        headlines.push(retrievedData[i]);
    }

    console.log('data updated on remote')
    // addData()
});
