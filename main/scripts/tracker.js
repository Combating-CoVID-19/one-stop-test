var db = firebase.database();

var content = document.getElementById('tracker-content')
var countries = []
var retrievedData;
var currentCountry;
var x=0;

// firebase.database().ref('/CoVIDdata/').once('value').then(function(snapshot) {
//     retrievedData = snapshot.val();
  
// });

var covidData = firebase.database().ref('CoVIDdata/');
covidData.on('value', function(snapshot) {
    countries = []
//   addData(snapshot.val().countryArray.Countries);
retrievedData = snapshot.val();
  for(i=0; snapshot.val().countryArray.Countries.length>i; i++){
      countries.push(snapshot.val().countryArray.Countries[i])
  }
 x=0;
  addData()
});



function addData(){

        if(countries.length > x){

        var currentElement = document.getElementById(countries[x])
        if(currentElement){

            if(currentElement.innerHTML != retrievedData[countries[x]].Confirmed){
            console.log('data updated')
            var currentCountryElement = document.getElementById(countries[x])
            currentCountryElement.innerHTML = retrievedData[countries[x]].Confirmed;
            }
        } else {
            var list = document.getElementById('tracker-list')
            var newDiv = document.createElement('div');
            currentCountry = countries[x];
            var newCountryElement = document.createElement('a');
            var newBreak = document.createElement('br')
            $(newCountryElement).attr('id', countries[x]);
            newCountryElement.innerHTML = retrievedData[countries[x]].Confirmed;
            // content.appendChild(list);
            list.appendChild(newCountryElement)
            list.appendChild(newBreak)
        }
        x++
        addData()
        }
 
        // for (var key in retrievedData) {
        //     if (retrievedData.hasOwnProperty(key)) {
        //         console.log(key)
        //        var currentElement = document.getElementById(key)
        //        if(currentElement){
        //         console.log(key)
        //        } else {
        //         var newCountryElement = document.createElement("p");
        //         $(newCountryElement).attr('id', key);
        //         newCountryElement.innerHTML = retrievedData[key].Confirmed;
        //         content.appendChild(newCountryElement);
        //         console.log(retrievedData[key])
        //        }
        //     }
        // }
}