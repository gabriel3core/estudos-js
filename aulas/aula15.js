function calcular(valor){
    if(valor === 0){
        throw new Error('Nao pode ser 0');
    }
    return valor / 2;
}

try{
    const resultado = calcular (0);
    console.log('resultado: ', resultado);
}catch (error){
    console.log(error.message);
}

console.log('continua...')