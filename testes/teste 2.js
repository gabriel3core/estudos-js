let T = 3;
let respostas = [4, 1, 1, 2, 1];

let acertos = 0;

for(let i = 0; i < respostas.length; i++){
    if(respostas[i] === T){
        acertos++;
    }
}

console.log(acertos);