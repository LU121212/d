//para crear botones que solo se ejecutan en esa
//parte sin tocar el resto del codigo
var objeto1={
    nombre:"cristhian",
    edad:"21",
    comida:{
        comida1:"chaufa",
        comida2:"pollo"
    }
};
objeto1.comida.comida1="chifita"
objeto1.nombre="les"; // para actualizar o agregar datos al objeto
objeto1.sueño="dormir"; 
var mensaje="Mi nombre es: " + objeto1.nombre + "\r\n" +objeto1.sueño + objeto1.comida.comida1;//enter 
mensaje += "tengo " + objeto1["edad"] + "años";
alert(mensaje); //2 maneras para acceder al objeto}

//FUNCIONES DENTRO DE OBJETOS SON LLAMADOS METODOS
//para funciones anonimas
var miobjeto={
    nombre1:"lucas",
    edad1:"44",
    mostrardatos:function(){
        var mensaje= "nombre: " + miobjeto.nombre1 + "\r\n";
        mensaje += "edad: "+ this.edad1;
        alert(mensaje);
    },
    actualizar:function(nombrenuevo){
        var nombreviejo =miobjeto.nombre1;
        miobjeto.nombre1=nombrenuevo;
        return nombreviejo;

    }
//PARA NO PONER EL NOMBRE DEL OBJETO A CADA RATO
//PODEMOS USAR THIS COMO EN LA LINEA 25
}; 
miobjeto.mostrardatos();
 var antiguo=miobjeto.actualizar("JACOB"); //si no se pone una varible 
 //no retorna nada
miobjeto.mostrardatos();
alert("el nombre antiguo era: " + antiguo);
//HERENCIA CON OBJECT 
//ADQUIERE LAS MISMAS PROPIEDADES
var nombres=Object.create(miobjeto);
nombres.mostrardatos();
nombres.actualizar("bebote");
nombres.mostrardatos();
//
//CONSTRUCTORES:retorna funciones
var CONSTRUCTORES=function(){
    var jacob="jacob";
    var soli ="21";
    var objeto2={
        mostrarnombre:function(){
            alert(jacob);
        },
        cambiarnombre:function(nombrenuevo1){
            jacob=nombrenuevo1;
        }
    };
    return objeto2;
};
var empleado=CONSTRUCTORES();
empleado.mostrarnombre();