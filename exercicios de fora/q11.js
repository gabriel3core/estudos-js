//Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre: o produto do dobro do primeiro com metade do segundo. a soma do triplo do primeiro com o terceiro. o terceiro elevado ao cubo.

const numero = 10;
const numero2 = 20;
const numero3 = 1.5;

let calc1 = (numero * 2) * (numero2 / 2);
let calc2 = (numero * 3) + numero3;
let calc3 = numero3**3;

console.log(calc1, calc2, calc3);