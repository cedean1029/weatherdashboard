var weatherApiKey = "814f96ca95d7a06af5054174697db293";
var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#cityname");


var getLonLat = function (city) {
    //format the weather api
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherApiKey;
    console.log(apiUrl);

    //fetch data
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var latCoord = data.coord.lat;
            console.log(latCoord)
            var lonCoord = data.coord.lon;
            console.log(lonCoord);
        });
        

};

var formSubmitHandler = function (event) {
    event.preventDefault();
    var cityname = cityInputEl.value.trim();

    if (cityname) {
        getLonLat(cityname);
        cityInputEl.value = "";
    } else {
        alert("Please enter a City name");
    };
};

var displayCityWeather = function (weather, searchTeam) {
    console.log()
}

cityFormEl.addEventListener("submit", formSubmitHandler);