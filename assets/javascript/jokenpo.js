const main = document.getElementById('main')
const h2 = document.createElement('h2')
h2.innerText = 'Pedra, Papel e Tesoura'
const h3Jogador = document.createElement('h3')
h3Jogador.innerText = 'Jogador:'
const form = document.createElement('form')

const divInputs = document.createElement('div')
divInputs.id = 'divInputs'

const inputPedra = document.createElement('input')
inputPedra.type = 'radio'
inputPedra.id = 'pedra'
const descricaoPedra = document.createElement('p')
descricaoPedra.innerText = 'Pedra'

const inputPapel = document.createElement('input')
inputPapel.type = 'radio'
inputPapel.id = 'papel'
const descricaoPapel = document.createElement('p')
descricaoPapel.innerText = 'Papel'

const inputTesoura = document.createElement('input')
inputTesoura.type = 'radio'
inputTesoura.id = 'tesoura'
const descricaoTesoura = document.createElement('p')
descricaoTesoura.innerText = 'Tesoura'

const divBotoes = document.createElement('div')
divBotoes.id = 'divBotoes'

const botaoJogar = document.createElement('input')
botaoJogar.type = 'button'
botaoJogar.value = 'Jogar'

const inputReset = document.createElement('input')
inputReset.type = 'reset'
inputReset.value = 'Reset'

const h3Computador = document.createElement('h3')
h3Computador.innerText = 'Computador:'

const pResultadoPC = document.createElement('p')

const ganhador = document.createElement('h3')
ganhador.innerText = 'Vencedor:'

const pResultadoGanhador= document.createElement('p')

const buttonTrocarJogo = document.createElement('button')
buttonTrocarJogo.innerText = 'Jogo Caça-Tesouros'


function trocarJogo(){
    buttonTrocarJogo.href = 'index.html'
}


buttonTrocarJogo.addEventListener('click', trocarJogo )


main.appendChild(h2)
main.appendChild(h3Jogador)
main.appendChild(form)
main.appendChild(h3Computador)
main.appendChild(pResultadoPC)
main.appendChild(ganhador)
main.appendChild(pResultadoGanhador)
main.appendChild(buttonTrocarJogo)
form.appendChild(divInputs)
divInputs.appendChild(inputPedra)
divInputs.appendChild(descricaoPedra)
divInputs.appendChild(inputPapel)
divInputs.appendChild(descricaoPapel)
divInputs.appendChild(inputTesoura)
divInputs.appendChild(descricaoTesoura)
form.appendChild(divBotoes)
divBotoes.appendChild(botaoJogar)
divBotoes.appendChild(inputReset)

function closeModal() {
    document.getElementById('bgModal').style.top = '-150%'
}

const button = document.querySelector('.play-button')
button.addEventListener('click', closeModal)

function jogar (){
    if(inputPedra.checked == false && inputPapel.checked == false && inputTesoura.checked == false){
        alert('ESCOLHA UMA OPCÃO ENTRE PEDRA, PAPEL OU TESOURA')
    }else{
        let sortear = Math.floor(Math.random() * 3)
        switch(sortear){
            case 0:
                pResultadoPC.innerText = 'Pedra'
                break;
            case 1:
                pResultadoPC.innerText = 'Papel'
                break;
            case 2:
                pResultadoPC.innerText = 'Tesoura'
                break;
        }
    }
    // verificar empate // 
    if(inputPedra.checked == true && pResultadoPC.innerText == 'Pedra' || inputPapel.checked == true && pResultadoPC.innerText == 'Papel' || inputTesoura.checked == true && pResultadoPC.innerText == 'Tesoura'){
        pResultadoGanhador.innerHTML = 'Empatouuuu!!!!!'
    } 
    // verificar vitoria do jogador// 
    else if(inputPedra.checked == true && pResultadoPC.innerText == 'Tesoura' || inputPapel.checked == true && pResultadoPC.innerText == 'Pedra' || inputTesoura.checked == true && pResultadoPC.innerText == 'Papel'){
        pResultadoGanhador.innerHTML = 'Parabenssss você GANHOOOUU!!!!!'
    }
    // verificar vitoria do computador// 
    else if(inputPedra.checked == true && pResultadoPC.innerText == 'Papel' || inputPapel.checked == true && pResultadoPC.innerText == 'Tesoura' || inputTesoura.checked == true && pResultadoPC.innerText == 'Pedra'){
        pResultadoGanhador.innerHTML = 'Ahhhh o PC ganhou !!!! TENTE NOVAMENTE !!'
    }


}

botaoJogar.addEventListener('click', jogar)
inputReset.addEventListener('click', reset)

function reset (){
    pResultadoPC.innerText = ''
    pResultadoGanhador.innerHTML = ''
}