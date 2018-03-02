/**
 * ajouter laliste des ingrédients d'une recette
 * à laliste des ingrédients des recettes sélectionnées
 * @type {*[]}
 */
recettes = [
    {name:'ratatouille', ingredients: [
            {name: "tomate", count: 4},
            {name: "poivron", count: 4},
            {name: "aubergine", count: 4},
            {name: "oignon", count: 4},
            {name: "courgette", count: 4}
        ]},
    {name:'velouté de tomate', ingredients: [
            {name: "tomate", count: 10},
            {name: "poivron", count: 0},
            {name: "aubergine", count: 0},
            {name: "oignon", count: 2},
            {name: "courgette", count: 0}
        ]},
    {name:'légume farci', ingredients: [
            {name: "tomate", count: 6},
            {name: "poivron", count: 6},
            {name: "aubergine", count: 0},
            {name: "oignon", count: 0},
            {name: "courgette", count: 6}
        ]}
];

selected=[];


function add( recipe ){
//recherche de la recette demandée
    for (let i=0; i<recettes.length; i++){
        const recette= recettes[i];
        //est ce labonne recette?
        if(recette.name === receipe){
            //ajout des ingrédients à la liste des recettes sélectionnées
            for(let j=0; j<ingredients.length; j++){
                const ingredient 

            }


        }
    }
    display();

}

function display(){

    list="";
    document.getElementById("resultat").innerHTML = list;
}


