const palavras = [
    'rubi','diamante','safira','esmeralda','topaz',
    'turmalina','malaquita','turquesa','ambar','citrino',
    'ametista','zirconio','onix','obsidiana','jade',
    'platina','ouro','prata','cobre','estanho'
];

let tabuleiro = [];
let coordenadasClick = [];
let coordenadasPalavrasSelecionadas = [];
let colunas = document.getElementsByTagName('tr')
let linhas = document.getElementsByTagName('td')
let palavra1 = []
let palavra2 = []
let palavra3 = []

function closeModal() {
    document.getElementById('bgModal').style.top = '-150%'
}
function modalVitoria(){
    document.getElementById('bgModalVitoria').style.top = '0'    
}
function closeModalVitoria(){
    document.getElementById('bgModalVitoria').style.top = '-150%'    
}

const palavrasSelecionadas = [];

for (i = 0; i < 3; i++) {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    if (!palavrasSelecionadas.includes(palavra.toUpperCase())) {
        palavrasSelecionadas.push(palavra.toUpperCase())
    }
    else {
        i--
    }
}

//gerador de letra aleatório
const letras = 'ABCDEFGHIJLMOPQRSTUVXZ';
let letra = letras.charAt(Math.floor(Math.random() * letras.length));

// pega palavra aleatŕoio no índice - RANDOM
// criando uma nova variável da palavra como SPLIT
// usar RANDOM para definir se a palavra é vertical ou horizontal

// verificar o length da palavra para para gerar um random - length da palavra para definir a posição da primeira letra da palavra
// push em cada palavra em sequência vertical ou horizontal de acordo com o sentido


// DOMINIO A PARTIR DAQUI

let main = document.getElementById('main')
let grade = document.createElement('table')
main.appendChild(grade)

let ul = document.createElement('ul')
main.appendChild(ul)


for (let i = 0; i < 10; i++) {
    let coluna = document.createElement('tr')
    grade.appendChild(coluna);
    for (let j = 0; j < 10; j++) {
        let linha = document.createElement('td')
        linha.id = `${i}${j}`;
        linha.innerText = (letras.charAt(Math.floor(Math.random() * letras.length)));
        coluna.appendChild(linha);
    }
}

let resposta = [];

function incluirPalavrasPeloDOM() {
    let jaFoi = [];
    for (let i = 0; i < palavrasSelecionadas.length; i++) {
        let resposta2 = []
        let palavrasACacar = document.createElement('li')
        palavrasACacar.innerText = palavrasSelecionadas[i]
        ul.appendChild(palavrasACacar)

        let intervalo = 10 - palavrasSelecionadas[i].length
        let palavraRecortada = palavrasSelecionadas[i]

        let indiceInicial = (Math.floor(Math.random() * (intervalo + 1)))
        let indiceOrtogonal = (Math.floor(Math.random() * 10))
        while (jaFoi.includes(indiceOrtogonal)) {
            indiceOrtogonal = (Math.floor(Math.random() * 10))
        }
        jaFoi.push(indiceOrtogonal)

        let direcional = Math.floor(Math.random() * 2)


        //if (direcional === 1) {
        //    for (j = 0; j < palavraRecortada.length; j++) {
        //      grade.childNodes[indiceInicial + j].childNodes[indiceOrtogonal].innerText = palavraRecortada[j]
        //        coordenadasPalavrasSelecionadas.push(Number(grade.childNodes[indiceInicial + j].childNodes[indiceOrtogonal].id))
        //        resposta2.push(Number(`${indiceInicial + j}${indiceOrtogonal}`))
        //    }
        //} else {
        for (j = 0; j < palavraRecortada.length; j++) {
            grade.childNodes[indiceOrtogonal].childNodes[indiceInicial + j].innerText = palavraRecortada[j]
            coordenadasPalavrasSelecionadas.push(Number(grade.childNodes[indiceOrtogonal].childNodes[indiceInicial + j].id))
            resposta2.push(Number(`${indiceOrtogonal}${indiceInicial + j}`))
        }
        //}
        resposta.push(resposta2)
    }

}
incluirPalavrasPeloDOM()

let tituloACacar = document.createElement('h3')
tituloACacar.innerText = 'Preciosidades:'
main.appendChild(tituloACacar)

let arr = [];

//Verificador de clicks
const handleClick = (event) => {
    const cell = event.target;


    coordenadasClick.push(Number(cell.id));
    coordenadasClick.sort((a, b) => a - b)
    
    //event.target.style = 'border:1px solid red;'
    arr = [...resposta[0], ...resposta[1], ...resposta[2]]

    if (JSON.stringify(resposta[0]) == JSON.stringify(coordenadasClick)) {
        ul.childNodes[0].classList.add('riscar')
        coordenadasClick = []
    } else if (JSON.stringify(resposta[1]) == JSON.stringify(coordenadasClick)) {
        ul.childNodes[1].classList.add('riscar')
        coordenadasClick = []
    } else if (JSON.stringify(resposta[2]) == JSON.stringify(coordenadasClick)) {
        ul.childNodes[2].classList.add('riscar')
        coordenadasClick = []
    } else if (arr.includes(Number(cell.id))) {
        //event.target.style = 'border:1px solid red;'
    } else if (!arr.includes(Number(cell.id))) {
        coordenadasClick = []
        event.target.style = 'color: black;'
    }
    
    if (ul.childNodes[0].className === 'riscar') {
        for (let i = 0; i < ul.childNodes[0].innerText.length; i++) {
            if (resposta[0][i] < 10) {
                document.getElementById(`0${resposta[0][i]}`).classList.add('marcar')                   
            } else{
                document.getElementById(`${resposta[0][i]}`).classList.add('marcar')
            }       
        }
    }     
    if (ul.childNodes[1].className === 'riscar') {

        for (let i = 0; i < ul.childNodes[1].innerText.length; i++) {
            if (resposta[1][i] < 10) {
                document.getElementById(`0${resposta[1][i]}`).classList.add('marcar')
                
            } else{
                document.getElementById(`${resposta[1][i]}`).classList.add('marcar')
            }           
        }
        
    }     
    if (ul.childNodes[2].className === 'riscar') {

        for (let i = 0; i < ul.childNodes[2].innerText.length; i++) {

            if (resposta[2][i] < 10) {
                document.getElementById(`0${resposta[2][i]}`).classList.add('marcar')
                
            } else{
                document.getElementById(`${resposta[2][i]}`).classList.add('marcar')
            }            
        }
    }
    vitoria()
}

//Captura do Listner dos eventos
for (let i = 0; i < linhas.length; i++) {
    linhas[i].addEventListener("click", handleClick);
}



function vitoria (){
    let count = 0;

    for (let i = 0; i < 3; i++){
        if(ul.childNodes[i].className === 'riscar'){
            count++
        }
    }
    if(count === 3){
        modalVitoria()
    }
}

const button = document.querySelector('.play-button')
button.addEventListener('click', closeModal)

const button2 = document.querySelector('.jogarNovamente')
button2.addEventListener('click', closeModalVitoria)


