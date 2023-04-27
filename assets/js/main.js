// API Key: a61eec67c6450e095a71a7fe664a1688
//Variable List
var searchBtn = document.querySelector('#search');
var clearBtn = document.querySelector('#clear-history');

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
clearData.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

// Initial function
function init() {
    var cityList = [];
    cityList = JSON.parse(localStorage.getItem("searchedCities"));
    if(cityList !== null) {
        for(var i = 0; i < cityList.length; i++) {
            var listEl = document.createElement("button");
            listEl.textContent = cityList[i];
            listEl.setAttribute("class", "col-12 col-md-8");
            listEl.setAttribute("style", "background-color: rgb(9, 133, 235); color: aliceblue; border-style: solid black 2px; margin-top: 5px")
            searchData.append(listEl);
            listEl.addEventListener("click", searchHistoryBtn);
        }
    }
}

init();