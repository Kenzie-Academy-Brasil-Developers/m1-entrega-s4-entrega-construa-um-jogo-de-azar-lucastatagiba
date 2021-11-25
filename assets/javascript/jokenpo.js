const main = document.getElementById('main');
const h2 = document.createElement('h2');
h2.innerText = 'Pedra, Papel e Tesoura';
const h3Jogador = document.createElement('h3');

const form = document.createElement('form');
let coordenadasClick = [];

const divInputs = document.createElement('div');
divInputs.id = 'divInputs';

let divJogador = document.createElement('div');
divJogador.id = 'divJogador';

const informe = document.createElement('p');
informe.id = 'informe';
informe.innerText = 'ESCOLHA O SEU ABAIXO!';
divJogador.appendChild(informe);

const img1 = document.createElement('img');
divJogador.appendChild(img1);
img1.setAttribute('src', 'assets/img/pedra1.png');
img1.id = 0;

const img2 = document.createElement('img');
divJogador.appendChild(img2);
img2.setAttribute('src', 'assets/img/papel1.png');
img2.id = 1;

const img3 = document.createElement('img');
divJogador.appendChild(img3);
img3.setAttribute('src', 'assets/img/tesoura1.png');
img3.id = 2;

let divJogadores = document.createElement('div');
divJogadores.id = 'divJogadores';

//DIV COMPUTADOR
const informePC = document.createElement('p');
informePC.id = 'informePC';
informePC.innerText = 'COMPUTADOR!';

let divComputador = document.createElement('div');
divComputador.id = 'divComputador';

divComputador.appendChild(informePC);

const img4 = document.createElement('img');
divComputador.appendChild(img4);
img4.setAttribute('src', 'assets/img/tesoura2.png');
img4.id = 3;

const img5 = document.createElement('img');
divComputador.appendChild(img5);
img5.setAttribute('src', 'assets/img/papel2.jpg');
img5.id = 4;

const img6 = document.createElement('img');
divComputador.appendChild(img6);
img6.setAttribute('src', 'assets/img/pedra2.png');
img6.id = 5;


const divBotoes = document.createElement('div');
divBotoes.id = 'divBotoes';

const botaoJogar = document.createElement('input');
botaoJogar.type = 'button';
botaoJogar.value = 'Jogar';

const inputReset = document.createElement('input');
inputReset.type = 'reset';
inputReset.value = 'Reset';

const h3Computador = document.createElement('h3');
h3Computador.innerText = 'Computador:';

const pResultadoPC = document.createElement('p');

const ganhador = document.createElement('h3');
ganhador.innerText = 'Vencedor:';

const pResultadoGanhador = document.createElement('p');

let divVitoria = document.createElement('div');
divVitoria.id = 'divVitoria';

main.appendChild(h2);
main.appendChild(h3Jogador);
main.appendChild(form);
main.appendChild(divJogadores);
divJogadores.appendChild(divJogador);

divJogadores.appendChild(divComputador);
main.appendChild(ganhador);
form.appendChild(divInputs);
main.appendChild(divVitoria);

divVitoria.appendChild(h3Computador);
divVitoria.appendChild(pResultadoPC);
divVitoria.appendChild(ganhador);
divVitoria.appendChild(pResultadoGanhador);

form.appendChild(divBotoes);
divBotoes.appendChild(botaoJogar);
divBotoes.appendChild(inputReset);

function closeModal() {
    document.getElementById('bgModal').style.top = '-150%';
}

const button = document.querySelector('.play-button');
button.addEventListener('click', closeModal);

//funçao de click, selecionando imagem

const handleClick = (event) => {

    const cell = event.target;
    console.log(cell);


    coordenadasClick.push(Number(cell.id));
    //coordenadasClick.sort((a, b) => a - b)
    console.log(coordenadasClick);
    cell.style = 'border: solid 1px black';
}



img1.addEventListener("click", handleClick);

img2.addEventListener("click", handleClick);

img3.addEventListener("click", handleClick);


function jogar() {
    if (coordenadasClick.length < 1) {
        alert('ESCOLHA UMA OPCÃO ENTRE PEDRA, PAPEL OU TESOURA');
    } else {
        let sortear = Math.floor(Math.random() * 3);
        switch (sortear) {
            case 0:
                pResultadoPC.innerText = 'Pedra';
                break;
            case 1:
                pResultadoPC.innerText = 'Papel';
                break;
            case 2:
                pResultadoPC.innerText = 'Tesoura';
                break;
        }
    }
    // verificar empate // 
    if (coordenadasClick[0] === 0 && pResultadoPC.innerText == 'Pedra' || coordenadasClick[0] === 1 && pResultadoPC.innerText == 'Papel' || coordenadasClick[0] === 2 && pResultadoPC.innerText == 'Tesoura') {
        pResultadoGanhador.innerHTML = 'Empatouuuu!!!!!';
    }
    // verificar vitoria do jogador// 
    else if (coordenadasClick[0] === 0 && pResultadoPC.innerText == 'Tesoura' || coordenadasClick[0] === 1 && pResultadoPC.innerText == 'Pedra' || coordenadasClick[0] === 2 && pResultadoPC.innerText == 'Papel') {
        pResultadoGanhador.innerHTML = 'Parabenssss você GANHOOOUU!!!!!';
    }
    // verificar vitoria do computador// 
    else if (coordenadasClick[0] === 0 && pResultadoPC.innerText == 'Papel' || coordenadasClick[0] === 1 && pResultadoPC.innerText == 'Tesoura' || coordenadasClick[0] === 2 && pResultadoPC.innerText == 'Pedra') {
        pResultadoGanhador.innerHTML = 'Ahhhh o PC ganhou !!!! TENTE NOVAMENTE !!';
    }
}

function resetar(event) {
    coordenadasClick = [];
    pResultadoPC.innerText = '';
    pResultadoGanhador.innerHTML = '';
    for (let i = 0; i < 4; i++) {
        const cell = event.target.closest('main').childNodes[4].childNodes[0].childNodes[i];
        console.log(cell);
        cell.style = 'border: 1px solid trasparent';
    }
}

botaoJogar.addEventListener('click', jogar);
inputReset.addEventListener('click', resetar);