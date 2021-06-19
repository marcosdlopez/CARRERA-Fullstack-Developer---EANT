let color_seleccionado = "white"

window.onload = function(){

    let colores = document.querySelectorAll('.color-picker')
    eventosSeleccionColor(colores)

    let cuadrados = document.querySelectorAll('.cuadrados')
    eventosAsignacionColor(cuadrados)

}

function eventosSeleccionColor(colores){

    for (color of colores){
        color.onclick = function(evento){
            let style = getComputedStyle(evento.target)
            color_seleccionado = style.backgroundColor
        }
    }

}

function eventosAsignacionColor(cuadrados){

    for (cuadrado of cuadrados){
        cuadrado.onclick = function(evento){
            evento.target.style.backgroundColor = color_seleccionado
        }
    }

}