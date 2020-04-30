var db = firebase.database();

var content = document.getElementById('tracker-content')
var countries = []
var confirmedArray = []
var retrievedData;
var currentCountry;
var x = 0;
var chartColorArray = []
var chartColorOuterArray = []
var deathsArray = [];
var dummyConfirmedArray = []
var chartConfirmedArray = []
var chartLabelsList = []
var chartDeathsArray = []
var chartRecoveredArray = []
var recoveredArray = []

// firebase.database().ref('/CoVIDdata/').once('value').then(function(snapshot) {
//     retrievedData = snapshot.val();

// });

var covidData = firebase.database().ref('CoVIDdata/');
covidData.on('value', function (snapshot) {
    countries = []
    //   addData(snapshot.val().countryArray.Countries);
    retrievedData = snapshot.val();
    for (i = 0; snapshot.val().countryArray.Countries.length > i; i++) {
        countries.push(snapshot.val().countryArray.Countries[i])
    }
    x = 0;
    console.log('data updated on remote')
    addData()
});



function addData() {

    if (countries.length > x) {
        currentCountry = countries[x];
        if (currentCountry == "US") {
            currentCountry = 'United States'
        }
        var currentElement = document.getElementById(currentCountry)

        if (currentElement) {

            if (currentElement.innerHTML != retrievedData[countries[x]].Confirmed) {
                console.log('data updated')
                currentArrayPos = countries.indexOf(countries[x])

                var currentCountryElement = document.getElementById(countries[x])
                currentElement.innerHTML = retrievedData[countries[x]].Confirmed;

                currentArrayPos = countries.indexOf(countries[x])


                // confirmedArray.push(retrievedData[countries[x]].Confirmed)
                //         chart.data.labels.push(label);
                // chart.data.datasets.forEach((dataset) => {
                //     dataset.data.push();
                // });
                confirmedArray.splice(currentArrayPos, 1)
                confirmedArray.splice(currentArrayPos, 0, retrievedData[countries[x]].Confirmed)
                deathsArray.splice(currentArrayPos, 1)
                deathsArray.splice(currentArrayPos, 0 , retrievedData[countries[x]].Deaths)
                recoveredArray.splice(currentArrayPos, 1)
                recoveredArray.splice(currentArrayPos, 0, retrievedData[countries[x]].Recovered )
                // myChart.data.datasets[0].data[currentArrayPos] = confirmedArray[currentArrayPos];

            }

        } else {
            console.log(currentCountry)
            var list = document.getElementById('tracker-list')
            var newDiv = document.createElement('div');
            var newCountryElement = document.createElement('li');
            var newBreak = document.createElement('br')
            $(newCountryElement).attr('id', currentCountry);
            $(newCountryElement).attr('key', currentCountry)
            $(newCountryElement).addClass('data')
            newCountryElement.innerHTML = retrievedData[countries[x]].Confirmed;
            // newCountryElement.innerHTML = retrievedData[currentCountry].Confirmed;
            // content.appendChild(list);
            currentArrayPos = countries.indexOf(countries[x])
            list.appendChild(newCountryElement)
            // confirmedArray.splice(currentArrayPos, 1)
            // confirmedArray.splice(currentArrayPos, 0, retrievedData[countries[x]].Confirmed)
            confirmedArray.push(retrievedData[countries[x]].Confirmed)
            deathsArray.push(retrievedData[countries[x]].Deaths)
            recoveredArray.push(retrievedData[countries[x]].Recovered)
            var letters = '0123456789ABCDEF';
            var colorMiddle = '#50';
            var colorOuter = '#255'
            for (var i = 0; i < 6; i++) {
              colorMiddle += letters[Math.floor(Math.random() * 16)];
              colorOuter += letters[Math.floor(Math.random() * 16)];
            }
            chartColorArray.push(colorMiddle)
            chartColorOuterArray.push(colorOuter)
        }
        x++
        addData()
    } else {
        updateChart()
}
