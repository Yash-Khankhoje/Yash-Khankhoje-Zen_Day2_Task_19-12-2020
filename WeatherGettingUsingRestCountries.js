// Creating a request
var request = new XMLHttpRequest();

//Opening a connection
request.open('Get','https://restcountries.eu/rest/v2/all',true);

//Sending the request
request.send();

//Loading the response
request.onload = function(){
    var data = JSON.parse(this.response)
    let city = data[0]['capital'];
    let lat = data[0]['latlng'][0];
    let lng = data[0]['latlng'][1];
    let cityApi = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=7f2f9acc3902b14f0eb5074c37b84e4c";
    let geographicLocationApi = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=7f2f9acc3902b14f0eb5074c37b84e4c";
    getWeatherByCityName(city, cityApi);
    getWeatherByGeographicalLocation(lat, lng, geographicLocationApi);
    
}

function getWeatherByCityName(citiyName, apiLink){
    var request2 = new XMLHttpRequest();
    request2.open('Get',apiLink,true)
    request2.send();
    request2.onload = function() {
        var data = JSON.parse(this.response)
        console.log("Weather of "+citiyName+" is ",data);
    }
}

function getWeatherByGeographicalLocation(latitude, longetitude, apiLink){
    var request3 = new XMLHttpRequest();
    request3.open('Get',apiLink,true)
    request3.send();
    request3.onload = function() {
        var data = JSON.parse(this.response)
        console.log("Weather of the place according to the location is ",data);
    }
}