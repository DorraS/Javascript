
// simple ligne de commentaire
/*
  commentaire multiligne
 */

// créer une variable
prenom = "yannick";
//console.log(prenom);

/* type de variable */
// variable simple
une_string = "yannick"; // chaine de caractère / string
un_entier = 2; // entier / int
un_nombre_flottant = 2.2; // nombre à virgule  / float
un_booleen = true; // booleen true ou false / boolean

// variable complexe
un_tableau = ["chat", "chien", "poisson", "dindon"]; // tableau / array
un_objet = {type: "chat", name: "fichelecamp", age: 6}; // object / object

/* opérations */
// types simples
// + - * / %
str = "bon" + "jour"; // concaténation

// types complexes
// array
premier_element = un_tableau[0]; // recupere le premier element du tableau un_tableau : chat
deuxieme_element = un_tableau[1]; // recupere le deuxième element du tableau un_tableau : chien

// object
propriete_type = un_objet.type; // récupère la propriété "type" de l'objet un_object : chat
propriete_type = un_objet["type"]; // récupère la propriété "type" de l'objet un_object : chat
propriete_name = un_objet.name; // récupère la propriété "name" de l'objet un_object : fichelecamp
propriete_name = un_objet["name"]; // récupère la propriété "name" de l'objet un_object : fichelecamp


/* les fonctions */
// déclaration
une_fonction = function (x, y) { // x et y sont les noms des paramètres passés à la fonction
    // lignes de code à répéter quand on veut
};

function une_fonction(x, y) {
    // lignes de code à répéter quand on veut
}

// retourner un résultat
// mot clef "return";
une_fonction = function (x, y) {
    return 20;
};

// exécution les parenthèses sont requises, même quand il n'y a pas de paramètres
une_fonction(1, 2);
une_fonction(1, 2);

// affectation de la valeur de retour d'une fonction dans une variable
var resultat = une_fonction(1, 2);

// function du langage
// alert(message) affiche une popup qui contient le paramètre "message"
// prompt(message) affiche le paramètre "message" et demande à l'internaute de saisir une données
// console.log(variable) affiche le contenu de la variable dans la console

/* exercices */

// créer une fonction qui affiche "bonjour" dans la console
function hello() {
    console.log("bonjour");
}

hello();
// créer un tableau d'objets
// créer un objet de tableaux
// créer une fonction qui calcule le produit de deux nombres
// créer une fonction qui demande le nom et prénom et qui l'affiche dans la console
// créer une fonction qui demande nom + prénom + age + ville et qui l'affiche dans la console
// créer une fonction qui calcule pythagore(longueur,largeur) ( racine carrée de la somme des carrés ) avec Math.sqrt

// avancés :
// créer une fonction qui indique si un nombre pair
si_nombrepair = function (nombre_a_verifier) {
    if (nombre_a_verifier % 2 === 0) {
        return true;
    }
    return false;
}
// on recupére le retour de la fonction dans la variable resultat
 resultat = si_nombrepair(1);
if (resultat === true) {
    console.log("le nombre est pair");
} else {
    console.log("le nombre est impair");
}


/* créer un nombre aléatoire entre min et max */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

trouve_chiffre = function (min, max) {
    // 1) générer un chiffre entre min et max
    const nombre_a_atrouver = getRandomInt(min, max);
    console.log(nombre_a_atrouver);
    // 2) demander un chiffre à l'internaute
    const saisie = prompt('quel est votre chiffre?');
    console.log(saisie);
    // 3) indiquer si la saisie est plus grande ou plus petite
    if (saisie > nombre_a_atrouver){
        console.log("la saisie est plus grande");
    }else if(saisie<nombre_a_atrouver){
        console.log("la saisie est plus petite");
    }
    // 4) si la saisie est juste, finir la partie
    if (saisie == nombre_a_atrouver){
        console.log('juste');
    }
    // aide : pour convertir une chaine de caractère en nombre
    // 			=> parseInt(string)
}
//trouve_chiffre(1,100);
// créer une fonction qui indique si une chaîne de caractère à plus de 7 caractères
longueur_chaine = function (chaine) {
    // je calcule la longueur de la chaine
  const longueur = chaine.length;
    //si la longueur est sup à7, j'affiche 'trop grand'
    if (longueur > 7){
        console.log('trop grand');
    } else{
        console.log('moins de 7caractères');
    }
    //si la longueur est inf à7, j'affiche 'moins de 7caractères'
}

// créer une fonction récursive qui calcule factorielle x
// créer une fonction qui prends un nombre illimité de paramètres et qui calcule la somme de tous ces paramètres

