let cambios = ['Y', 'D', 'EU', 'PU', 'R']
let moneda_unidad = ['Yen', 'Dólar', 'Euro', 'Peso Uruguayo', 'Real']
let moneda = ['Yenes', 'Dólares', 'Euros', 'Pesos Uruguayos', 'Reales']
let tasas = [1.44, 0.0135, 0.0115, 0.5, 0.5]

let moneda_destino
let pesos
let boton
let tasa
let respuesta

window.onload = function(){

    //Set Up de Objetos necesarios
    moneda_destino = document.querySelector('#moneda')
    pesos = document.querySelector('#pesos')
    boton = document.querySelector('#boton')
    tasa = document.querySelector('#tasa')
    respuesta = document.querySelector('#resultado')

    //////Asignación de eventos de ejecución
    //-> Ejecución del cambio
    boton.onclick = procesarCambio
    //-> Selecciión de otra moneda
    moneda_destino.onchange = cambioSelector

    limpiar()
}

function procesarCambio(){
    
    let pesos_a_cambiar = parseFloat(pesos.value);

    if( pesos_a_cambiar > 0 ){
        let indice = cambios.indexOf(moneda_destino.value);
        let cambio = pesos_a_cambiar * tasas[indice];
        tasa.innerHTML = "Tasa actual:  " + Math.round(1/tasas[indice]) + "$ / " + moneda_unidad[indice]
        respuesta.innerHTML = "Usted obtendrá " + cambio + " " + moneda[indice]
    }
    else{
        respuesta.innerHTML = "Ingrese un Monto de Pesos a Cambiar"
    }
    
}

function cambioSelector(){

    let indice = cambios.indexOf(moneda_destino.value);
    tasa.innerHTML = "Tasa actual:  " + Math.round(1/tasas[indice]) + "$ / " + moneda_unidad[indice]

}

function limpiar(){

    pesos.innerHTML = ''
    tasa.innerHTML = '' 
    respuesta.innerHTML = ''

}