$(document).ready(function() {
    
    /*Validación de Formulario*/
    var nom = /^([A-Z][a-z]{1,10})+ ([A-Z][a-z]{1,10})+$/; //valida que el nombre sea la primera letra con mayúcula y el resto con minúscula con un  máximo de 10 caracteres.
    var correo = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/; //valido para cualquier correo
   
    $("#enviar").click(function(){         
        var nombre = $("#name").val(); 
        var email = $("#mail").val();
        var asunt = $("#asunto").val();
        var msn = $("#msn").val();
        
        if(!nom.test(nombre)){
           $("#mensaje").fadeIn("slow");           
                return false;
        }else{
            $("#mensaje").fadeOut();                            
        }
        if(!correo.test(email)){
            $("#mensaje1").fadeIn("slow");
                return false;
        }else{
            $("#mensaje1").fadeOut();                           
        } 
        if(asunt == ""){
            $("#mensaje2").fadeIn("slow");
                return false;
        }else{
            $("#mensaje2").fadeOut();                            
        } 
        /*if(msn == ""){
            $("#mensaje3").fadeIn("slow");
                return false;
        }else{
            $("#mensaje3").fadeOut();                      
        } */        

        alert("su mensaje ha sido enviado");
        
        $("#name").val(" "); 
        $("#mail").val(" ");
        $("#asunto").val(" ");
        $("#msn").val(" ");
        return true;
    }) 
        

    /*Cambio de texto*/
    $("#boton2").hide();
    
    var cambio = $("#box-a h1").text();
    $("#boton").click(function(){
        var cambio2 = cambio.replace("CHICAS QUE CAMBIAN EL MUNDO", "TU PUEDES HACER MUCHO MÁS!");
        $("#box-a h1").text(cambio2);
        $("#boton2").show();
    })

    $("#boton2").click(function(){
        var cambio3 = cambio.replace("TU PUEDES HACER MUCHO MÁS!", "CHICAS QUE CAMBIAN EL MUNDO");
        $("#box-a h1").text(cambio3);
        $("#boton2").hide();
    })
   

    /*Cambio de imagen*/
    $("#boton4").hide();
    $(".boxv").hide();     
        
    $("#boton3").click(function(){
        $(".boxr").hide();            
        $(".boxv").show();                      
        $("#boton4").show();
    }); 

    $("#boton4").click(function(){ 
        $(".boxv").hide();   
        $("#boton4").hide();
        $(".boxr").show();
    }); 
})
