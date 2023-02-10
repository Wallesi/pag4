//Con este script hacemos creamos los eventos para añadir la clase spread la cual abre el menu. 
//Luego tenemos el windows con un if que se encarga de verificar si hizo click fuera del menu entonces quita la clase spread asi cerrando el menu
const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu);
//console.log(hamburguer);

hamburguer.addEventListener('click',()=>{
    menu.classList.toggle("spread");
})

window.addEventListener('click',e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer){
        menu.classList.toggle("spread");
    }
})