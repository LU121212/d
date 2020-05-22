//objeto number
var valor=   new Number("345");
alert(typeof(valor)); //se utiliza el new
alert(valor);
//objeto array
var lista= new Array(12,12,3,4,4);
alert(lista);
//los sting se almacenan como arrays
var texto1="hola licas";
var mensaje="";
for(var x=0;x<texto1.length;x++){
        mensaje+= texto1[x] + " ";
}
mensaje=mensaje.trim();
var ga=mensaje.toUpperCase();
//SUBSTR COPIA EL STRING DESDE HASTA LOS NIMEROS DENTRO DEL PARENSTESIS
var corte=texto1.substr(0,4);
alert(corte);
//UPPER =MAYUSCULA
//SUBSTR=DEVUELVE UNA PARTE DE LA CADENA
var separar=texto1.split(" ");
//lo separa en un array
alert(separar[0]+" frgsr" +separar[1]);
//starWith y includes
if (texto1.startsWith("ho")){
    alert("el texto empieza con hol");
}
if (texto1.includes("li")){
    alert("el texto incluye esta ");
}
var indice=texto1.indexOf("licas");
alert("el indice es:" + indice);
var reemplazo=texto1.replace("hola","soli");
alert(reemplazo);
//OBJETO ARRAY
var lista1=lista.slice(2,5);
alert(lista1);//slice selecciona los valores de la lista 
//y devuelve un nuevo array
var lista2=lista.filter(function(dato){
    if (dato<10){
        return true;
    } else {
        return false;
    }
});
alert(lista2)
//filter permite poner funciones dentro de una lista
//para seleccionar cierto valores
//tambien devuelve un array nuevo
var union=lista.join("");
alert(union)
//indexOF ubicacion del string o int
var lista3=lista.indexOf(4);
alert(lista3);
//push agrega datos al final y 
//unshift al comienzo del string
lista.push(100,100);
lista.unshift(2,2);
//agrega todo un array nuevo
lista.concat([134,535]);
alert(lista);
//para eliminar desde un array
lista.pop();
lista.splice(0,1,3);
alert(lista);
//map configura cada elemento del array
var map1=lista.map(function(dato2){
    return dato2 *2;
});
alert(map1);