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

newsData.limitToLast(10).once('value').then( function (snapshot) {
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
    var title = document.createElement("h3");
    title.innerHTML = headlines[keykey];
    title.classList.add("title");
    ncd.appendChild(title);

    var description = document.createElement("h6");
    description.innerHTML = descriptions[keykey];
    ncd.appendChild(description);

    var flexdiv1 = document.createElement("div");
    var source = document.createElement("h5");
    var date = document.createElement("h5");
    source.innerHTML = sourceNames[keykey];
    date.innerHTML = dates[keykey];
    flexdiv1.appendChild(source);
    flexdiv1.appendChild(date);
    flexdiv1.classList.add("flexdiv");
    ncd.appendChild(flexdiv1);
}
