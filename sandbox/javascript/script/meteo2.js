const weatherResult = document.getElementById("weather-result");
const askWeather = document.getElementById('ask-weather');
askWeather.addEventListener('click', function() {
  let selectCity = document.getElementsByName('city');
  let cityName;
  for (let i = 0; i < selectCity.length; i++) {
    if (selectCity[i].checked) {
      let cityName = selectCity[i].value;
      let request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText);
            weatherResult.innerHTML = "<p>En ce moment, c'est " + response.current_condition.condition + " à <strong class='city-name'>" + cityName + "</strong> !!!</p><p><img src=" + response.current_condition.icon + ">" ;
        };
      };
      request.open("GET", "https://www.prevision-meteo.ch/services/json/"+cityName);
    request.send();
    };
  };
});
  
