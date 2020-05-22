var numero1=10;
var numero2=20;

function sumador(numero1,numero2){ //paredecido al define
    var total=numero1 + numero2;
    return total;
    
}

var resultado=sumador(numero1,numero2);
//return para usar ese valor 
//del ambito local al ambito general
//de una funcion al resto del codigo
alert(resultado);

//ejempplo usando condicionales 
//de manera local
var numero3=100;
var numero4=50;
function comprueba(numero3,numero4){
    var total1=numero3 + numero4;
    if(total1>100){
        return total1;
    }else{
        return 0;
    }
}
var suma=comprueba(numero3,numero4);
alert(suma);
//funciones anonimas 
///////////
///////

var holi=function(valor1){
    valor1=valor1*2;
    return valor1;
}
var total2=2;
for(var f=0;f<10;f++){
    total2=holi(total2);
}
alert(total2);

/////FUNCIONES ESTANDAR
var valor="gola grgnru vrfrgfvxxd__erG";
if(isNaN(valor)){
    alert(valor + " no es un numero");
}else{
    alert(valor +" es un numero");
}
//isNaN detecta si 
//la variable es un numero

var codificado=encodeURIComponent(valor);
alert(codificado)


