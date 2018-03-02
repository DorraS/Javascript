/**
 * Création d'une image point par point, chaque point est représenté par une DIV
 * Utiliser une double boucle for ( boucles imbriquées )
 * il faut placer les divs en positionnement absolu
 */
//est ce que le fichier est bien chargé
console.log('le js est bien chargé');
//code exécuté lorque le DOM est chargé*
document.addEventListener("DOMContentLoaded", function (event) {
    console.log('execution du code js');


    var picture = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 2, 2, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 2, 0, 0, 2, 1, 1, 1, 0, 0],
        [0, 0, 3, 3, 2, 0, 5, 5, 0, 2, 3, 3, 0, 0],
        [0, 0, 3, 3, 2, 0, 5, 5, 0, 2, 3, 3, 0, 0],
        [0, 0, 1, 1, 1, 2, 0, 0, 2, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0, 0],
        [0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0],
        [0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0],
        [0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0],
        [0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0],
        [0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0],
        [0, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 0],
        [0, 0, 0, 0, 3, 3, 0, 0, 3, 3, 0, 0, 0, 0],
        [0, 0, 0, 3, 3, 3, 0, 3, 3, 3, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    var colors = [
        "#ffffff", // blanc 0
        "#ffdf04", // jaune 1
        "#808080", // gris 2
        "#000000", // noir 3
        "#0026ff", // bleu 4
        "#ff0000", // rouge 5
    ];

    const drawMinion= function () {

// créer une boucle qui va parcourir toutes les lignes du tableau
    for( let i =0;i<picture.length; i++){
        const line = picture[i];



        // créer une boucle à l'intérieur de cette boucle pour
        // parcourir chaque élément de la ligne du tableau
        for(let j=0; j<line.length; j++){
            // chaque élément du tableau correspond à l'indice d'une couleur
            const colorIndex = line[j];
            console.log(i, j, colorIndex);
            const color = colors[colorIndex];
            // créer une div
            const cell = document.createElement('div');
            cell.style.backgroundColor = color;
            console.log('20' + 'px');
            cell.style.top= i*20 + 'px';
            cell.style.left = j*20 +'px';
            const picture1= document.getElementById('picture1');
            picture1.appendChild(cell);
        }
    }


// il faut récupérer la couleur correspondante
// créer une div dont la couleur de fond sera cette couleur
// spécifier la position de cette div avec "top" et "left" grâce à div.style
// et ajouter cette div à #picture1

    }

    document.addEventListener('keypress', function (event) {
        if(colors[4] === "#0026ff"){
            colors[4] = "#ff2521";
        }else if (colors[4] === "#ff2521"){
        colors[4] = "#118d27";
        }else if(colors[4] === "#118d27"){
            colors[4] ="#0026ff";
        }

        drawMinion();
    });

});