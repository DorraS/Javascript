/**
 * gestion panier
 */

const productsList = [
    {code: 'livre', name: 'Fondation foudroyée', price: 10, total: 0},
    {code: 'console', name: 'PS3', price: 200, total: 0},
    {code: 'fleur', name: 'Orchidée', price: 20, total: 0}
];

/*
 * fonction pour ajouter un produit
 */
function addProduct(code) {

    for (let i = 0; i < productsList.length; i++) {

        // je récupère le produit  i
        const product = productsList[i];

        // est ce que le produit à le code demandé
        // et qu'il y'a moins de 5 élèments dans le total
        if (product.code === code && product.total < 5) {
            product.total++;
        }

    }
    console.clear();
    console.table(productsList);

    displayCaddie();
}

/**
 * fonction pour supprimer un produit
 */
function deleteProduct(code) {
    for (let i = 0; i < productsList.length; i++) {
        // je récupère le produit  i
        const product = productsList[i];

        //est ce que le produit a le code demandé

        if (product.total > 0 && product.code === code) {
            product.total--;
        }
    }
    console.clear();
    console.table(productsList);

    displayCaddie();
}

/**
 * fonction pour afficher la liste des produits
 */
function displayCaddie() {
    let list = "";
    //je parcours tous les éléments du panier
    for (let i = 0; i < productsList.length; i++) {
        const product = productsList[i];
        //si l'élément courant a été ajouté au panier
        if (product.total > 0) {
            // alors on ajoute "X code," à lavariable list
            list += product.total+' ' + product.name + ',' + '<br>';
        }

    }
    document.getElementById("resultat").innerHTML = list;
}
