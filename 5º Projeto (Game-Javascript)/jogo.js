
var timerId = null;
var timerBackup = null;

function iniciar() {
    //Se o jogo já iniciu a função não permite adicionar tempo e balões
    if (timerId != null) { return false }

    var nivel_jogo = document.getElementById("nivel_jogo").value;
    // window.location.href = "jogo.html?" + nivel_jogo
    var tempo, qtd_baloes;

    //fácil - 120 segundos
    if (nivel_jogo == 1) {
        tempo = 60;
        qtd_baloes = 1;
    }
    //normal - 60 segundos
    else if (nivel_jogo == 2) {
        tempo = 60;
        qtd_baloes = 60;
    }
    //dificil - 30 segundos
    else {
        tempo = 30;
        qtd_baloes = 60;
    }

    //inserindo segundos no span
    document.getElementById('tempo').innerHTML = tempo;

    //inserir imagens de balões inteiros 
    criar_baloes(qtd_baloes);

    //imprimir qtde balões inteiros no span
    document.getElementById('baloes_inteiros').innerHTML = qtd_baloes;

    contagem(tempo);
}

// Se a tecla espaço for precionada o jogo pausa   
// e se for precionada novamente o jogo volta
window.addEventListener('keydown', function (e) {
    var codigoTecla = e.which || e.keyCode || 0;
    var space = codigoTecla == 32;
    if (space) {
        pausar();
    }
});

function pausar() {
    if (timerBackup == null) {
        timerBackup = parseInt(document.getElementById('tempo').innerHTML);
        clearTimeout(timerId);
    } else {
        contagem(timerBackup);
        timerBackup = null;
    }
}

function reiniciar() {
    //Zerando tempo no cronometro
    clearTimeout(timerId);
    timerId = null;

    //Zerar balões estourados no span
    document.getElementById('baloes_estourados').innerHTML = 0;

    //Removendo todas as tags filhas da div cenario - balões que sobraram
    var cenario = document.getElementById('cenario');
    while (cenario.lastElementChild) {
        cenario.removeChild(cenario.lastElementChild);
    }

    iniciar();
}

function contagem(segundos) {
    if (segundos == -1) {
        clearTimeout(timerId); //para a execução da função setTimeout
        fim_de_jogo('game_over');
        return false;
    }
    document.getElementById('tempo').innerHTML = segundos--;
    timerId = setTimeout("contagem(+" + segundos + ")", 1000);
}

function criar_baloes(qtd_baloes) {
    for (var i = 1; i <= qtd_baloes; i++) {
        var balao = document.createElement('img');
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';
        balao.id = 'b' + i;
        balao.onclick = function () { estourar(this); }

        document.getElementById('cenario').appendChild(balao);
    }
}

function estourar(b) {
    //altera imagem do balao inteiro para estourado
    document.getElementById(b.id).src = 'imagens/balao_azul_pequeno_estourado.png';

    //limpando evendo onclick do balão estourado para que não funcione novamente
    document.getElementById(b.id).setAttribute("onclick", "");

    //diminui qtde balões inteiros no span    
    var inteiros = parseInt(document.getElementById('baloes_inteiros').innerHTML) - 1;
    document.getElementById('baloes_inteiros').innerHTML = inteiros;

    //aumenta qtde balões estourados no span   
    document.getElementById('baloes_estourados').innerHTML = parseInt(document.getElementById('baloes_estourados').innerHTML) + 1;

    if (inteiros == 0) {        
        fim_de_jogo('you_win'); 
    }
}

function fim_de_jogo(id){    
    if(id == 'you_win') clearTimeout(timerId);  

    var img = document.createElement('img');
    img.src = "imagens/"+id+".jpg";
    img.id = id;
    document.getElementById('cenario').appendChild(img);

    var btn_reiniciar = document.createElement("BUTTON");
    btn_reiniciar.id = 'btn_reiniciar';
    btn_reiniciar.innerHTML = 'Jogar Novamente';
    btn_reiniciar.setAttribute("onclick", "reiniciar()");
    document.getElementById('cenario').appendChild(btn_reiniciar);     
}

// function game_over() {
//     var img = document.createElement('img');
//     img.src = 'imagens/game_over.jpg';
//     img.id = 'game_over';
//     document.getElementById('cenario').appendChild(img);

//     var btn_reiniciar = document.createElement(button);
//     btn_reiniciar.id = 'btn_reiniciar';
//     document.getElementById('game_over').appendChild(btn_reiniciar);
// }

// function you_win() {
//     var img = document.createElement('img');
//     img.src = 'imagens/you_win.jpg';
//     img.id = 'you_win';
//     document.getElementById('cenario').appendChild(img);
//     clearTimeout(timerId);
//     return false;
// }




