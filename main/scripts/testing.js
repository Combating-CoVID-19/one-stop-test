// setInterval(function(){
//     request("https://pomber.github.io/covid19/timeseries.json", { json: true }, (err, res, body) => {
//     if (err) { 
//         return console.log(err); 
//     }

//     var i;
//     for(i=0; i < body.length; i++){
//         console.log(body.Argentina[i].date)
//     }



//     });
// }, 10*1000);
var countryArray = [];
var myObj, x;
var i;
var currentCountry;
var e;
var totalConfirmed;
var newCases;
function test(){
var xhr = new XMLHttpRequest;
xhr.open("GET", "https://pomber.github.io/covid19/timeseries.json")
xhr.send()

xhr.onreadystatechange = function() {
    myObj = JSON.parse(xhr.response);
    for (x in myObj) {
        console.log(x)
        countryArray.push(x)
        
   
      }
      for(i=0; countryArray.length > i; i++){
      var totalConfirmed = 0;
        currentCountry = countryArray[i]
        for(e=0; myObj[currentCountry].length > e; e++){
      console.log(myObj[currentCountry][e].confirmed)
      totalConfirmed = myObj[currentCountry][e].confirmed;
      console.log(currentCountry + ' total confirmed ' + totalConfirmed)
      arrayLength = myObj[currentCountry].length
      newCases = (myObj[currentCountry][arrayLength - 1].confirmed) - (myObj[currentCountry][arrayLength - 2].confirmed);
          console.log("New Cases " +newCases)
    }
    }
    // if(status !== 400){
    //     var obj = JSON.parse(xhr.response)
        
    //     console.log(obj)
    // }
    console.log('completed')
    return countryArray;
}

}

function test2() {

}