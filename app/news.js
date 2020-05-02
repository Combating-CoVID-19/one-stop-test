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

var openedHeadlines;

    var x = 0;
var currentHeadline;
var newsData = firebase.database().ref('News/');


newsData.orderByChild('PublishDate').limitToLast(10).once('value').then( function (snapshot) {
    headlines = [];
    x=0;
    retrievedData = snapshot.val();

    for (var key in retrievedData) {
      if (retrievedData.hasOwnProperty(key)) {
        headlines.push(retrievedData[key].Title);
        descriptions.push(retrievedData[key].Description);
        dates.push(retrievedData[key].PublishDate);
        sourceNames.push(retrievedData[key].SourceName);
        urls.push(retrievedData[key].URL);

        x++;
      }
    }
    var con;
    for(con=9; con>-1; con--) {
          build(con);
    }

    openedHeadlines = 10;
});


function build(keykey) {
    var articleDate = '';
    var ncd = document.getElementById("nCD");
    var anchor = document.createElement("a")
    var title = document.createElement("h3");
    var titleInner = document.createElement('a')
    titleInner.innerHTML = headlines[keykey];
    title.classList.add("title");
    // ncd.appendChild(title);
    ncd.appendChild(anchor)
    anchor.appendChild(title)
    title.appendChild(titleInner)
    titleInner.classList.add('news-link')
    $(titleInner).attr('href', urls[keykey] )
    $(titleInner).attr('target', "_blank")

    var flexdiv1 = document.createElement("div");
    var source = document.createElement("h5");
    var date = document.createElement("h5");
    var articleDay = ''
    // articleDate = new Date((dates[keykey]))
    var d,
    days,
    months;
    
    d = new Date(dates[keykey]);
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // console.log(days[d.getUTCDay()]);
    articleDate += days[d.getUTCDay()] +', '
    articleDate += months[d.getUTCMonth()] + ' '
    articleDay = d.getUTCDate().toString()
    articleDate += articleDay;
    // articleDate = articleDate.toString();
    // articleDate = articleDate.substring(0, 11);

    source.innerHTML = sourceNames[keykey] + "    •    " + articleDate;
    $(anchor).attr('target', "_blank")

    flexdiv1.appendChild(source);
    // flexdiv1.appendChild(date);
    // flexdiv1.classList.add("flexdiv");
    // ncd.appendChild(flexdiv1);
    anchor.appendChild(flexdiv1)
    $(anchor).attr('href', urls[keykey])


    var description = document.createElement("p");
    description.innerHTML = descriptions[keykey];
    anchor.appendChild(description);



    var contDiv1 = document.createElement("div");
    contDiv1.id = "contDiv";
    var btn = document.createElement("a");
    btn.innerHTML = "..continue reading..";
    btn.id = "contBTN";
    btn.href = urls[keykey];
    $(btn).attr('target', '_blank')
    // contDiv1.appendChild(btn);
    // description.appendChild(contDiv1);
    // description.innerHTML += "<a href='"+urls[keykey]+"'>..continue reading..</a>";
}


function loadMoreNews(){

    newsData.orderByChild('PublishDate').startAt("2020-04-21").endAt("2020-04-23").once('value').then(function(snapshot){
        console.log(snapshot.val())
    })
  for(con=x-1; con>openedHeadlines; con--) {
        build(con);
  }
  openedHeadlines += 10
}
