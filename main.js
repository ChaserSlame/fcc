function mostrarMenu(){
    let menu = document.querySelector('.derecha');
    let estiloMenu = getComputedStyle(menu);
    let visibilidad = estiloMenu.visibility;

    if (visibilidad == "hidden") {
        document.getElementsByClassName("derecha")[0].style.visibility = "visible";
        
        /*deshabilitamos el scroll*/
        document.body.style.overflow = "hidden";
    } else {
        document.getElementsByClassName("derecha")[0].style.visibility = "hidden";

        /*habilitamos nuevamente el scroll*/
        document.body.style.overflow = "auto";
    }

}

    /*Cuando clickeamos en link movil queremos hacer desaparecer el menu
    para mostrar el contenido clickeado*/
    
function mostrarMenuClickLink(){
    document.getElementsByClassName("derecha")[0].style.visibility = "hidden";
    document.body.style.overflow = "auto";
}
