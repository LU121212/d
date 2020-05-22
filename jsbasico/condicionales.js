var edad=prompt("ingrese su edad");
parseInt(edad);

if(confirm("se considera inteligente?")){ //usando if
    if (edad<18){
        alert("esta mintiendo")
    } else{
        alert("puede ingresar")
    }
}

var numeros=parseInt(prompt("ingrese un numero(1-5):")) //usando switch
switch(numeros){
    case 1:
        alert("este numero es 1");
    break;
    
    case 2:
        alert("este numero es 2");
    break;
    
    case 3:
        alert("este numero es 3");
    break;    
    default:
        alert("se me acabaron las ideas esponja");


}

var total=0;
for(var f=0;f<5;f++){   //usando for
    total +=10
}
alert("el total es:" +total)

var total1=0;
var lista=[0,1,2];
for(var x=0;x<3;x++){
    total1 +=lista[x]
}
alert("la suma es: " +total1);

var contador=0;// usando while
while(contador<24){
    contador++;
}
alert(contador);

//do while para hacer que la condicion 
//se ejecute al menos una vez siendo falsa

var contador1=143;
do{
    contador1++;
}while(contador1<100);
alert(contador1);

var lista1=[2,4,7,8];//continues
var total2=0;
for(x1=0;x1<4;x1++){
    var numero =lista1[x1];//suma valores
    if(numero==7){//si uno de los valores es 7 lo saltea
        continue; //break haria que el resultado sea 6
    }//hace que se rompa el ciclo
    total2+=numero;
    

}
alert(total2)// el resultado seria 14

///
///
///FUNCIONES:
function mostrar(){
    alert("gaaaaaa");
}
mostrar();
//
var inc=5;
function multiplicar(){
    inc=inc * 2;
}
for(x4=0;x4<10;x4++){
    multiplicar()
    alert(inc)
}
alert(inc)