const palavras = ['kenzie', 'academy', 'teste', 'jogo', 'banana', 'tomate', 'espinafre', 'programar', 'dado', 'teclado', 'mouse', 'notebook', 'pato', 'lata', 'java', 'webcam', 'headset', 'microfone', 'telefone', 'sprint'];
let tabuleiro = [];

console.log(palavras[Math.floor(Math.random() * palavras.length)])


const palavrasSelecionadas = [];
for (i = 0; i < 3; i++) {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    if(!palavrasSelecionadas.includes(palavra)){
        palavrasSelecionadas.push(palavra)
    }
    else i--
}

console.log(palavrasSelecionadas)


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
console.table(tabuleiro);

let teste = []

function incluirPalavras(){
    palavrasSelecionadas[0]
    let intervalo = 10 - palavrasSelecionadas[0].length
    let palavraRecortada = palavrasSelecionadas[0].split('')
    console.log(palavraRecortada)

    let indiceInicial = (Math.floor(Math.random() * intervalo))
    console.log(indiceInicial)

    for(i = 0; i < palavraRecortada.length; i++){
        tabuleiro[indiceInicial][i] = palavraRecortada[i]
    }
    console.log(tabuleiro)
}
incluirPalavras()





// pega palavra aleatŕoio no índice - RANDOM
// criando uma nova variável da palavra como SPLIT
// usar RANDOM para definir se a palavra é vertical ou horizontal

// verificar o length da palavra para para gerar um random - length da palavra para definir a posição da primeira letra da palavra
// push em cada palavra em sequência vertical ou horizontal de acordo com o sentido
