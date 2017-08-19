$(document).ready(function() {
    
    /*Validación de Formulario*/
    var nombreIngreso = /^([a-z]|[A-Z])+ ([a-z]|[A-Z])+$/;
    var correo = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/; //valido para cualquier correo
    var contra = /^[a-zA-Z0-9.\-_$@*!]{3,20}$/;  //contraseña con num y letras max 20 dígitos
    
    $(".crear").click(function(){         
        var nombre = $("#name").val(); 
        var email = $("#email").val();
        var pass = $("#password").val();
        
        if(!nombreIngreso.test(nombre)){
           $("#mensaje").fadeIn("slow");           
               return false;
        }else{
            $("#mensaje").fadeOut();
            localStorage.setItem('nom', nombre);/*ingreso de datos al local storage*/
            console.log(nombre);
        }
        if(!correo.test(email)){
            $("#mensaje1").fadeIn("slow");
               return false;
        }else{
            $("#mensaje1").fadeOut();
            localStorage.setItem('correo', email);/*ingreso de datos al local storage*/
            console.log(email);
        }
        if(!contra.test(pass)){
            $("#mensaje2").fadeIn("slow");
               return false;
        }else{
            $("#mensaje2").fadeOut();
            localStorage.setItem('contra', pass);/*ingreso de datos al local storage*/
            console.log(pass);
            $("#btn-crear").attr("href","login.html");
        } 
        return true; 
        $("#name").val(""); 
        $("#email").val("");
        $("#password").val("");
    })   
});
