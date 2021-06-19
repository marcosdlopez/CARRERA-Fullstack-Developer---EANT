window.onload = function(){

    //1) Creación y posicionamiento específico de un nuevo elemento en el DOM
    //METODO #1: Creación del objeto
    document.querySelector('#btn-crear-elemento-1').onclick = function(){
        
        let tbody = document.querySelector('tbody')
        let q_filas = tbody.childElementCount

        let nueva_fila = document.createElement('tr')

        let nueva_celda = document.createElement('td')
        nueva_celda.innerHTML = q_filas + 1
        nueva_fila.appendChild(nueva_celda)
  
        for (let i = 0; i < 3; i++) {
            let nueva_celda = document.createElement('td')
            nueva_celda.innerHTML = 'Valor ' + (i + 1)
            nueva_fila.appendChild(nueva_celda)
        }
        
        tbody.appendChild(nueva_fila)

    }

    //2) Creación y posicionamiento específico de un nuevo elemento en el DOM 
    //METODO #2: Modificación del innerHTML
    document.querySelector('#btn-crear-elemento-2').onclick = function(){

        let tbody = document.querySelector('tbody')
        let q_filas = tbody.childElementCount

        let nueva_fila = "<tr><td>" + (q_filas+1) + "</td><td>Valor 1</td><td>Valor 2</td><td>Valor 3</td></tr>"

        tbody.innerHTML = tbody.innerHTML + nueva_fila
    }

    //3) Creación y posicionamiento específico de un nuevo elemento en el DOM
    //METODO #3: Clonación de objeto
    document.querySelector('#btn-crear-elemento-3').onclick = function(){
        
        let tbody = document.querySelector('tbody')
        let q_filas = tbody.childElementCount

        let fila_modelo = tbody.querySelector('tr')
        let nueva_fila = fila_modelo.cloneNode(true)

        nueva_fila.children[0].innerHTML = q_filas + 1

        tbody.appendChild(nueva_fila)

    }

    //4) Creación y posicionamiento específico de un nuevo elemento en el DOM
    document.querySelector('#btn-crear-insertar').onclick = function(){
        
        let tbody = document.querySelector('tbody')
        let q_filas = tbody.childElementCount

        let fila_modelo = tbody.querySelector('tr')
        let nueva_fila = fila_modelo.cloneNode(true)

        nueva_fila.children[0].innerHTML = q_filas + 1

        tbody.insertBefore(nueva_fila,tbody.children[3])

    }

    //5) Eliminando un elemento del DOM
    document.querySelector('#btn-eliminar').onclick = function(){
        
        let tbody = document.querySelector('tbody')

        tbody.children[2].remove()

        tbody.firstChild.remove()
        tbody.lastChild.remove()

    }

    //6) Limpienado la tabla y creando un "elemento modelo"
    document.querySelector('#btn-limpiar-tabla').onclick = function(){

        limpiarTabla()

    }

    //7) Creación elementos desde datos en un array
    document.querySelector('#btn-creando-desde-array').onclick = function(){

        limpiarTabla()
        
        let tbody = document.querySelector('tbody')
        let fila_modelo = tbody.querySelector('.fila-modelo')

        //Tomando los datos del array de datos.js
        let datos = tabla_version_arrays

        for (let i = 0; i < datos.length; i++) {
            
            let nueva_fila = fila_modelo.cloneNode(true)

            nueva_fila.children[0].innerHTML = datos[i][0]
            nueva_fila.children[1].innerHTML = datos[i][1]
            nueva_fila.children[2].innerHTML = datos[i][2]
            nueva_fila.children[3].innerHTML = datos[i][3]

            nueva_fila.classList.remove('fila-modelo')

            tbody.appendChild(nueva_fila)
            
        }
        
    }

    //8) Creación elementos desde datos en objetos
    document.querySelector('#btn-creando-desde-objetos').onclick = function(){

        limpiarTabla()
        
        let tbody = document.querySelector('tbody')
        let fila_modelo = tbody.querySelector('.fila-modelo')

        //Tomando los datos de objetos de datos.js
        let datos = tabla_version_objetos

        for (let i = 0; i < datos.length; i++) {
            
            let nueva_fila = fila_modelo.cloneNode(true)

            nueva_fila.children[0].innerHTML = datos[i].fila
            nueva_fila.children[1].innerHTML = datos[i].columna1
            nueva_fila.children[2].innerHTML = datos[i].columna2
            nueva_fila.children[3].innerHTML = datos[i].columna3

            nueva_fila.classList.remove('fila-modelo')

            tbody.appendChild(nueva_fila)
            
        }
        
    }

    //9) Creación elementos desde datos en formato JSON
    document.querySelector('#btn-creando-desde-json').onclick = function(){

        limpiarTabla()
        
        let tbody = document.querySelector('tbody')
        let fila_modelo = tbody.querySelector('.fila-modelo')

        //Tomando los datos de objetos de datos.js
        let datos = JSON.parse(tabla_version_json)

        for (let i = 0; i < datos.length; i++) {
            
            let nueva_fila = fila_modelo.cloneNode(true)

            nueva_fila.children[0].innerHTML = datos[i].fila
            nueva_fila.children[1].innerHTML = datos[i].columna1
            nueva_fila.children[2].innerHTML = datos[i].columna2
            nueva_fila.children[3].innerHTML = datos[i].columna3

            nueva_fila.classList.remove('fila-modelo')

            tbody.appendChild(nueva_fila)
            
        }
        
    }    

    /**********************FUNICONES AUXILIARES*************** */
    function limpiarTabla(){
        let tbody = document.querySelector('tbody')

        let fila_modelo = tbody.querySelector('tr')
        let nueva_fila = fila_modelo.cloneNode(true)

        tbody.innerHTML = ''

        tbody.appendChild(nueva_fila)
        nueva_fila.classList.add('fila-modelo')
    }

}