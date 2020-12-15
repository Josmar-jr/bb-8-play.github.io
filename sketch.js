var tela = 1 
let img;
let img2;
let bb8;
// Img planetas
let imgPlanets = [];

// Parametros para os itens do menu
var obj = {
  x:150,
  y1:110,
  y2:190,
  y3:270,
  largura:250,
  altura:50
}
// Parametros para a Ellipse
var c = {
  posX:300,
  posY: 400,
  raio:25
}

// Parametros dos planetas (vetores na posição (X,Y))
  // primeira fase
let spaceC = [250,200,
              450,40,
              180,330,
              ];
  // segunda fase
let spaceF = [250,200,
              450,40,
              180,330,
              ];
  // terceira fase
let spaceK = [250,200,
              450,40,
              180,330,
              ];
  // raio dos elementos do jogo
let radius = [45,50]


function preload() {
  img = loadImage("backmenu.png");
  img2 = loadImage("galaxy-play.jpg");
  bb8 = loadImage("bb8.png");
  
  imgPlanets[0] = loadImage("mercurio.png");
  imgPlanets[1] = loadImage("netuno.png");
  imgPlanets[2] = loadImage("jupiter.png");
  imgPlanets[3] = loadImage("saturno.png");
  
}

function setup() {
  // put setup code here
  createCanvas(600,500);
  
}

function draw() {
  // put drawing code here
  background(220)
  image(img,0,0)
  // Tela menu
  if (tela == 1) {
      background(img)
      textAlign(CENTER)
      textSize(30)
    
      // Incio do jogo
      if ( mouseX > obj.x && mouseX < obj.x+obj.largura && mouseY > obj.y1 && mouseY < obj.y1+obj.altura){
          noFill()
          stroke(250)
          rect(obj.x,obj.y1,obj.largura,obj.altura,15)
        if (mouseIsPressed) {
          tela = 2
        }
      }else {
          noFill()
          noStroke()
          rect(obj.x,obj.y1,obj.largura,obj.altura,0)
      }
      
      fill(240)
      noStroke()
      text("Iniciar",280,145)

      // Informações do jogo
        
      if ( mouseX > obj.x && mouseX < obj.x+obj.largura && mouseY > obj.y2 && mouseY < obj.y2+obj.altura) {
          noFill()
          stroke(250)
          rect(obj.x,obj.y2,obj.largura,obj.altura,15)
        if (mouseIsPressed) {
          tela = 3
        }
      }

      fill(240)
      noStroke()
      text("Informações",280,225)

      // Créditos do jogo  
    
      if ( mouseX > obj.x && mouseX < obj.x+obj.largura && mouseY > obj.y3 && mouseY < obj.y3+obj.altura) {
          noFill()
          stroke(250)
          rect(obj.x,obj.y3,obj.largura,obj.altura,15)
        if (mouseIsPressed) {
          tela = 4
        }
      }
      
      fill(240)
      noStroke()
      text("Créditos",280,305)
    }
  
  // Tela 2 (play)
  if (tela == 2) {
      background(img2)
      if (keyIsDown(LEFT_ARROW))
        spaceC[0]-=5;
      if (keyIsDown(RIGHT_ARROW))
        spaceC[0]+=5;
      if (keyIsDown(UP_ARROW))
        spaceC[1]-=5;
      if (keyIsDown(DOWN_ARROW))
        spaceC[1]+=5;
    
     

image(bb8,spaceC[0],spaceC[1],2*radius[0],2*radius[0]);
      image(imgPlanets[0],spaceC[2],spaceC[3],2*radius[1],2*radius[1]); //planet[0]=mercurio, spaceC[2]= eixoX, spaceC[3]= eixoY
    image(imgPlanets[1],spaceC[4],spaceC[5],2*radius[1],2*radius[1]); //netuno
    
    image(imgPlanets[2],spaceC[2],spaceC[4],2*radius[1],2*radius[1]);
    
    image(imgPlanets[3],spaceC[2],spaceC[5],2*radius[1],2*radius[1]); //saturno
      
      
      
      text("Ajude o BB-8"+"\n"+"à chegar ao menor"+"\n"+"planeta do sistema solar",180, 80);
    
    // Jogador selecionou certo
    if (dist(spaceC[0],spaceC[1],spaceC[2],spaceC[3]) < radius[1] + radius[0]) {
      text("Nice play",200,200)
      tela = 5;
    }
     
    
    //Jogador selecionou errado
    if (dist(spaceC[0],spaceC[1],spaceC[4],spaceC[5]) < radius[1] + radius[0]) {
      text("lost",200,200)
      tela = 6;
      
    }
    if (dist(spaceC[0],spaceC[1],spaceC[2],spaceC[5]) < radius[1] + radius[0]) {
      text("lost",200,200)
      tela = 6;
      
    }
    if (dist(spaceC[0],spaceC[1],spaceC[2],spaceC[4]) < radius[1] + radius[0]) {
      text("lost",200,200)
      tela = 6;
      
    }
    
  }
  
  
  
  
  
  // segunda fase
  if (tela == 5) {
    background(img2)
    if (keyIsDown(LEFT_ARROW))
        spaceF[0]-=5;
      if (keyIsDown(RIGHT_ARROW))
        spaceF[0]+=5;
      if (keyIsDown(UP_ARROW))
        spaceF[1]-=5;
      if (keyIsDown(DOWN_ARROW))
        spaceF[1]+=5;
     text("Ajude o BB-8"+"\n"+"à chegar ao planeta "+"\n"+"com o maior campo"+"\n"+"magnético do sistema"+"\n"+"solar",180, 80);
    image(bb8,spaceF[0],spaceF[1],2*radius[0],2*radius[0]);
    image(imgPlanets[1],spaceF[2],spaceF[3],2*radius[1],2*radius[1]); //planet[1]=netuno, spaceC[2]= eixoX (450), spaceC[3]= eixoY (40).
    image(imgPlanets[2],spaceF[4],spaceF[5],2*radius[1],2*radius[1]);
//planet[2]=Jupiter, spaceC[4]= eixoX (180), spaceC[2]= eixoY (450).
    image(imgPlanets[0],spaceF[2],spaceF[4],2*radius[1],2*radius[1]); //planet[0]=Mercurio, spaceC[2]= eixoX (450), spaceC[4]= eixoY (180).
    
  image(imgPlanets[3],spaceF[2],spaceF[5],2*radius[1],2*radius[1]); //saturno
    
    // Jogador selecionou certo
    if (dist(spaceF[0],spaceF[1],spaceF[4],spaceF[5]) < radius[1] + radius[0]) {
      text("Nice play",200,200)
      tela = 7;
    }
     
    
    //Jogador selecionou errado
    if (dist(spaceF[0],spaceF[1],spaceF[2],spaceF[3]) < radius[1] + radius[0]) {
      text("lost",200,200)
      tela = 6;
      
    }
    if (dist(spaceF[0],spaceF[1],spaceF[2],spaceF[5]) < radius[1] + radius[0]) {
      text("lost",200,200)
      tela = 6;
      
    }
    if (dist(spaceF[0],spaceF[1],spaceF[2],spaceF[4]) < radius[1] + radius[0]) {
      text("lost",200,200)
      tela = 6;
      
    }
    
    
  }
  
  
  
  // terceira fase
  if (tela == 7) {
    background(img2)
    if (keyIsDown(LEFT_ARROW))
        spaceK[0]-=5;
      if (keyIsDown(RIGHT_ARROW))
        spaceK[0]+=5;
      if (keyIsDown(UP_ARROW))
        spaceK[1]-=5;
      if (keyIsDown(DOWN_ARROW))
        spaceK[1]+=5;
     text("Ajude o BB-8"+"\n"+"à chegar ao planeta "+"\n"+"com a menor densidade"+"\n"+"do sistema solar",180, 80);
    image(bb8,spaceK[0],spaceK[1],2*radius[0],2*radius[0]);
    image(imgPlanets[1],spaceK[2],spaceK[3],2*radius[1],2*radius[1]); //planet[1]=netuno, spaceC[2]= eixoX (450), spaceC[3]= eixoY (40).
    image(imgPlanets[2],spaceK[4],spaceK[5],2*radius[1],2*radius[1]);
//planet[2]=Jupiter, spaceC[4]= eixoX (180), spaceC[2]= eixoY (450).
    image(imgPlanets[0],spaceK[2],spaceK[4],2*radius[1],2*radius[1]); //planet[0]=Mercurio, spaceC[2]= eixoX (450), spaceC[4]= eixoY (180).
    
  image(imgPlanets[3],spaceK[2],spaceK[5],2*radius[1],2*radius[1]); //saturno
    
    // Jogador selecionou certo
    if (dist(spaceK[0],spaceK[1],spaceK[2],spaceK[5]) < radius[1] + radius[0]) {
      text("Nice play",200,200)
      tela = 8;
    }
     
    
    //Jogador selecionou errado
    if (dist(spaceK[0],spaceK[1],spaceK[2],spaceK[3]) < radius[1] + radius[0]) {
      text("lost",200,200)
      tela = 6;
      
    }
    if (dist(spaceK[0],spaceK[1],spaceK[4],spaceK[5]) < radius[1] + radius[0]) {
      text("lost",200,200)
      tela = 6;
      
    }
    if (dist(spaceK[0],spaceK[1],spaceK[2],spaceK[4]) < radius[1] + radius[0]) {
      text("lost",200,200)
      tela = 6;
      
    }
    
    
  }
  
  
  
     

    
    
  
  
  
  
  if (tela == 6) {
    text("Game over",250,250);
    text("Recarregue à página e tente novamente",280,300)
  }
  
  if (tela == 3) {
    background(img)
    fill(240)
    noStroke()
    text("O Jogo possui uma dinâmica espacial,",280,25);
    text("cujo objetivo é abordar curiosidades do "+"\n"+"espaço, trazendo um dinâmica com "+"\n"+"o BB-8. Assim, estimulando o "+"\n"+"o interesse dos alunos à ciência"+"\n"+"em foco à sexta série",270,60);
   
  }
  
  if (tela == 4) {
    background(img);
    fill(240)
    noStroke()
    text("Como aparato de orientador:"+"\n"+" Prof. Angelo Medeiros,"+"\n"+"Desenvolvido por:"+"\n"+"Josmar Junior,"+"\n"+"Aplicado ao conhecimento" +"\n"+"aprendido em LOP",280,25);
    
  }
  
  if (tela == 8) {
    text("congratulations, complete set!",250,250)
  }
  
  
}