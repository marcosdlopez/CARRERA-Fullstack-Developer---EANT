let mi_billetera = 15000
let mis_compras = 0
let billetera
let compras

window.onload = function(){

    setUp()
    
}

/*****************FUNCIONES GENERALES**************** */
function setUp(){

    billetera = document.querySelector('#mi_billetera')
    billetera.innerHTML = mi_billetera

    compras = document.querySelector('#mis_compras')
    compras.innerHTML = mis_compras

    asignarComportamientoBotones()

}

function asignarComportamientoBotones(){

    let cajas = document.querySelectorAll('.caja-botones')
    for(caja of cajas){
        let botones = caja.querySelectorAll('div')
        for(boton of botones){
            boton.onclick = function(event){

                let elemento_lista = event.target.parentElement.parentElement
                
                if(event.target.innerHTML =='+'){
                    //alert("Querés Comprar!")
                    comprarProducto(elemento_lista)
                }else{
                    //alert("Querés Vender!")
                    venderProducto(elemento_lista)
                }
                
            }
        }
    }
}

function comprarProducto(elemento_lista){

    let precio = parseInt(elemento_lista.children[3].innerHTML)
    let cantidad = parseInt(elemento_lista.children[2].innerHTML)

    if(precio <= mi_billetera){

        mi_billetera = mi_billetera - precio
        cantidad = cantidad + 1
        mis_compras = mis_compras + precio

        actualizarPantalla(elemento_lista, cantidad)

    }else{
        alert("No tenés plata RATONE! Vendé algo!")
    }

}

function venderProducto(elemento_lista){

    let precio = parseInt(elemento_lista.children[3].innerHTML)
    let cantidad = parseInt(elemento_lista.children[2].innerHTML)

    if(cantidad > 0){

        mi_billetera = mi_billetera + precio
        cantidad = cantidad - 1
        mis_compras = mis_compras - precio

        actualizarPantalla(elemento_lista, cantidad)

    }else{
        alert("No tenés este producto!")
    }

}

function actualizarPantalla(elemento_lista, cantidad){
    
    //Actualizo la lista actual
    elemento_lista.children[2].innerHTML = cantidad

    //Actualizo la billetera y compras
    billetera.innerHTML = mi_billetera
    compras.innerHTML = mis_compras
}