$(document).ready(function (){
    //ejemplo 6
    $(".oculta").click(function(){
        $(this).hide();
    }); 

    //ejemplo 7
    $(".doble").dblclick(function(){
        $(this).hide();
    }); 

    //ejemplo 8
    $("#p1").mouseenter(function(){
        alert("Ingresaste a P1!");
    }); 

    //ejemplo 9
    $("#p2").mouseleave(function(){
        alert("¡Adiós! ¡Ahora te vas p2!");
    }); 

    //ejemplo 10
    $("#p3").mousedown(function(){
        alert("Pase el mouse sobre p3!");
    });

    //ejemplo 11
    $("#parrafo").mouseup(function(){
        alert("Pase el mouse sobre p1!");
    });

    //ejemplo 12
    $("#parrafo_2").hover(function(){
        //alert("¡Ingresaste a parrafo 2!");
        console.log("¡Ingresaste a parrafo 2!");
      },
      function(){
        //alert("¡Adiós! ¡Ahora dejas parrafo 2!");
        console.log("¡Adiós! ¡Ahora dejas parrafo 2!");
    });      
      
});