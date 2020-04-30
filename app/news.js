var db = firebase.database();

// var content = document.getElementById('tracker-content')

var headlines = [];
var authors = [];
var contentArr = [];
var descriptions = [];
var dates = [];
var sourceNames = [];
var urls  = [];
var urlforimages = [];


var currentHeadline;
var newsData = firebase.database().ref('News/');
console.log(newsData);

newsData.once('value').then( function (snapshot) {
    headlines = [];
    console.log(snapshot.val());
    retrievedData = snapshot.val();
    var x = 0;
    for (var key in retrievedData) {
      if (retrievedData.hasOwnProperty(key)) {
        headlines.push(retrievedData[key].Title);
        authors.push(retrievedData[key].Author);
        contentArr.push(retrievedData[key].Content);
        descriptions.push(retrievedData[key].Description);
        dates.push(retrievedData[key].PublishDate);
        sourceNames.push(retrievedData[key].SourceName);
        urls.push(retrievedData[key].URL);
        urlforimages.push(retrievedData[key].URLToImage);
        build(x);
        x++;
      }
    }

});


function build(keykey) {
    var ncd = document.getElementById("nCD");
    var title = document.createElement("h2");
    title.innerHTML = headlines[keykey];
    title.classList.add("title");
    ncd.appendChild(title);
}
