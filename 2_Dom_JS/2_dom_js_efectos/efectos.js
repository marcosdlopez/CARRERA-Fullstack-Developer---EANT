window.onload = function(){

    //
    document.querySelector('#btn-modificar-directo').onclick = function(){
        
        document.querySelector('#segundo-item').style.visibility = 'hidden'
        document.querySelector('#tercer-item').style.display = 'none'
    
    }

    //
    document.querySelector('#btn-modificar-con-clases').onclick = function(){
        document.querySelector('#cuarto-item').classList.add('desaparecer')
        document.querySelector('#quinto-item').classList.add('sacar')
    }

    //
    document.querySelector('#btn-controlando-con-clases').onclick = function(){
        
        let sexto_item = document.querySelector('#sexto-item')
        
        //Primer método
        if(sexto_item.classList.contains('desaparecer')){
            sexto_item.classList.remove('desaparecer')
        }
        else{
            sexto_item.classList.add('desaparecer')
        }

        //Segundo método
        let septimo_item = document.querySelector('#septimo-item')
        septimo_item.classList.toggle('desaparecer')
    
    }

    document.querySelector('#btn-efectos-con-clases').onclick = function(){

        let octavo_item = document.querySelector('#octavo-item')
        octavo_item.classList.add('transition-on')
        octavo_item.classList.toggle('traslucir')

        let noveno_item = document.querySelector('#noveno-item')
        noveno_item.classList.add('transition-on')
        noveno_item.classList.toggle('azul')

        let decimo_item = document.querySelector('#decimo-item')
        decimo_item.classList.add('transition-on')
        decimo_item.classList.toggle('acordeon')
    }

}