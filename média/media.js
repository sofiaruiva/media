    var numero1 = document.getElementById('dado1');
    var numero2 = document.getElementById('dado2');
    var numero3 = document.getElementById('dado3');
    var numero4 = document.getElementById('dado4');
 

    var resultad =document.getElementById('resultado');
    var clear =document.getElementById('clear');

    var btn5 =document.getElementById('btn5');

    clear.addEventListener('click',function(){

 

        apagar();

 

    })

    function apagar(){

 

        document.getElementById('dado1').value='';

 

        document.getElementById('dado2').value='';

 

        document.getElementById('dado3').value='';

        document.getElementById('dado4').value='';

 

        document.getElementById('resultado').value='';

 

    }



    btn5.addEventListener('click',function(){

 

        media();
    
    
    })

    function media(){

 

        var soma1val = parseInt(dado1.value);             
        var soma2val = parseInt(dado2.value);       
        var soma3val = parseInt(dado3.value);
        var soma4val = parseInt(dado4.value);
    
     
    
        var media = (soma1val + soma2val + soma3val + soma4val) / 4
    
     
    
        document.getElementById('resultado').value=media;
    
     
    
       
    
     
    
    }
    
     