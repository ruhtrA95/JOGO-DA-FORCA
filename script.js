let tentativas = 6;
let palavraSorteada;
let listaVariavel = [];
let vitoria = false;



const palavras = [
    
    // Nomes femininos ================
    palavra01 = { nome: "ALICE"},
    palavra02 = { nome: "BEATRIZ"},
    palavra03 = { nome: "CAMILA"},
    palavra04 = { nome: "DAMARES"},
    palavra05 = { nome: "ESCLEIDE"},
    palavra06 = { nome: "FABIANA"},
    palavra07 = { nome: "GABRIELA"},
    palavra08 = { nome: "HELOISA"},
    palavra09 = { nome: "ISABELA"},
    palavra10 = { nome: "JANAINA"},
    // ================================

    // Nomes masculinos ===============
    palavra11 = { nome: "ALEXANDRE"},
    palavra12 = { nome: "BERNARDO"},
    palavra13 = { nome: "CRISTIANO"},
    palavra14 = { nome: "DOUGLAS"},
    palavra15 = { nome: "EDUARDO"},
    palavra16 = { nome: "FRANCISCO"},
    palavra17 = { nome: "GUILHERME"},
    palavra18 = { nome: "HENRIQUE"},
    palavra19 = { nome: "ISAQUE"},
    palavra20 = { nome: "JEREMIAS"}, 
];

function sorteiaPalavra() {
    const palavraIndex = parseInt(Math.random() * palavras.length);
    palavraSorteada = palavras[palavraIndex].nome;
    

}

function montarPalavra() {
    const input = document.getElementById("input");
    input.innerHTML = "";

    for (i = 0; i < palavraSorteada.length; i++) {
        if(listaVariavel[i] == undefined){
            listaVariavel[i] = "_"
            input.innerHTML = input.innerHTML + "<div class='letras'>" + listaVariavel[i] + "</div>"
        }
        else{
            input.innerHTML = input.innerHTML + "<div class='letras'>" + listaVariavel[i] + "</div>" 
        }
    }

}

function mudarStyleLetra(tecla){
    
    // Função responsavel unicamente por mudar a aparencia da tecla com a letra apos clicada.
    document.getElementById(tecla).style.color = "#000000";
    document.getElementById(tecla).style.backgroundColor = "#444444";
    document.getElementById(tecla).style.borderLeftColor = "#333333";
    document.getElementById(tecla).style.borderTopColor = "#333333";
    document.getElementById(tecla).style.borderRightColor = "#222222";
    document.getElementById(tecla).style.borderBottomColor = "#222222";

}

function btnpressed(letra){

    document.getElementById("tecla-" + letra).disabled = true;

    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra);
        comparaListas(letra);
        montarPalavra();

    }
    
    const keyClick = document.getElementById("key-click"); // Armazena o som do click do teclado.
    keyClick.play(); // Executa o som de click.

    let comparacao = document.getElementById("input").innerText;
    
    if (comparacao == palavraSorteada) // VITORIA

    {
        
        document.getElementById("fala2").innerText = "Você está livre. Iremos atrás de " + palavraSorteada; + "."
        document.getElementById("keyboard").style.display = "none"; // esconde o teclado ao dar game over.
        document.getElementById("gameover").style.display = "flex"; // mostra a janela de game over.
        const victory = document.getElementById("victory"); // Armazena o som de erro.
        victory.play(); // Executa o som de erro.
        document.getElementById("actor01").style.display = "none";
        document.getElementById("actor03").style.display = "inline-block";
        
         
    }

}

function comparaListas(letra) {
    const pos = palavraSorteada.indexOf(letra);
    if (pos < 0) {
        tentativas--
        // comando para mudar a imagem da forca aqui. 
        // verifica se ainda tem tentativas
        
    } else 
    {
        for (i =0; i < palavraSorteada.length; i++)
        {
            if (palavraSorteada[i] == letra) {
                listaVariavel[i] = letra; 
            }          
        }
    }

    for (i =0; i < palavraSorteada.length; i++) // Laço que compara as duas listas pra checar se o jogador acertou tudo.
    { 
        if (palavraSorteada[i] != listaVariavel[i]) 
        {
            vitoria = false;
        }
        else {vitoria = true;
        }
        
    }

    if(tentativas == 0) // GAME OVER 

    {
    
        document.getElementById("keyboard").style.display = "none"; // esconde o teclado ao dar game over.
        document.getElementById("input").value = "none"; // esconde o input de palavra ao dar game over.
        document.getElementById("gameover").style.display = "flex"; // mostra a janela de game over.
        const error = document.getElementById("click-error"); // Armazena o som de erro.
        error.play(); // Executa o som de erro.
        document.getElementById("actor01").style.display = "none";
        document.getElementById("actor02").style.display = "inline-block";
 
    }

}

function startgame() {

    montarPalavra();

    document.getElementById("balao").style.display = "none"; // esconde a janela com o dialogo de inicio.
    document.getElementById("input").style.display = "inline-block"; // mostra a janela do input no inicio ndo jogo.
    document.getElementById("keyboard").style.display = "inline-block"; // mostra o teclado no inicio do jogo.
    const startGame = document.getElementById("mouse-click"); // Armazena o som do click do mouse.
    startGame.play(); // Executa o som de click.
    const backMusic = document.getElementById("back-music");
    backMusic.play();
        
}

function loadGame() {

    const backMusic = document.getElementById("back-music");
    backMusic.play();
    
    document.getElementById("balao").style.display = "flex"; // esconde a janela com o dialogo de inicio.
    document.getElementById("gameover").style.display = "none"; // esconde a janela de game over.
    document.getElementById("input").style.display = "none"; // esconde a janela do input no inicio ndo jogo.
    document.getElementById("keyboard").style.display = "none"; // esconde o teclado no inicio do jogo.
    document.getElementById("back-music").loop = true;
}

function restartGame() {

    location.reload()
    const backMusic = document.getElementById("back-music");
    backMusic.play();

}















sorteiaPalavra(); // Sorteia uma das palavras armazenadas na Array.
