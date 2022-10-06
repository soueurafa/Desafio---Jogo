let nick = document.querySelector('.nick');
let texto = document.querySelector('.texto')
let chances = document.querySelector('.tentativas');
let resultado = document.querySelector('.resultado');
let intervalo = document.querySelector('.intervalo');
let numero_usuario = document.querySelector('.numero_usuario');

let numero_definido = 0;
let tentativas = 3;


enviar_inputs = () => {
    texto.innerHTML = '<p>' + 'Olá <span>' + nick.value + '</span>, vamos jogar! De acordo com a opção de intervalo que você escolheu, descubra o número.'
    if (intervalo.value == 'opcao1') {
        numero_definido = 8;
    }
    else if (intervalo.value == 'opcao2') {
        numero_definido = 69;
    }
    else {
        numero_definido = 123;
    }
}


comparar = () => {

    tentativas--

    if (numero_usuario.value == numero_definido) {
        resultado.innerHTML = '<h4>' + 'Parabéns, você adivinhou o número!' + '</h4>'
    }

    else if (numero_usuario.value > numero_definido) {
        resultado.innerHTML = '<h4>' + 'A tentativa foi maior do que o número!' + '</h4>'
    }

    else {
        resultado.innerHTML = '<h4>' + 'A tentativa foi menor do que o número!' + '</h4>'
    }

    console.log(numero_usuario.value);

    if (tentativas >= 1) {
        chances.innerHTML = '<p>' + 'Você ainda tem ' + tentativas + ' tentativas!' + '</p>'
    }
    else {
        chances.innerHTML = '<p>' + 'Suas tentativas acabaram! Por favor reinicie a página.' + '</p>'

    }

}



