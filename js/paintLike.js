/**
 créer un paint qui permet en utilisant uniquement les listes déroulantes et des classes,
 - Au clic de la souris, créer :
 => une forme ( rond, carré, losange )
 => de la couleur sélectionnée ( bleu, jaune , rouge, vert ),
 => et du rayon sélectionné ( 10, 50, 100, 200 ) .
 - Bonus:
 1) rajouter des triangles,
 2) faire en sorte de voir la forme se déplacer sous la souris avant de cliquer,
 3) faire en sorte d'avoir plus de choix de couleur et de ne plus utiliser de classe .
 4) correction des coordonnées pour que le milieu de la forme soit à la position du clic
 **/
document.addEventListener("DOMContentLoaded", function(event){
    console.log('js est chargé');

// récupération des éléments
const board = document.getElementById("board");
const select_shape = document.getElementById("select_shape");
const select_color = document.getElementById("select_color");
const select_size = document.getElementById("select_size");

// fonction de création d'un élément
shape_creation = function(event){

    // récupération des valeurs des selects
    const shape = select_shape.value;
    const color = select_color.value;
    const size = select_size.value;
    console.log(shape,color,size);

    // création d'un nouvel élément
    const newDiv = document.createElement("div");

    // ajout des classes correspondantes
   newDiv.classList.add(shape);
   newDiv.style.backgroundColor = color;
   newDiv.style.width = size + 'px';
    newDiv.style.height = size + 'px';



    // récupération de la position du clic
    console.log(event);
    const size_from_class = parseInt(size.replace('w',''));
        const position_x = event.offsetX -size_from_class/2;
        const position_y = event.offsetY - size_from_class/2;
    // ajout de la position de l'élément
    newDiv.style.top = position_y+ 'px';
    newDiv.style.left  = position_x + 'px';


    document.addEventListener(onmousemove,function (event) {


    })
    //faire en sorte d'avoir plus de choix de couleur et de ne plus utiliser de classe .


    // ajout du nouvel élément dans le tableau
    board.appendChild(newDiv);
}



// ajout du listener
board.addEventListener("click", shape_creation);

});