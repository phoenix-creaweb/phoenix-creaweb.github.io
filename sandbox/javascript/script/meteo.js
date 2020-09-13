/* script pour récupérer la météo depuis un serveur suisse
Ce script nécessite une <div id="meteo"></div>

Contreparties demandées:
n°1 - indiquer la src de données sur le site: https://prevision-meteo.ch/
n°2 - mettre un lien vers mon site: http://phoenix-creaweb.fr
*/

const meteo = document.getElementById("meteo");
//console.log(meteo);

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log(response);
        meteo.innerHTML = "<div class='meteo-bloc'><div class='when'>Aujourd'hui</div><div class='icon'><img src=" + response.fcst_day_0.icon + "></div><div class='temperatures'>" + response.fcst_day_0.tmin + "°C | " + response.fcst_day_0.tmax + "°C</div><div class='meteo-text'><p><strong>" + response.fcst_day_0.condition + "</strong></p></div></div><div class='meteo-bloc'><div class='when'>" + response.fcst_day_1.day_long + "</div><div class='icon'><img src=" + response.fcst_day_1.icon + "></div><div class='temperatures'>" + response.fcst_day_1.tmin + "°C | " + response.fcst_day_1.tmax + "°C</div><div class='meteo-text'><p><strong>" + response.fcst_day_1.condition + "</strong></p></div></div><div class='meteo-bloc'><div class='when'>" + response.fcst_day_2.day_long + "</div><div class='icon'><img src=" + response.fcst_day_2.icon + "></div><div class='temperatures'>" + response.fcst_day_2.tmin + "°C | " + response.fcst_day_2.tmax + "°C</div><div class='meteo-text'><p><strong>" + response.fcst_day_2.condition + "</strong></p></div></div><div class='meteo-bloc'><div class='when'>" + response.fcst_day_3.day_long + "</div><div class='icon'><img src=" + response.fcst_day_3.icon + "></div><div class='temperatures'>" + response.fcst_day_3.tmin + "°C | " + response.fcst_day_3.tmax + "°C</div><div class='meteo-text'><p><strong>" + response.fcst_day_3.condition + "</strong></p></div></div><div class='meteo-bloc'><div class='when'>" + response.fcst_day_4.day_long + "</div><div class='icon'><img src=" + response.fcst_day_4.icon + "></div><div class='temperatures'>" + response.fcst_day_4.tmin + "°C | " + response.fcst_day_4.tmax + "°C</div><div class='meteo-text'><p><strong>" + response.fcst_day_4.condition + "</strong></p></div></div>";
    }
};
request.open("GET", "https://prevision-meteo.ch/services/json/oloron-sainte-marie");
request.send();

