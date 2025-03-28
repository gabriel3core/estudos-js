const x = 100;
const y = 200;
let soma = 0;

const menor = Math.min(x, y);
const maior = Math.max(x, y);

for (let i = menor; i <= maior; i++) {
    if (i % 13 !== 0) {
        soma += i;
    }
}

console.log(soma);