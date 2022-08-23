// Obtener los elementos de la clase .close
let links= document.querySelectorAll(".close");
//Recorrerlos
links.forEach(function(links){
//Agregar un evento click a cada uno de ello
    links.addEventListener("click",function(ev){
        ev.preventDefault();     
        let content = document.querySelector('.content');
        //Quitarle las clases de animación que ya tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");
        //Agregar clases para animar su salida fadeOutUp
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href="/index.html";
        },600);

       /*  setInterval(function(){
            location.href="/";
        },1000); */
    
        return false;

    });
});
