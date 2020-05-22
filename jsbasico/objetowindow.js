var realizar=function(){
    open("https://www.youtube.com/watch?v=x7rWvsBqUJs")
    //window.location="https://www.youtube.com/watch?v=x7rWvsBqUJs"
    location.reload();
  
}
//IMPORTANTE: la función se declara sin los paréntesis. Cuando queremos llamar
//a una función, tenemos que declarar los paréntesis después del nombre, pero
//cuando queremos referenciar una función, debemos omitir los paréntesis.
//Como en esta oportunidad queremos asignar una referencia a la función y no el
//resultado de su ejecución, declaramos el nombre sin paréntesis.
function id1(){
    var elemento=document.getElementById("Inicio");
    alert("el id es: "+ elemento.id);
    //para obtener el nombre solo del id cualquier valor 
    //que no sea id no sea actualizara
}

function tag1(){
    var lista = document.getElementsByTagName("p");
    for(var f=0;f<lista.length;f++){
        var elemento1=lista[f];
        //poner un id a cada elemento
        //mostrara varios alert con cada
        //array dependiendo de la cantidad de datos
        alert("los id son: " + elemento1.id);
    }
}

function tag2(){
   var lista1=document.querySelectorAll("section > p ");
   //busqueda del elemento usando el 
   //formato css
    alert("el id es: " + lista1.id);
}