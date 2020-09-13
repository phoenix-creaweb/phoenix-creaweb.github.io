/* script pour compter les clics sur le bouton
Ce script nécessite un <button id="clicme"></button> et un <span id="count">0</span>

Contreparties demandées:
n°1 - mettre un lien vers mon site: http://phoenix-creaweb.fr
*/




let highscoreOfClic = localStorage.getItem('highscore');
console.log(highscoreOfClic);
if (highscoreOfClic === null) {
    highscoreOfClic = 0;
    console.log(highscoreOfClic);
}

const highscore = document.getElementById('highscore');
highscore.textContent = highscoreOfClic;

let countMe = 0;

let clicMeButton = document.getElementById("clicme");

clicMeButton.addEventListener('click', function() {
    const count = document.getElementById('count');
    //const highscore = document.getElementById('highscore');
    countMe ++;
    count.textContent = countMe;
    if (countMe > highscoreOfClic ) {
        highscoreOfClic = countMe;
        highscore.textContent = highscoreOfClic;
        localStorage.setItem('highscore',highscoreOfClic);
    }
    switch(countMe) {
        case 10:
            alert("Ca fait beaucoup de clics, là, non ?");
            break;
        case 20:
            alert("Mais c'est que tu insistes ?");
            break;
        case 30:
            alert("Ca commence à être lourd");
            break;
        case 50:
            alert("Et oui, pas de message à 40 clics !!!");
            break;
        case 100:
            alert("Tu n'as pas autre chose à faire? Je ne sais pas moi, ranger ta chambre, faire tes devoirs, faire la vaisselle...");
            break;
        case 200:
            alert("Faut que tu arrêtes de martyriser cette souris. C'est mon dernier message ;)");
            break;
    }
});