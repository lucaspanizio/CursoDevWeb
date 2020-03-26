var rodada = 1;
var matriz_jogo = Array(3);

matriz_jogo['A'] = [0, 0, 0];
matriz_jogo['B'] = [0, 0, 0];
matriz_jogo['C'] = [0, 0, 0];

matriz_jogo['A'][1] = 0;
matriz_jogo['A'][2] = 0;
matriz_jogo['A'][3] = 0;

matriz_jogo['B'][1] = 0;
matriz_jogo['B'][2] = 0;
matriz_jogo['C'][3] = 0;

matriz_jogo['C'][1] = 0;
matriz_jogo['C'][2] = 0;
matriz_jogo['C'][3] = 0;


$(document).ready(function() {

    function iniciou() {
        return ($('#i_apelido1').val() != '' && $('#i_apelido2').val() != '') ? true : false;
    }

    $('#btn_jogo').click(function(e) {
        if (iniciou()) {
            $('#s_apelido1').html($('#i_apelido1').val());
            $('#s_apelido2').html($('#i_apelido2').val());
            $('#i_apelido1').hide();
            $('#i_apelido2').hide();
            $('#s_apelido1').show();
            $('#s_apelido2').show();
            $('.quadro').on('click');
        } else {
            alert('Preencha corretamente os apelidos dos jogadores!');
        }
    });

    $('.quadro').click(function(e) {
        if (iniciou()) {
            var id_quadro = this.id;
            $('#' + id_quadro).off();
            jogada(id_quadro);
        }
    });

    function jogada(id) {
        var ponto = 0;
        var icone = '';

        if ((rodada % 2) == 1) {
            icone = 'url(imagens/marcacao_1.png)';
            ponto = -1;
        } else {
            icone = 'url(imagens/marcacao_2.png)';
            ponto = 1;
        }
        rodada++;
        $('#' + id).css('background-image', icone);

        var linha_coluna = id.split('-');
        matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;

        verifica_combinacao();
    }

    function verifica_combinacao() {

        //verifica na horizontal
        var pontos = 0;
        for (var i = 1; i <= 3; i++) {
            pontos = pontos + matriz_jogo['A'][i];
            console.log(matriz_jogo['A'][i] + '<br>');
        }
        ganhador(pontos);

        pontos = 0;
        for (var i = 1; i <= 3; i++) {
            pontos = pontos + matriz_jogo['B'][i];
        }
        ganhador(pontos);

        pontos = 0;
        for (var i = 1; i <= 3; i++) {
            pontos = pontos + matriz_jogo['C'][i];
        }
        ganhador(pontos);

        //verifica na vertical
        for (var l = 1; l <= 3; l++) {
            pontos = 0;
            pontos += matriz_jogo['A'][l];
            pontos += matriz_jogo['B'][l];
            pontos += matriz_jogo['C'][l];

            ganhador(pontos);
        }

        //verificar na diagonal
        pontos = 0;
        pontos = matriz_jogo['A'][1] + matriz_jogo['B'][2] + matriz_jogo['C'][3];
        ganhador(pontos);

        pontos = 0;
        pontos = matriz_jogo['A'][3] + matriz_jogo['B'][2] + matriz_jogo['C'][1];
        ganhador(pontos);

    }

    function ganhador(pontos) {
        if (pontos == -3) {
            var jogada_1 = $('#i_apelido1').val();
            alert(jogada_1 + ' é o vencedor');
            $('.quadro').off();

        } else if (pontos == 3) {
            var jogada_2 = $('#i_apelido2').val();
            alert(jogada_2 + ' é o vencedor');
            $('.quadro').off();
        }
    }
});