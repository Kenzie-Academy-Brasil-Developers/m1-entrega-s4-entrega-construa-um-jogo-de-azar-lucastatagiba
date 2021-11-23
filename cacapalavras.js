const palavras = ['kenzie', 'academy', 'teste', 'jogo', 'banana', 'tomate', 'espinafre', 'programar', 'dado', 'teclado', 'mouse', 'notebook', 'pato', 'lata', 'java', 'webcam', 'headset', 'microfone', 'telefone', 'sprint'];
let tabuleiro = [];
let coordenadasClick = [];
let coordenadasPalavrasSelecionadas = [];
let colunas = document.getElementsByTagName('tr')
let linhas = document.getElementsByTagName('td')
let palavra1 = []
let palavra2 = []
let palavra3 = []


// console.log(palavras[Math.floor(Math.random() * palavras.length)])


const palavrasSelecionadas = [];

// SELECIONA TRÊS PALAVRAS DO ARRAY 'PALAVRAS' SEM REPETIÇÃO
for (i = 0; i < 3; i++) {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    if (!palavrasSelecionadas.includes(palavra)) {
        palavrasSelecionadas.push(palavra)
    } else {
        i--
    }
}
console.log(palavrasSelecionadas)

// gera um caractére aleatório dentre os presente na lista
const letras = 'ABCDEFGHIJKLMOPQRSTUVWXYZ';
let letra = letras.charAt(Math.floor(Math.random() * letras.length));

// CRIA UMA MATRIZ VAZIA
// altura (alt) e largura (lar)
let variaveis = {alt: 10, lar:10};

for(i = 0; i < variaveis.alt; i++){
    tabuleiro.push([]);
    for(j = 0; j < variaveis.lar; j++){
        tabuleiro[i].push('');
        //= (letras.charAt(Math.floor(Math.random() * letras.length)));  
        // comentario a cima preenche com letras aleatorias
    }
}
console.table(tabuleiro)

for(k = 0 ; k < palavrasSelecionadas.length; k++){
    incluirPalavras(k)
}


// console.table(tabuleiro);

// função para adicionar palavra em posição aleatória - funcional - 3 palavras.
// Tanto na horizontal quanto vertical e abrangendo toda a extenção da matriz 10x10.
// PROBLEMA: PALAVRAS SE SOBREESCREVEM
function incluirPalavras(selecionada){
    let intervalo = 10 - palavrasSelecionadas[selecionada].length
    let palavraRecortada = palavrasSelecionadas[selecionada].split('')

        let indiceInicial = (Math.floor(Math.random() * (intervalo + 1)))
        let indiceOrtogonal = (Math.floor(Math.random() * 10))
        let direcional = Math.floor(Math.random() * 2)

    if(direcional === 1){
        for(i = 0; i < palavraRecortada.length; i++){
        tabuleiro[indiceInicial+i][indiceOrtogonal] = palavraRecortada[i]
        }
    }
    if(direcional === 0){
        for(i = 0; i < palavraRecortada.length; i++){
            tabuleiro[indiceOrtogonal][indiceInicial+i] = palavraRecortada[i]
        }
    }
    console.table(tabuleiro)
}

// incluirPalavras()



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
    grade.appendChild(coluna);
    for (let j = 0; j < 10; j++) {
        let linha = document.createElement('td')
        linha.id = `${i}${j}`;
        linha.innerText = (letras.charAt(Math.floor(Math.random() * letras.length)));
        coluna.appendChild(linha);
    }
}



function incluirPalavrasPeloDOM() {

    for (let i = 0; i < palavrasSelecionadas.length; i++) {

        let palavrasACacar = document.createElement('li')
        palavrasACacar.innerText = palavrasSelecionadas[i]
        main.appendChild(palavrasACacar)

        let intervalo = 10 - palavrasSelecionadas[i].length
        let palavraRecortada = palavrasSelecionadas[i]

        let indiceInicial = (Math.floor(Math.random() * (intervalo + 1)))
        let indiceOrtogonal = (Math.floor(Math.random() * 10))
        let direcional = Math.floor(Math.random() * 2)


        if (direcional === 1) {
            for (j = 0; j < palavraRecortada.length; j++) {
                grade.childNodes[indiceInicial + j].childNodes[indiceOrtogonal].innerText = palavraRecortada[j]
                coordenadasPalavrasSelecionadas.push(Number(grade.childNodes[indiceInicial + j].childNodes[indiceOrtogonal].id))                                  
            }
        } else {
            for (j = 0; j < palavraRecortada.length; j++) {
                grade.childNodes[indiceOrtogonal].childNodes[indiceInicial + j].innerText = palavraRecortada[j]
                coordenadasPalavrasSelecionadas.push(Number(grade.childNodes[indiceOrtogonal].childNodes[indiceInicial + j].id))

            }
        }
    }
}
console.log(coordenadasPalavrasSelecionadas)

incluirPalavrasPeloDOM()

let tituloACacar = document.createElement('h3')
tituloACacar.innerText = 'Palavras:'
main.appendChild(tituloACacar)

//Verificador de clicks
const handleClick = (event) => {
    const cell = event.target;


    coordenadasClick.push(Number(cell.id));
    palavra1 = coordenadasClick
    console.log(coordenadasClick);    
}

function resetPalavra (){
    coordenadasClick = [];
    console.log(palavra1)
}
//console.log(palavra1)
//Captura do Listner dos eventos
for (let i = 0; i < linhas.length; i++) {
    linhas[i].addEventListener("click", handleClick);
}


