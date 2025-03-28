const y = 6;
const x = 8;
let valores_impares = [];
let numero = x + 1;

for(let i = 0; i < y;){
    if(numero % 2 === 1){
        valores_impares.push(numero);
        i++;
    }
    numero++;
}

console.log(valores_impares);