let modal, panel, postit_modelo

window.onload = function(){

    setUpComponentes()

    prepararModal()

    document.querySelector('#btn-agregar-postit').onclick = prendeApagaModal

}

function setUpComponentes(){

    modal = document.querySelector('.container-modal')
    panel = document.querySelector('#panel')
    postit_modelo = document.querySelector('.auxiliares').querySelector('.postit')

}

function prepararModal(){

    //Botón Cerrar
    modal.querySelector('.cancel').onclick = function(evento){
        prendeApagaModal()
    }

    //Botón Ingresar
    modal.querySelector('.boton-enviar').onclick = function(evento){

        evento.preventDefault() //Evita el disprao del Elemento Form

        let mensaje = modal.querySelector('textarea').value
        if(mensaje ==''){
            alert('Tenés que ingresar un mensaje!')            
        }else{
            prendeApagaModal()
            ingresarPostIt(mensaje)
        }

    }
 
}

function prendeApagaModal(){
    
    //Limpiar inputs del Modal
    modal.querySelector('textarea').value = ''

    //Cambiar estado del Modal aparecer/no-aparecer
    modal.classList.toggle('show')
}

function ingresarPostIt(mensaje){

    let nuevo_postit = postit_modelo.cloneNode(true)
    
    //Asigno mensaje
    nuevo_postit.children[1].innerHTML = mensaje

    //Asigno función "Eliminar éste Postit"
    nuevo_postit.children[0].onclick = function(evento){
        evento.target.parentElement.remove()
    }

    //Asigno el nuevo hijo a panel
    panel.appendChild(nuevo_postit)

}