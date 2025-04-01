const CONSUMO = 12;

function calc_distancia(x, y){
    return x * y;
}

function calc_litros(x, y){
    const distancia = calc_distancia(x, y);
    const litro = distancia / CONSUMO;

    return litro;
}

console.log('Quantidade de litros necessarias: ', calc_litros(10,85).toFixed(3));
console.log('Quantidade de litros necessarias: ', calc_litros(2,92).toFixed(3));
console.log('Quantidade de litros necessarias: ', calc_litros(22,67).toFixed(3));