let botones, modal, fondo

window.onload = function(){

    botones = document.querySelectorAll('.btn-turno')
    modal = document.querySelector('.contenedor-modal')

    for (boton of botones){

        boton.onclick = function(){
            
            let tipo_modal = this.getAttribute('data-tipo-modal')
            
            prepararModal(tipo_modal)
            activarFuncionesModal()
            mostrarModal()

        }
    }
}

/////////////////////////Funciones Modal/////////////////////////
function prepararModal(tipo_modal){

    let titulo_modal
    let clase_fondo
    
    switch(tipo_modal){
        case 'entrevista':
            titulo_modal = 'Solicitá una Entrevista!'
            clase_fondo ='fondo-entrevista'
            break
        case 'venta':
            titulo_modal = 'Asesorate con un vendedor!'
            clase_fondo = 'fondo-ventas'
            break
        case 'reclamo':
            titulo_modal = 'Disconforme? Te queremos escuchar!'
            clase_fondo = 'fondo-reclamos'
            break
    }

    modal.querySelector('#titulo').innerHTML = titulo_modal
    modal.querySelector('#tipo-pedido').innerHTML = tipo_modal

    modal.querySelector('.modal').classList.remove('fondo-entrevista','fondo-ventas','fondo-reclamos')
    modal.querySelector('.modal').classList.add(clase_fondo)

    //Limpiar imputs
    for (inputs of modal.querySelectorAll('input')){
        if(inputs.value != 'Enviar'){
            inputs.value = ''
        }        
    }
    modal.querySelector('textarea').innerHTML=''
}

function activarFuncionesModal(){
    
    //Activar botón CANCEL
    modal.querySelector('.cancel').onclick = function(){
        cerrarModal()
    }

    //Activar botón ENVIAR
    modal.querySelector('#boton-enviar').onclick = function(evento){

        //Desactivar evento de formulario
        evento.preventDefault()
        // --> Se corre algún procesos de captura y envío de datos ( Se vé en próximo track)
        
        cerrarModal()
    }

    //Se añade un regulador del Display para el efecto de Aparecer/DEsaparecer
    modal.addEventListener("animationend", gestionDisplay)

}

function mostrarModal(){
    modal.classList.remove('display-NO')
    modal.classList.add('show')
}

function cerrarModal(){
    modal.classList.remove('show')
    modal.classList.add('hide')
}

function gestionDisplay(evento){
    if(evento.target.classList.contains('hide')){
        evento.target.classList.remove('hide')
        evento.target.classList.add('display-NO')
    }    
}