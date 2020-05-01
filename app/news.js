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
// console.log(newsData);

newsData.orderByChild('PublishDate').limitToLast(10).once('value').then( function (snapshot) {
    headlines = [];
    // console.log(snapshot.val());
    retrievedData = snapshot.val();
    var x = 0;
    for (var key in retrievedData) {
      if (retrievedData.hasOwnProperty(key)) {
        headlines.push(retrievedData[key].Title);
        descriptions.push(retrievedData[key].Description);
        dates.push(retrievedData[key].PublishDate);
        sourceNames.push(retrievedData[key].SourceName);
        urls.push(retrievedData[key].URL);
        build(x);
        x++;
      }
    }

});


function build(keykey) {
    var ncd = document.getElementById("nCD");
    var title = document.createElement("h3");
    var titleInner = document.createElement('a')
    titleInner.innerHTML = headlines[keykey];
    title.classList.add("title");
    ncd.appendChild(title);
    title.appendChild(titleInner)
    titleInner.classList.add('news-link')
    $(titleInner).attr('href', urls[keykey] )
    $(titleInner).attr('target', "_blank")

    var description = document.createElement("h6");
    description.innerHTML = descriptions[keykey];
    ncd.appendChild(description);

    var flexdiv1 = document.createElement("div");
    var source = document.createElement("h5");
    var date = document.createElement("h5");
    source.innerHTML = sourceNames[keykey];
    articleDate = new Date(dates[keykey])
    
    articleDate = articleDate.toString();
    articleDate = articleDate.substring(0, 15);
    date.innerHTML = articleDate;
    flexdiv1.appendChild(source);
    flexdiv1.appendChild(date);
    flexdiv1.classList.add("flexdiv");
    ncd.appendChild(flexdiv1);

    var contDiv1 = document.createElement("div");
    contDiv1.id = "contDiv";
    var btn = document.createElement("a");
    btn.innerHTML = "Continue reading..";
    btn.id = "contBTN";
    btn.href = urls[keykey];
    $(btn).attr('target', '_blank')
    contDiv1.appendChild(btn);
    ncd.appendChild(contDiv1);
}
