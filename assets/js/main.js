// API Key: a61eec67c6450e095a71a7fe664a1688
//Variable List
var searchBtn = document.querySelector('#search');
var clearBtn = document.querySelector('#clear-history');
var currentCity = document.querySelector('#current-city');
var citySearch = document.querySelector('#city-search');
var searchData = document.querySelector('#search-data');

var currentTemp = document.querySelector("#current-temperature");
var currentWind = document.querySelector("#current-wind");
var currentHumidity = document.querySelector("#current-humidity");

var firstDayTemp = document.querySelector('#first-day-temperature');
var firstDayWind = document.querySelector('#first-day-wind');
var firstDayHumidity = document.querySelector('#first-day-humidity');

var secondDayTemp = document.querySelector('#second-day-temperature');
var secondDayWind = document.querySelector('#second-day-wind');
var secondDayHumidity = document.querySelector('#second-day-humidity');

var thirdDayTemp = document.querySelector('#third-day-temperature');
var thirdDayWind = document.querySelector('#third-day-wind');
var thirdDayHumidity = document.querySelector('#third-day-humidity');

var fourthDayTemp = document.querySelector('#fourth-day-temperature');
var fourthDayWind = document.querySelector('#fourth-day-wind');
var fourthDayHumidity = document.querySelector('#fourth-day-humidity');

var fifthDayTemp = document.querySelector('#fifth-day-temperature');
var fifthDayWind = document.querySelector('#fifth-day-wind');
var fifthDayHumidity = document.querySelector('#fifth-day-humidity');


//Utilizing dayjs to display the date on the page
var currentDate = dayjs();
$('#current-date').text(currentDate.format("MM D, YYYY"));

var firstDay = currentDate.add(1, 'day');
$('#first-day').text(firstDay.format("MM D, YYYY"));

var secondDay = currentDate.add(1, 'day');
$('#second-day').text(secondDay.format("MM D, YYYY"));

var thirdDay = currentDate.add(1, 'day');
$('#third-day').text(thirdDay.format("MM D, YYYY"));

var fourthDay = currentDate.add(1, 'day');
$('#fourth-day').text(fourthDay.format("MM D, YYYY"));

var fifthDay = currentDate.add(1, 'day');
$('#fifth-day').text(fifthDay.format("MM D, YYYY"));


// Fetching information from weather api

// Clear button function
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Initial function
function init() {
    var cityList = [];
    cityList = JSON.parse(localStorage.getItem("searchedCities"));
    if (cityList !== null) {
        for (var i = 0; i < cityList.length; i++) {
            var listEl = document.createElement("button");
            listEl.textContent = cityList[i];
            listEl.setAttribute("class", "col-12 col-md-8");
            listEl.setAttribute("style", "background-color: rgb(9, 133, 235); color: aliceblue; border-style: solid black 2px; margin-top: 5px")
            searchData.append(listEl);
            listEl.addEventListener("click", searchHistoryBtn);
        }
    }
};

//Where the user's search history is displayed, they can click on a city previously searched and get that data.
function searchHistoryBtn() {
    console.log(this.textContent);
    var cityName = (this.textContent);
    // Fetch information from openweather api. 
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid={a61eec67c6450e095a71a7fe664a1688}`)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
    .then(function (data) {
            console.log(data);
            //Updates info about the current day
            currentCity.textContent = cityName
            currentTemp.textContent = `${data.list[0].main.temp}`;
            currentWind.textContent = `${data.list[0].wind.speed}`;
            currentHumidity.textContent = `${data.list[0].main.humidity}`;
            // Five day forecast
            firstDayTemp.textContent = `${data.list[6].main.temp}`;
            firstDayWind.textContent = `${data.list[6].wind.speed}`;
            firstDayHumidity.textContent = `${data.list[6].main.humidity}`;

            secondDayTemp.textContent = `${data.list[14].main.temp}`;
            secondDayWind.textContent = `${data.list[14].wind.speed}`;
            secondDayHumidity.textContent = `${data.list[14].main.humidity}`;

            thirdDayTemp.textContent = `${data.list[22].main.temp}`;
            thirdDayWind.textContent = `${data.list[22].wind.speed}`;
            thirdDayHumidity.textContent = `${data.list[22].main.humidity}`;

            fourthDayTemp.textContent = `${data.list[30].main.temp}`;
            fourthDayWind.textContent = `${data.list[30].wind.speed}`;
            fourthDayHumidity.textContent = `${data.list[30].main.humidity}`;

            fifthDayTemp.textContent = `${data.list[38].main.temp}`;
            fifthDayWind.textContent = `${data.list[38].wind.speed}`;
            fifthDayHumidity.textContent = `${data.list[38].main.humidity}`;





        })
};
// Fetching data about the default city, "Philadelphia"
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=philadelphia&appid={a61eec67c6450e095a71a7fe664a1688}`)

    .then(function (answer) {
        return answer.json();
    })
    .then(function (data) {
        //Updates info about the current day
        currentCity.textContent = cityName
        currentTemp.textContent = `${data.list[0].main.temp}`;
        currentWind.textContent = `${data.list[0].wind.speed}`;
        currentHumidity.textContent = `${data.list[0].main.humidity}`;
        // Five day forecast
        firstDayTemp.textContent = `${data.list[6].main.temp}`;
        firstDayWind.textContent = `${data.list[6].wind.speed}`;
        firstDayHumidity.textContent = `${data.list[6].main.humidity}`;

        secondDayTemp.textContent = `${data.list[14].main.temp}`;
        secondDayWind.textContent = `${data.list[14].wind.speed}`;
        secondDayHumidity.textContent = `${data.list[14].main.humidity}`;

        thirdDayTemp.textContent = `${data.list[22].main.temp}`;
        thirdDayWind.textContent = `${data.list[22].wind.speed}`;
        thirdDayHumidity.textContent = `${data.list[22].main.humidity}`;

        fourthDayTemp.textContent = `${data.list[30].main.temp}`;
        fourthDayWind.textContent = `${data.list[30].wind.speed}`;
        fourthDayHumidity.textContent = `${data.list[30].main.humidity}`;

        fifthDayTemp.textContent = `${data.list[38].main.temp}`;
        fifthDayWind.textContent = `${data.list[38].wind.speed}`;
        fifthDayHumidity.textContent = `${data.list[38].main.humidity}`;
    });

//Function for the search button
function getWeather() {
    var nameCity = citySearch.value;
    console.log(nameCity)
    console.log(citySearch.value);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid={a61eec67c6450e095a71a7fe664a1688}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //Updates info about the current day
            currentCity.textContent = cityName
            currentTemp.textContent = `${data.list[0].main.temp}`;
            currentWind.textContent = `${data.list[0].wind.speed}`;
            currentHumidity.textContent = `${data.list[0].main.humidity}`;
            // Five day forecast
            firstDayTemp.textContent = `${data.list[6].main.temp}`;
            firstDayWind.textContent = `${data.list[6].wind.speed}`;
            firstDayHumidity.textContent = `${data.list[6].main.humidity}`;

            secondDayTemp.textContent = `${data.list[14].main.temp}`;
            secondDayWind.textContent = `${data.list[14].wind.speed}`;
            secondDayHumidity.textContent = `${data.list[14].main.humidity}`;

            thirdDayTemp.textContent = `${data.list[22].main.temp}`;
            thirdDayWind.textContent = `${data.list[22].wind.speed}`;
            thirdDayHumidity.textContent = `${data.list[22].main.humidity}`;

            fourthDayTemp.textContent = `${data.list[30].main.temp}`;
            fourthDayWind.textContent = `${data.list[30].wind.speed}`;
            fourthDayHumidity.textContent = `${data.list[30].main.humidity}`;

            fifthDayTemp.textContent = `${data.list[38].main.temp}`;
            fifthDayWind.textContent = `${data.list[38].wind.speed}`;
            fifthDayHumidity.textContent = `${data.list[38].main.humidity}`;
        })

        //Saving search history into local storage
        var citiesList = JSON.parse(localStorage.getItem("searched-cities")) || [];
        citiesList.push(citySearch.value);
        localStorage.setItem("searchedCities", JSON.stringify(citiesList));
        //Displaying the search history in the local storage onto the site
        for(var i = 0; i < cityList.length; i++) {
            var citiesList = [];
            citiesList.push(citySearch.value);
            //Making any previous search into a button
            var list = document.createElement("button");
            list.textContent = citiesList[i];
            list.setAttribute("class", "col-12 col-md-8");
            list.setAttribute("style", "background-color: rgb(9, 133, 235); color: aliceblue; border-style: solid black 2px; margin-top: 5px");
            //appending buttons
            searchData.append(list);
        }

};

searchBtn.addEventListener("click", getWeather);





init();