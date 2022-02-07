var weatherApiKey = "814f96ca95d7a06af5054174697db293";
var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#cityname");


var getLonLat = function (city) {
    //format the city api
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherApiKey;
    console.log(apiUrl);

    //fetch lon and lat from first api call
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var latCoord = data.coord.lat;
            console.log(latCoord)
            var lonCoord = data.coord.lon;
            console.log(lonCoord);

            //format weather api
            var weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latCoord + "&lon=" + lonCoord + "&exclude=alerts&units=standard&appid=" + weatherApiKey;
            console.log(weatherUrl);

            //fetch weather data
            fetch(weatherUrl)
                .then(response => response.json())
                .then(weather => {
                    console.log(weather)
                });
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