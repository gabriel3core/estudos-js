const x = 100;
const y = 200;
let soma = 0;
let soma_multiplos = 0;
let valores = [];

for(let i = x; i <= y; i++){
    if(i % 13 !== 0){
        soma += i;
    }else if(i % 13 == 0){
        valores.push(i);
        soma_multiplos += i;
    }
}

console.log(valores);
console.log(valores.length)
console.log(soma);
console.log(soma_multiplos);