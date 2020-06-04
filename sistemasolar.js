var sol=new Image();
var luna= new Image();
var tierra= new Image();

function init(){
    sol.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  luna.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  tierra.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  window.requestAnimationFrame(draw);
}
//el inicio de cargar imagenes
//y luego creamos la animacion
//en la funcion draw

function draw(){
    var canvas=document.getElementById("tutorial");
    if(canvas.getContext){
        var ctx=canvas.getContext("2d");
        ctx.globalCompositeOperation="destination-over";
        ctx.clearRect(0,0,300,300);//limpia
        
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.strokeStyle = 'black';
    ctx.save();

    ctx.translate(150,150);//posicionamiento de las imagenes 
    //significa que comenzaran en el centro

    //tierra
    var time=new Date();
    ctx.rotate(((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds());//rota un angulo
    ctx.translate(105,0);//traslada en la distacia y la altura 
    
    ctx.drawImage(tierra,-12,-12);

    //luna
    ctx.save();
    ctx.rotate(((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds());//rota un angulo
    ctx.translate(0,10.5);
    ctx.drawImage(luna,-32,-12);

    
    
    ctx.restore();
    ctx.restore();
    ctx.beginPath();
    ctx.strokeStyle="white"
    ctx.arc(150,150,105,0,Math.PI*2,true);
    //para que vuelva a sus parametros
    //por defecto
    ctx.strokeRect(0,0,300,300);
    ctx.stroke();
    ctx.drawImage(sol,0,0,300,300);
  
  
  window.requestAnimationFrame(draw)
  //tambien funcionaria con settimeout(draw,cantidad en milisegundos);
  //es como si actualzara cada intervalos de tiempo 
  //por eso no afectan a las funciones qeu fueron creadas con for sino al resto como valores con constante cambios
  //ejemplo ramdom y los valores de segundos y milisegundos
 }

}

function reloj(){
    var canvas= document.getElementById("tutorial");
    if(canvas.getContext){
      var ctx= canvas.getContext("2d");
       ctx.save();
       ctx.clearRect(0,0,300,300);
       
       ctx.translate(20,160);
       
       ctx.beginPath();
       var altura = 0;
       var finaltura = 0;
       var grosor=15;
       var time=new Date();
       var segundos=time.getMilliseconds()/99.9 ;
       var tranparencia=0;
       ctx.strokeStyle="black";
       ctx.lineWidth=grosor;
       if(segundos<=10){
       
        for(var x=0;x<6;x++){
          tranparencia+=0.2
          ctx.globalAlpha=((segundos/10)+ 0.1)+(tranparencia) ;
          ctx.strokeStyle='rgb(' + Math.floor(segundos)*0 + ','+ Math.floor(x)*10+ ',0)';
          altura += (-20);
          finaltura += 20;
          grosor += 4;
         ctx.beginPath(); 
         ctx.lineWidth=grosor;
         ctx.moveTo(x*50,altura);
         ctx.lineTo(x*50,finaltura);
         ctx.lineCap="round"
         
         ctx.stroke();
         
       }
       }else{
         segundos+= 0;
       }
       
       
       ctx.restore();
       setTimeout(reloj,20);
       

      
       
       
       
       
    }
    
}