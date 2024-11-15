const numbers = document.querySelectorAll('.pourcent .number'); // Sélection des éléments contenant le pourcentage
const svgEl = document.querySelectorAll('.pourcent svg circle:nth-child(2)'); // Sélection des cercles de progression (deuxième cercle)
const counters = Array(numbers.length); // Tableau pour les compteurs
const intervals = Array(counters.length); // Tableau pour les intervalles

// Initialisation des compteurs à 0
counters.fill(0);

numbers.forEach((number, index) => {
    const targetNum = parseInt(number.parentElement.style.getPropertyValue('--num')); // Récupération du pourcentage cible à partir de la variable CSS
    
    intervals[index] = setInterval(() => {
        if (counters[index] === targetNum) {
            clearInterval(intervals[index]); // Stoppe l'intervalle une fois le pourcentage atteint
        } else {
            counters[index] += 1;
            number.innerHTML = counters[index] + "%"; // Affichage du pourcentage dans le texte

            // Calcul de l'offset du cercle SVG (le calcul ici est ajusté pour être similaire à ce qui est défini dans CSS)
            const offset = Math.floor(440 - 440 * (counters[index] / 100));
            svgEl[index].style.strokeDashoffset = offset; // Mise à jour de la barre de progression

            // Si tu veux une animation plus fluide, tu peux ajouter une transition CSS dans le JavaScript
            svgEl[index].style.transition = 'stroke-dashoffset 0s ease-out'; // Animation fluide
        }
    }, 10);
});
