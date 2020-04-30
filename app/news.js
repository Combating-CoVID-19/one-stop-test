var db = firebase.database();

// var content = document.getElementById('tracker-content')

var headlines = [];
var currentHeadline;
var newsData = firebase.database().ref('News/');

newsData.on('value', function (snapshot) {
    headlines = [];
    console.log(snapshot.val());
    retrievedData = snapshot.val();
    for (i = 0; 20 > i; i++) {
        currentHeadline = retrievedData[i];
        headlines.push(currentHeadline.Title);
    }
    
});
