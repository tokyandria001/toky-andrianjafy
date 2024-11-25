document.getElementById('language-toggle').addEventListener('change', function() {
    const isChecked = this.checked;  // Vérifie si l'option est activée (langue anglaise)

    if (isChecked) {
        // Anglais
        document.getElementById('title').textContent = 'PRESENTATION';
        document.getElementById('presentation-text').innerHTML = 'My name is Toky ANDRIANJAFY, born on August 13, 2001, in Cholet (49100).<br/>Passionate about aeronautics and computer science, I am naturally curious and always eager to dive in and get hands-on. Constantly seeking new knowledge, I strive to enhance my skills on a daily basis.';
        document.getElementById('parcours-text').innerHTML = 'After obtaining my diploma, I pursued a general scientific baccalaureate at Lycée Privé Sainte-Marie in Cholet (2016-2020). I deepened my knowledge in mathematics and computer science, choosing the ISN option to specialize in web development. I graduated with honors.<br><br>After high school, I initially studied mathematics at the University of Angers, but soon switched to computer science in my second year. I then chose a professional Bachelor\'s degree in Web Applications to prepare for a career as a web developer.';
        document.getElementById('objectif-text').innerHTML = 'I am currently looking for a 4-month internship to apply my skills and further my knowledge in a company. Whether in France or abroad, I am confident this internship will serve as a stepping stone in my career.';
        document.documentElement.lang = 'en';  // Changer la langue du document en anglais
    } else {
        // Français
        document.getElementById('title').textContent = 'PRÉSENTATION';
        document.getElementById('presentation-text').innerHTML = 'Je m\'appelle Toky ANDRIANJAFY, né le 13 août 2001 à Cholet (49100).<br/>Passionné par l\'aéronautique et l\'informatique, je suis quelqu\'un de naturellement curieux et toujours désireux de mettre rapidement la main à la pâte. En quête constante de nouvelles connaissances, je cherche à enrichir mes compétences au quotidien.';
        document.getElementById('parcours-text').innerHTML = 'Après le collège, j’ai suivi un baccalauréat scientifique au Lycée Privé Sainte-Marie de Cholet (2016-2020), avec un focus sur les mathématiques et l\'informatique. J\'ai choisi l\'option ISN pour me spécialiser dans le développement web et j\'ai obtenu mon bac avec mention Assez Bien.<br><br>Après le lycée, j\'ai commencé des études en mathématiques à l’Université d’Angers, mais j’ai rapidement décidé de me réorienter vers l’informatique. J’ai opté pour une Licence 3 Professionnelle en Applications Web, afin de me préparer à une carrière de développeur web.';
        document.getElementById('objectif-text').innerHTML = 'Je cherche actuellement un stage de 4 mois pour appliquer mes compétences en entreprise et approfondir mes connaissances. Que ce soit en France ou à l’étranger, je suis convaincu que ce stage sera un tremplin pour ma carrière professionnelle.';
        document.documentElement.lang = 'fr';  // Changer la langue du document en français
    }
});
