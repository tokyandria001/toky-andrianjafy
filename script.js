
var radius = 240;
var autoRotate = true;
var rotateSpeed = -60;
var imgWidth = 120;
var imgHeight = 170;

setTimeout(init, 1000);

var odrag = document.querySelector("#drag");
var ospin = document.querySelector("#spin");
var aImg = ospin.getElementsByTagName("img");
var aVid = document.getElementsByTagName("video");
var aEle = [...aImg, ...aVid];

ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

var ground = document.getElementById("ground");
ground.style.width = radius * 3 + "px";
ground.style.width = radius * 3 + "px";

function init(delayTime){
    for (var i = 0 ; i < aEle.length; i++){
        aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
}

function applyTransform (obj){
    if ( tY > 180) tY = 180;
    if (tY < 0) tY = 0;

    obj.style.transform = "rotateX(" + (-tY) +"deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes){
    ospin.style.animationPlayState = (yes?'running': 'paused');
}

var sX, sY, nX, nY, desX = 0,
desY = 0,
tX = 0,
tY = 10;

if (autoRotate){
    var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
    ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear `;
}

document.onpointerdown = function (e) {
    clearInterval(odrag.timer);
    e = e || window.event;
    var sX = e.clientX,
        sY = e.clientY;
    
        this.onpointermove = function (e){
            e = e || window.event;
            var nX = e.clientX,
                nY = e.clientY;
            desX = nX - sX;
            desY = nY - sY;
            tX += desX * 0.1;
            tY += desY * 0.1;
            applyTransform(odrag);
            sX = nX;
            sY = nY;
        } ;

        this.onpointerup = function(e) {
            odrag.timer = setInterval(function(){
                desX *= 0.95;
                desY *= 0.95;
                tX += desX * 0.1;
                tY += desY * 0.1;
                applyTransform(odrag);
                playSpin(false);
                if(Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5){
                    clearInterval(odrag.timer);
                    playSpin(true);
                }
            }, 17);
            this.onpointermove = this.onpointerup = null;
        };

        return false
};

document.addEventListener('wheel', function(e) {
    var d = e.deltaY / 1.5 || -e.detail;
    radius += d;
    init(1);
});

// Dictionnaire des images et des pages de destination
const imageLinks = {
    'parcours.png': 'page1/page1.html',
    'competences.png': 'page2/page2.html',
    'projets.png': 'page3/page3.html',
    'musculation.jpg': '#',
    'resto6.jpg': '#',
    'trocadero2.jpg': '#'
};

// Sélectionner toutes les images avec la classe 'portfolio-img'
const images = document.querySelectorAll('.portfolio-img');

// Ajouter un événement de clic sur chaque image
images.forEach(image => {
    image.addEventListener('click', function() {
        // Extraire le nom du fichier à partir du chemin de l'image
        const imageName = image.src.split('/').pop();  // Utilise `.pop()` pour obtenir seulement le nom de l'image

        // Vérifier si le nom de l'image existe dans le dictionnaire
        const targetPage = imageLinks[imageName];

        // Si une page correspondante est trouvée, ouvrir cette page dans un nouvel onglet
        if (targetPage) {
            window.open(targetPage, '_blank'); // '_blank' ouvre dans un nouvel onglet
        } else {
            console.error('Page non définie pour cette image');
        }
    });
});
