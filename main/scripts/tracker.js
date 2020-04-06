var db = firebase.database();

var content = document.getElementById('tracker-content')
var countries = []
var confirmedArray = []
var retrievedData;
var currentCountry;
var x = 0;

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
                // confirmedArray.push(retrievedData[countries[x]].Confirmed)
                //         chart.data.labels.push(label);
                // chart.data.datasets.forEach((dataset) => {
                //     dataset.data.push();
                // });
                confirmedArray.splice(currentArrayPos, 1)
                confirmedArray.splice(currentArrayPos, 0, retrievedData[countries[x]].Confirmed)
                

            }
            myChart.data.datasets[0].data[currentArrayPos] = confirmedArray[currentArrayPos];

        } else {
            console.log(currentCountry)
            var list = document.getElementById('tracker-list')
            var newDiv = document.createElement('div');
            var newCountryElement = document.createElement('li');
            var newBreak = document.createElement('br')
            $(newCountryElement).attr('id', currentCountry);
            $(newCountryElement).attr('key', currentCountry)
            newCountryElement.innerHTML = retrievedData[countries[x]].Confirmed;
            // newCountryElement.innerHTML = retrievedData[currentCountry].Confirmed;
            // content.appendChild(list);
            currentArrayPos = countries.indexOf(countries[x])
            list.appendChild(newCountryElement)
            // confirmedArray.splice(currentArrayPos, 1)
            // confirmedArray.splice(currentArrayPos, 0, retrievedData[countries[x]].Confirmed)
            confirmedArray.push(retrievedData[countries[x]].Confirmed)

        }
        x++
        addData()
    } else {
        createChart()
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




var myChart;

function createChart() {
    console.log("creating chart")
    var ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: countries,
            datasets: [{
                label: 'Confirmed Cases',
                data: confirmedArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}