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
        const list = subscription_login_input.classList;
        //supprimer toutes les div qui indique des erreurs
        //1)div qui sont en dessous de l'input:"input ~ div"
        //2)div qui sont dans form_group:: "div.form_group > div"
        //je récupère toutes les div d'erreurs
        const errorDivList = document.querySelectorAll('input ~ div');
        for (let i= 0; i< errorDivList.length;i++){
            const div = errorDivList[i];
            const parent = div.parentNode;
           parent.removeChild(div);
           // ou div.parentNode.removeChild(div);
        }


        if(saisie.length >= 4 && saisie.length <= 8){
            //ajouter la classe "succes" sur le input,+ retirer error
            subscription_login_input.classList.add('succes'); /*list.add('succes')*/
            subscription_login_input.classList.remove('error');/*list.remove('error')*/
            //console.log("c'est good mate!");
        } else {
            // sinon ajouter la classe "error" sur le input+retirer succes
            list.add('error');
            list.remove('remove');

            //ajouter une div qui contient une indication sur l'erreur
            const errorDiv = document.createElement('div');
            errorDiv.ClassList.add('error');
            errorDiv.textContent = 'le login doit contenir entre 4 et 8 caractères';

            //réccupérer le formgroup au dessus du sbscription_login_input
            const parent = subscription_login_input.parentNOde;
            //ajouter la div nouvellement créer à ce parent
            parent.appendChild(errorDiv);
        }

      //  console.log(subscription_login_input.value);

    });

