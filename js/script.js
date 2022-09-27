$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Dehradun&units=metric&appid=01e22c981be2bfcae80a95876eee8820", function(data) {
    console.log(data);
    var temp = data.main.temp;
    $(".temp").append(temp);
    var icon = data.weather[0].icon;
    var det = data.weather[0].description;
    url = "http://openweathermap.org/img/wn/" + icon + ".png ";

    $('.icon').attr('src', url);
    $(".details").append(det);

})