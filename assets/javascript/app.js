var APIKey = "166a433c57516f51dfab1f7edaed8413";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Ventura,US&units=imperial&appid=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {

        console.log(queryURL);

        console.log(response);
        var iconcode = response.weather[0].icon;
        $(".city").html("<h4>" + response.name + ", CA</h4>");
        $(".condition").text(response.weather[0].main);
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $('.wicon').attr('src', iconurl);
        $(".description").text(response.weather[0].description);
        $(".temp").text("Temperature (F) " + response.main.temp);

        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
    });