function dibujar(){
var canvas= document.getElementById("tutorial");//llamos al id del html
if(canvas.getContext){
    var ctx= canvas.getContext("2d");//seleccionasmos el formato de imagen para la animacion
    
    ctx.fillStyle = 'rgb(200, 0, 0)';//color
    ctx.fillRect(10, 10, 50, 50);//tamaño por pixeles
    //(x1,y1,x2,y2)=x1y1=coordenada de inicio
    //x2y2=tamañano del rectangulo
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);

    ctx.fillStyle='rgb(0,0,0)';
    ctx.fillRect(20,20,50,50);

    ctx.strokeRect(40,40,50,50);//solo los bordes
}else{
    //nDA
}
}

function dibujar1(){
    var canvas=document.getElementById("tutorial");
    if(canvas.getContext){
        var ctx=canvas.getContext("2d");
        ctx.fillStyle= "rgb(200,0,0)";
        ctx.fillRect(25,25,100,100); //rellena el rectangulo
        ctx.clearRect(45,45,60,60);//elimna el color
        ctx.strokeRect(50,50,50,50);//pone un borde
    }
}

function triangulo(){
    var canvas=document.getElementById("tutorial");
    if(canvas.getContext){
        var ctx=canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(0,0);
        //grid desde donde inicia (x=ancho,y=altura)
        ctx.lineTo(150,150);
        //(x=hasta que anchura llega la linea,y=hasta qye altura llega la linea)
        ctx.lineTo(150,0);
         ctx.fill();
    }
}

function triangulo1(){
    var canvas=document.getElementById("tutorial");
    if(canvas.getContext){
        var ctx=canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(75,50);
        ctx.lineTo(100,25);
        ctx.lineTo(100,75);
        ctx.fill();
    }
}

function cara(){
    var canvas=document.getElementById("tutorial");
    if(canvas.getContext){
        var ctx=canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(75,75,50,0,Math.PI*2,true);
        ctx.moveTo(110,75);
        ctx.arc(75,75,35,0,Math.PI,false);
        ctx.moveTo(65,65);
        ctx.arc(55,65,5,0,Math.PI*2,true);
        ctx.moveTo(110,65);
        ctx.arc(95,65,5,0,Math.PI*2,true);
        //ubicacion radio angulo de inicio y final
        ctx.stroke();


    }
}

function triangulo2(){
    var canvas= document.getElementById("tutorial");
    if(canvas.getContext){
        var ctx=canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(125,125);
        ctx.lineTo(125,45);
        ctx.lineTo(45,125);
        ctx.closePath();
        ctx.stroke();
        //cuando es fill se autocompleta
        //cuando es stroke tenemos que cerrarlo
        //manualmente
    }
}

function draw() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
          ctx.beginPath();
          var x = 25 + j * 50; // x coordinate
          var y = 25 + i * 50; // y coordinate
          var radius = 20; // Arc radius
          var startAngle = 0; // Starting point on circle
          var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
          var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise
  
          ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
  
          if (i > 1) {
            ctx.fill();
          } else {
            ctx.stroke();
          }
        }
      }
    }
  }

  function arco(){
      var canvas=document.getElementById("tutorial");
      if(canvas.getContext){
          var ctx=canvas.getContext("2d");
          ctx.beginPath();
          ctx.moveTo(50,50);
          ctx.quadraticCurveTo(100,50,150,150);
          //quadraticcurve(x1,y1,x2,y2)
          //x2y2=posicicon del destino final
          //x1y1=´posicion del punto por donde se inclinara la curva
         
          //ctx.fillRect(12,12,150,150);
          for(var ga=0;ga<100;ga++){
             var  x=+2;
             var y=+5;
             var z=+4;
          ctx.bezierCurveTo(x,50,70,90,100,100);
          ctx.bezierCurveTo(y,50,70,90,90,90);
          ctx.bezierCurveTo(z,50,70,90,80,80);
          
          }
          ctx.stroke();

      }
  }


  function draw2() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      var rectangle = new Path2D();
      rectangle.rect(10, 10, 50, 50);
  
      var circle = new Path2D();
      circle.moveTo(125, 35);
      circle.arc(100, 35, 25, 0,  Math.PI,true);
      ctx.strokeStyle="red";
      ctx.fillStyle="orange";
      ctx.stroke(rectangle);
      ctx.fill(circle);
      
    }
  }

  function colores(){
      var canvas= document.getElementById("tutorial");
      if(canvas.getContext){
          var ctx = canvas.getContext("2d");
          for (var x=0;x<6;x++){
              for(var y=0;y<6;y++){
                    var numero= Math.random()*(11-1)+1
                  ctx.fillStyle='rgb(' + Math.floor(numero)*x*10 + ','+ Math.floor(numero)*y*10+ ',0)';
                  ctx.globalAlpha=0.8;//trasnparencia
                  //del rgba son 4 valores el ultimo es la transparencia que va desde 0.0 hasta 1
                  ctx.fillRect(x*25,y*25,25,25);
              }
          }
          
      }
  }
  
  function arcos(){
    var canvas= document.getElementById("tutorial");
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");
        for (var x=0;x<6;x++){
            for(var y=0;y<6;y++){
                  var numero= Math.random()*(11-1)+1
                ctx.strokeStyle='rgb(' + Math.floor(numero)*x*10 + ','+ Math.floor(numero)*y*10+ ',0)';
                ctx.beginPath();
                //strokestyle
                //empezar con begin path
                ctx.arc(x*25,y*25,25,0,Math.PI,true);
                ctx.stroke();
            }
        }
        
    }
}

 function linea(){
     var canvas=document.getElementById("tutorial");
     if(canvas.getContext){
         var ctx= canvas.getContext("2d");
            ctx.beginPath();
            ctx.strokeStyle="red";
            ctx.moveTo(14,5);
            ctx.lineTo(140,5);
            ctx.moveTo(14,140);
            ctx.lineTo(140,140);
            ctx.stroke();
         for(var grosor=1;grosor<10;grosor++){
            var color= Math.random()*(11-1)+1
            //ctx.lineCap="round,butt,square"
            ctx.beginPath();
            ctx.lineWidth=grosor;
            //grosor de la linea
            ctx.moveTo(14*grosor,5);
            ctx.lineTo(14*grosor,140);
            var estilos=["round","butt","square"]
            //ctx.lineJoin="bevel"
            //np funciona la unicon si estan en la misma direccion
            if( grosor % 2 == 0 ){
                ctx.strokeStyle='rgb(' + Math.floor(color)*grosor*2 + ','+ Math.floor(color)*10+ ',0)';
                ctx.lineCap=estilos[0];
                ctx.stroke();
                
            }
            if(grosor % 2==1){
                ctx.strokeStyle='rgb(' + Math.floor(color)*grosor*2 + ','+ Math.floor(color)*10+ ',0)';
                ctx.lineCap=estilos[1];
                ctx.stroke();
            }
             
            
         }

         

     }
 }




 function unionlinea(){
     var canvas= document.getElementById("tutorial");
     if(canvas.getContext){
         var ctx= canvas.getContext("2d");
         var estilounion=["bevel","round","miter"]
         ctx.lineWidth=10;
         ctx.lineJoin=estilounion[2];//estilos de como se uniran las lineas
         //el unico que se puede configurar es miter
         ctx.beginPath();
         ctx.miterLimit=2;
         //configurando miter si son valores menores a 2 se comporta como un bevel
         ctx.strokeStyle="blue";
         ctx.moveTo(0,0);
         ctx.lineTo(-5,45); //de un punto a otro
         ctx.lineTo(35,85);
         ctx.lineTo(65,45);
         ctx.lineTo(95,85);
         
         ctx.stroke()

         
     }
 }

 function dash(){
     var canvas=document.getElementById("tutorial");
     if(canvas.getContext){
         var ctx= canvas.getContext("2d");
         var offset= 0;
         offset++;
         if(offset>16){
             offset=0
         }
         ctx.beginPath();
         ctx.clearRect(0, 0, canvas.width, canvas.height);//limpia el cuadrado
        ctx.setLineDash([4, 3]);//paramentros del dash en cantidad y alejamiento
        ctx.lineDashOffset = -offset;//sentido
        ctx.strokeRect(10, 10, 100, 100);
        ctx.font="48px serif"
        ctx.textAlign= "center";
        ctx.fillText("gola ctmremtaegfrqe",10,50);//agregar texto
        ctx.strokeText("gola ctmremtaegfrqe",10,100);//agregar texto sin relleno
        
     }
 }

 function texto(){
     
        var ctx = document.getElementById('tutorial').getContext('2d');
        ctx.font="48px serif"
        ctx.fillText("gaaa",10,40)
        ctx.strokeText("gaaa",10,100);
       
 }

 function imagen(){
    
        var ctx = document.getElementById('tutorial').getContext('2d');
        var img = new Image();
        img.onload = function() {
          ctx.drawImage(img, 0, 0,);
          //cargar la imagen y establecer las posiciones
          ctx.beginPath();
          ctx.moveTo(30, 96);
          ctx.lineTo(70, 66);
          ctx.lineTo(103, 76);
          ctx.lineTo(170, 15);
          ctx.stroke();
        };
        img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
      
      
 }

 function imagen1(){
     var canvas= document.getElementById("tutorial");
     if(canvas.getContext){
        
         var ctx= canvas.getContext("2d");
         var img= new Image();
         var transparencia=0.2;
         img.onload=function(){
             for(var x=0;x<4;x++){
                 
                 for(var y=0;y<4;y++){
                     if(transparencia<=1){
                        transparencia+= 0.2;
                        }else{
                         transparencia=0.3;
                     }
                     
                     ctx.globalAlpha=transparencia;
                     ctx.drawImage(img,40*x,40*y,50,50);
                     ctx.globalAlpha=1;
                     ctx.drawImage(document.getElementById('frame'),//de no poner un js se cargan todas las imagenes
                    x*40,y*40,45,45);
                    
                    //para insertar diferentes imagenes  

                 }
             }
         
         }
         img.src="https://www.guiltybit.com/wp-content/uploads/2020/03/fecha-de-lanzamiento-de-Megaman-X-DiVE-1280x720.jpg"
     }
 }

 function guardado(){
     var canvas= document.getElementById("tutorial");
     if(canvas.getContext){
         var ctx= canvas.getContext("2d");
         //primer guardado
         ctx.globalAlpha=0.8;
         ctx.fillStyle="black";
         ctx.fillRect(0,0,100,100);
         ctx.fill();
         ctx.save();
         //primer guardado 

         //segundo guardado 
         ctx.rotate((Math.PI/180)*25);
         ctx.fillStyle="blue";
         ctx.fillRect(10,10,80,80);
         ctx.globalAlpha=0.8;
         ctx.save();
         //segundo guardado


         ctx.fillStyle="black";
         ctx.globalAlpha=1;
         ctx.fillRect(20,20,60,60);
         ctx.restore();
         //carga todo el codigo desde el ultimo save
         //segundo guardado = color azul  u 0.8
         // y a partir de alli puedes configurar
         //lo demas como el color y transparencia
         ctx.fillRect(30,30,40,40);

         ctx.restore();
         //da atras a adelante el segundo restore
         //se va al primer save
         // primer restore se va al segundo save
         ctx.fillRect(40,40,20,20);
         

         
         

     }
 }

 function rotacion(){
     var canvas= document.getElementById("tutorial");
     if(canvas.getContext){
         var ctx= canvas.getContext("2d");
         
         ctx.save();
         ctx.fillStyle="blue"
         ctx.fillRect(10,10,100,100);
         
         ctx.rotate((Math.PI/180)*25);
         //pasando de radianes a angulo
         ctx.fillStyle="black";
         ctx.fillRect(10,10,100,100);
         ctx.restore();
         ctx.strokeStyle="white";
         ctx.strokeRect(10,10,100,100);
         

     }
 }

 function traslacion(){
     var canvas= document.getElementById("tutorial");
     if(canvas.getContext){
         var ctx= canvas.getContext("2d");
         for(var x=0;x<3;x++){
             for(var y=0;y<3;y++){
                 ctx.save();
                 ctx.fillStyle='rgb(' + (51 * x) + ', ' + (255 - 51 * y) + ', 255)';
                 ctx.translate(10+y*50,10+x*50);
                 ctx.fillRect(0,0,25,25); //primero traslada y de alli se pone la configuracion de tamaño
                 ctx.restore();
             }
         }
         
     }
 }

 