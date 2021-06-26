var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// carregando Imagens 
var bird = new Image();
bird.src = "images/bird.png"
var bg = new Image();
bg.src = "images/bg.png"
var chao = new Image();
chao.src = "images/chao.png"
var canocima = new Image();
canocima.src = "images/canocima.png"
var canobaixo = new Image();
canobaixo.src = "images/canobaixo.png"

//variavel
var eec = 100 ; //espaço entre os canos em px
var constant;
var bX = 33;
var bY = 200;
var gravity = 1.4; // serve para suavizar os movimentos do passaro
var score = 0;
var cano = [];

cano[0] = {
    x: canvas.width,
    y: 0 //ele sera controlado por codigos 
}

//carregando sons 
var fly = new Audio();
fly.src = "sounds/fly.mp3"
var scor = new Audio();
scor.src = "sounds/score.mp3"

    //captura de tecla
    document.addEventListener("keydown", voa);
    //voando

    function voa(){
        bY = bY - 40
        fly.play(); 
    }
function jogo(){
    //fundo do jogo
    ctx.drawImage(bg,0,0);
    //drawImagem(imagem,x,y)

    //criando canos
    for(let i = 0; i< cano.length; i++){
        //posicao do cano de baixo
        constant = canocima.height + eec;
        //configurando cano de cima 
        ctx.drawImage(canocima,cano[i].x, cano[i].y);
        //configurando cano de baixo 
        ctx.drawImage(canobaixo,cano[i].x, cano[i].y+constant)
        //movimentacao do cano
        cano[i].x = cano [i].x - 1
        if(cano[i].x == 125){
            cano.push({
                x: canvas.width,
                y: Math.floor(Math.random()*canocima.height)-canocima.height //math.floor(X) retorna o menor numero inteiro dentre os parametros Math.floor(45,95)->45
            })                                                               //math.random() retorna um numero pseudo-aleatorio no intervalo[0,1[ Math.random()*4000=valor pseudo-aleatorio entre 0 e 4000
        
        }
    

    }
    //desenhando o chao 
    ctx.drawImage(chao,0,canvas.height - chao.height);

    //passarinho
    ctx.drawImage(bird,bX,bY);
    //gravidade
    bY += gravity 
    requestAnimationFrame(jogo);//essa request faz é chamar a função jogo
}   

jogo();
