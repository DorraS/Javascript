/**
 * gestion du formulaire
 */
//esf ce que le js est bien chargé
console.log('le js bien chargé');
//code exécuté lorsque leDOM ets chargé
document.addEventListener("DOMContentLoaded", function (event) {
    console.log('execution du code js');

    // EVENT LISTENER évènement à la soumission du formulaire
    const formulaire = document.querySelector('form');
    formulaire.addEventListener('submit', function (event) {
        //on supprime le comportement par défaut de l'événement
        event.preventDefault();
        console.log('ok');


// => supprimer toutes les div>div dans le formulaire
        const errorDivsToDelete = document.querySelectorAll('div>div');
        for (let i = 0; i < errorDivsToDelete.length; i++) {
            const errorDiv = errorDivsToDelete[i];
            errorDiv.parentNode.removeChild(errorDiv);
        }
// => vérifier que tous les champs sont renseignés
//selecteur par attribut pour récupérer uniquement:
//type="text" est et type="password"
        const fieldsRequired = document.querySelectorAll('form input[type=text], form input[type = password]');
        for (let i = 0; i < fieldsRequired.length; i++) {
            const field = fieldsRequired[i];
            const value = field.value;
            console.log(i + ":" + value, field);
            if (value.length === 0) {
                //creer une div qui contient le texte:"ce champs est requis"
                const errorDiv = document.createElement('div');
                errorDiv.classList.add('error');
                errorDiv.textContent = 'ce champs est requis';
                //ajout de la div error en dessous de l'input
                field.parentNode.appendChild(errorDiv);

            }
        }


// => vérifier que le login est différent du mot de passe
// => vérifier que les mots de passe sont identiques
// => vérifier que le login ne contient pas "admin","administrator","superadmin","chuck", "root", "postmaster"
// => créer une div juste avant contenant le message d'erreur pour chaque erreur
    })
});