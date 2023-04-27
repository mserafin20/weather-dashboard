// Fetching information from weather api



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