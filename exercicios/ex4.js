process.stdin.setEncoding('utf8');

let maiorString = '';
let resultado = [];

function contarCaracteres(valor) {
    let retorno = '';
    const removeEnter = valor.trim(); // trim = Remove espaços e quebras de linha no início e fim da string
    const separarEmArray = removeEnter.split(' ');

    for (let i = 0; i < separarEmArray.length; i++){
        if (i === 0) {
            retorno = `${separarEmArray[i].length}`
        } else {
            retorno = `${retorno}-${separarEmArray[i].length}`
        }

        if(separarEmArray[i].length >= maiorString.length){
            maiorString = separarEmArray[i];
        }
    }
    return retorno;
}

process.stdin.on('data', function (data){
    if (data.trim() === '0'){
        for(let i = 0; i < resultado.length; i++){
            console.log(resultado[i]);
        }
        console.log(`The biggest word: ${maiorString}`)

        process.stdin.pause();
    }

    resultado.push(contarCaracteres(data));
});