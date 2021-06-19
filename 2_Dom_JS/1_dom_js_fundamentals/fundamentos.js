window.onload = function(){

    //Demo -> Modificando las propiedades de lso objetos HTML
    document.querySelector('#btn-modificar-atributos').onclick = function(){

        alert("Vamos a modificar el Segundo Elemento!")

        let segundo_item = document.querySelector("#segundo-item")
        segundo_item.innerHTML = "Hola!"
        segundo_item.style.backgroundColor = '#171643'
        segundo_item.style.fontSize = '3em'

    }

    //Demo -> Distintas formas de asignar eventos
    document.querySelector('#btn-asignacion-eventos').onclick = function(){
        //
        let tercer_item = document.querySelector('#tercer-item')
        tercer_item.onclick = function(){
            alert("Soy el TERCER elemento!")
        }

        //
        let cuarto_item = document.querySelector('#cuarto-item')
        cuarto_item.onclick = hola

        let quinto_item = document.querySelector('#quinto-item')
        quinto_item.onclick = hola

        function hola(){
            alert("Hooolaaaa!")
        }

        //
        let sexto_item = document.querySelector('#sexto-item')
        sexto_item.addEventListener('click', hola)
        sexto_item.addEventListener('click', chau)

        function chau(){
            alert("Chau!")
        }

    }

    //Demo -> Cómo trabajar con múltiples objetos
    document.querySelector('#btn-captura-muchos').onclick = function(){
         
        let cuadrados = document.querySelectorAll('.items') 
        
        //Recorriendo las lsitas de distintas formas
        
        //For clásico
        /*
        for (let i = 0; i < cuadrados.length; i++) {
            cuadrados[i].style.backgroundColor = 'black'
        }
        */

        //For...of...
        /*
        for(elemento of cuadrados){
            elemento.style.backgroundColor = 'black'
        }
        */

        //forEach
        cuadrados.forEach(function(elemento){
            elemento.style.backgroundColor = 'black'
        })
    
    }

    //Demo --> DEmostración de cómo asignar un evento a muchos objetos
    document.querySelector('#btn-asignacion-eventos-muchos').onclick = function(){

        let cuadrados = document.querySelectorAll('.items') 

        /*
        for(elemento of cuadrados){
            elemento.onclick = function(evento){
                evento.target.style.backgroundColor = 'red'
            }
        }
        */

        for(elemento of cuadrados){
            elemento.onclick = function(evento){
                if(evento.target.style.backgroundColor != 'red'){
                    evento.target.style.backgroundColor = 'red'
                }
                else{
                    evento.target.style.backgroundColor = 'grey'
                }
                
            }
        }
    }

}