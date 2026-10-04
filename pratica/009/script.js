const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    motor: ['1.6', '1.4', '1.0']
}

//CONVERTEMOS OBJETO EM TEXTO
let texto = JSON.stringify(carro)

//COLOCOU O TEXTO NO NOSSO HTML
document.getElementById('area').innerHTML = texto

//CONVERTEMOS TEXTO EM OBJETO
let obj = JSON.parse(texto)

//PEGAMOS UM VALOR DESTE OBJETO
console.log(obj.motor[2])

