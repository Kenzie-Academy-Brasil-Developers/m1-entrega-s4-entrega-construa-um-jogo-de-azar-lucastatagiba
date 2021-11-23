const palavras = ['kenzie', 'academy', 'teste', 'jogo', 'banana', 'tomate', 'espinafre', 'programar', 'dado', 'teclado', 'mouse', 'notebook', 'pato', 'lata', 'java', 'webcam', 'headset', 'microfone', 'telefone', 'sprint'];
let tabuleiro = [];
// console.log(palavras[Math.floor(Math.random() * palavras.length)])


const palavrasSelecionadas = [];
for (i = 0; i < 3; i++) {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    if (!palavrasSelecionadas.includes(palavra)) {
        palavrasSelecionadas.push(palavra)
    }
    else i--
}


//gerador de letra aleatório
const letras = 'ABCDEFGHIJKLMOPQRSTUVWXYZ';
let letra = letras.charAt(Math.floor(Math.random() * letras.length));

//gerador da matriz de letras
for (i = 0; i < 10; i++) {
    tabuleiro[i] = [];
    for (j = 0; j < 10; j++) {
        tabuleiro[i][j] = (letras.charAt(Math.floor(Math.random() * letras.length)));
    }
}

let teste = []

function incluirPalavras() {
    palavrasSelecionadas[0]
    let intervalo = 10 - palavrasSelecionadas[0].length
    let palavraRecortada = palavrasSelecionadas[0].split('')

    let indiceInicial = (Math.floor(Math.random() * (intervalo + 1)))
    let indiceOrtogonal = (Math.floor(Math.random() * 10))

    for (i = 0; i < palavraRecortada.length; i++) {
        tabuleiro[indiceInicial + i][indiceOrtogonal] = palavraRecortada[i]
    }
    
}

incluirPalavras()



// pega palavra aleatŕoio no índice - RANDOM
// criando uma nova variável da palavra como SPLIT
// usar RANDOM para definir se a palavra é vertical ou horizontal

// verificar o length da palavra para para gerar um random - length da palavra para definir a posição da primeira letra da palavra
// push em cada palavra em sequência vertical ou horizontal de acordo com o sentido


// DOMINIO A PARTIR DAQUI

let main = document.getElementById('main')
let grade = document.createElement('table')
main.appendChild(grade)

for (let i = 0; i < 10; i++) {
    let coluna = document.createElement('tr')
    grade.appendChild(coluna)
    for (let j = 0; j < 10; j++) {
        let linha = document.createElement('td')
        linha.innerText = (letras.charAt(Math.floor(Math.random() * letras.length)));
        coluna.appendChild(linha)
    }
}

let colunas = document.getElementsByTagName('tr')
let linhas = document.getElementsByTagName('td')

function incluirPalavrasPeloDOM() {

    for (let i = 0; i < palavrasSelecionadas.length; i++) { 

        let palavrasACacar = document.createElement('li')
        palavrasACacar.innerText = palavrasSelecionadas[i]
        main.appendChild(palavrasACacar)

        let intervalo = 10 - palavrasSelecionadas[i].length
        let palavraRecortada = palavrasSelecionadas[i]

        let indiceInicial = (Math.floor(Math.random() * (intervalo + 1)))
        let indiceOrtogonal = (Math.floor(Math.random() * 10))

        for (j = 0; j < palavraRecortada.length; j++) {              
            grade.childNodes[indiceInicial + j].childNodes[indiceOrtogonal].innerText = palavraRecortada[j] 
        }
    } 
}

incluirPalavrasPeloDOM()

let tituloACacar = document.createElement('h3')
tituloACacar.innerText = 'Palavras:'
main.appendChild(tituloACacar)





