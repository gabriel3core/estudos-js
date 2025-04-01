//Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas: Para homens: (72.7h) - 58 Para mulheres: (62.1h) - 44.7

const altura_mulher = 1.67
const altura_homem = 1.85

const homens_calc = (72.7 * altura_homem) - 58;
const mulheres_calc =  (62.1 * altura_mulher) - 44.7;

console.log(homens_calc.toFixed(2));
console.log(mulheres_calc.toFixed(2));