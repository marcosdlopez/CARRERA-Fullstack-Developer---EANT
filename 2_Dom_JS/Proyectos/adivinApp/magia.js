let respuestas = [
    "Dalo por hecho!", 
    "Es muy probable", 
    "Mmm...tu futuro NO esta hecho!", 
    "No lo creo....",
    "No cuentes con ello!"
    ]

let pregunta
let boton
let respuesta

window.onload = function(){

    boton = document.querySelector('#boton')
    pregunta = document.querySelector('#input-frase')
    respuesta = document.querySelector('#respuesta')

    boton.onclick = function(){
        main()
    }
}

function main(){

    obtenerPregunta();    
    let numero_magico = obtenerSuerte();
    let respuesta = predecirDestino(numero_magico);    
    darRespuesta(respuesta);

}

function obtenerPregunta(){
    let txt_pregunta = pregunta.value
}

function obtenerSuerte(){
    numero_aleatorio = Math.ceil(Math.random(5));
    return numero_aleatorio;
}

function predecirDestino(numero_magico){
    let respuesta;
    respuesta = respuestas[numero_magico-1]
    return respuesta;
}

function darRespuesta(txt_respuesta){
    respuesta.innerHTML = txt_respuesta
}
