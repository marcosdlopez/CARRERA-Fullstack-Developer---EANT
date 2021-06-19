let frase, dialog_box, boton

window.onload = function(){

    frase = document.querySelector('#input-frase')
    dialog_box = document.querySelector('#dialog-box')
    boton = document.querySelector('#boton')

    frase.value = ''
    dialog_box.innerHTML = ''

    boton.onclick = function(){
    
        dialog_box.innerHTML = frase.value

    }

}