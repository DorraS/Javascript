/**
 * Gestion avancée :
 * selecteur : document.querySelector(cssRule) et document.querySelectorAll(cssRule)
 * gestion classes :
 element.classList.add(className);
 element.classList.remove(className);
 element.classList.contains(className);
 element.classList.toggle(className)
 * gestion select : element.selectedIndex; element.options;
 */

// inputsText = document.querySelectorAll("form input[type='text']");

document.addEventListener("DOMContentLoaded", function(save){

    // evenement keyup pour tous les input text



    const subscription_login_input = document.getElementById('subscription_login');
    //j'ajoute un écouteur d'évenement "keyup"

    subscription_login_input.addEventListener("keyup", function (event) {
        // => si saisie entre 4 et 8 caractères, ajouter la class "success" sur le input,
        const saisie = subscription_login_input.value;
        if(saisie.length >= 4 && saisie.length <= 8){
            //ajouter la classe "succes" sur le input,
            subscription_login_input.classList.add('succes');
            subscription_login_input.classList.remove('error');
            //console.log("c'est good mate!");
        } else{
            // sinon ajouter la classe "error" sur le input
            subscription_login_input.classList.add('error');
            subscription_login_input.classList.remove('succes');
            console.log("c'est pas bon gros!");
        }


      //  console.log(subscription_login_input.value);

    });


    // évènement à la soumission du formulaire
    // => supprimer toutes les div>div dans le formulaire
    // => vérifier que tous les champs sont renseignés
    // => vérifier que le login est différent du mot de passe
    // => vérifier que les mots de passe sont identiques
    // => vérifier que le login ne contient pas "admin","administrator","superadmin","chuck", "root", "postmaster"
    // => créer une div juste avant contenant le message d'erreur pour chaque erreur


});