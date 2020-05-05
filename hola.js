

/*num::::::::::::::::::::
var lucas=2,lucas1=7,resultado;
resultado=lucas *lucas1
var a="lcuias34";
alert(resultado)//typeof para ver el tipo , a diferencia de pythion se usa var para
//cualquier variable y no se usa print

string:::::::::::::::::
var text="hola ";
 var text1  ="mundo",union;
 union=text + text1
 
 alert(union)

 prompt::::::.
 */
 var primero=prompt("primer numero"),segundo=prompt("Segundo numero"),resultado;
 //lo devielve como string
 resultado= parseInt(primero) + parseInt(segundo)
 //pasando a enteros
 alert(resultado)

 var numero=1,numero2=4,union; //juntar 2 numeros 
 //python pasarlo de int a string usar join y luego pasarloa entero
 //o usando return
 union= numero +""+  numero2
 alert(union)
 
 var x=2,y=2,ga;  //comprobara si la condicion llega a ser verdadera o falsa 
 /*Operador Significado
  = Igual a
  != Diferente a
  === Contenido y tipo igual a
  !== Contenido o tipo diferente de
  > Mayor que
  >= Mayor o igual que

  < Menor que
  <= Menor o igual que

  AND ,OR ,NOT ::::::::::::::
    &&      Y          valor1 && valor2
    ||      O          valor1 || valor2
    !      NO          !valor
  */
 ga=x==y
 ga1=x===y
 alert(ga)
 alert(ga1)
 alert(ga&&ga1)
 if(ga&&ga1){ //el if va entre llaves //el false no se mostrara 
     alert("no es lo que esperabas no amiguito :V");
 }
 
 if (confirm("Esta conforme con el resultado?")){ //juega con los botones del prompt
     alert("entonces no jodas xd")
 }else{ //manera correcta de usar else tambien se puede usar (else if) como VHDL
     alert("eso no me lo esperaba")
 }
  //var cajon = parseInt (prompt ('Elegir el cajón abierto (1-4): '));
  //switch (cajon) {
    //case 1:
    //alert ('Contiene varias herramientas de dibujo: papel, lápices, etc. ')
    //break; TAMBIEN SE PUEDE USAR SWITCH EN VEZ DE IF PERO ES MAS QUE TODO PARA NUMEROS
   var hoja=1;
   while(hoja=10){
       hoja++;
   } 
   alert(hoja)
   
  