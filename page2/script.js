let html = "Je structure les pages web en utilisant des balises HTML appropriées pour organiser le contenu, définir la hiérarchie et garantir l'accessibilité.";
let css = "Je stylise les éléments avec des animations, des transitions et des SVG, et j'utilise Bootstrap pour styliser différents éléments comme des formulaires."
let js = "Je modifie le DOM, gère les événements utilisateur, crée des objets et manipule différents types de tableaux, tout en ayant des connaissances et en utilisant des frameworks comme React/Next et Vue.";
let php = "Je valide, filtre et sécurise les données des formulaires HTML, trie divers tableaux et exécute des requêtes SQL, avec un niveau débutant sur Symfony.";
let java = "Je crée des classes et des objets, utilise l'héritage et le polymorphisme, et contrôle le flux avec des boucles, des conditions et des exceptions.";
let sql = "Je manipule des bases de données en réalisant des insertions, suppressions, mises à jour, récupérations et jointures de plusieurs tables.";
let python = "Je manipule les données pour l'analyse, gère les fichiers et utilise Django pour développer des applications web.";
Array.from(document.querySelectorAll("li")).forEach(
    (x) => {
        x.addEventListener("mouseover", function(){
            if(x.id == "1"){
                document.querySelector(".description p").innerHTML = python;
            }
            if(x.id == "2"){
                document.querySelector(".description p").innerHTML = html;
            }
            if(x.id == "3"){
                document.querySelector(".description p").innerHTML = css;
            }
            if(x.id == "4"){
                document.querySelector(".description p").innerHTML = js;
            }
            if(x.id == "5"){
                document.querySelector(".description p").innerHTML = php;
            }
            if(x.id == "6"){
                document.querySelector(".description p").innerHTML = java;
            }
            if(x.id == "7"){
                document.querySelector(".description p").innerHTML = sql;
            }
        })

        x.addEventListener("mouseout", function(){
            document.querySelector(".description p").innerHTML = "";
        })
    
    }
)
