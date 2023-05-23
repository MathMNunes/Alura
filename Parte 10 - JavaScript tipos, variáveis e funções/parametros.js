//parametros de função

function soma(numero1, numero2) {
    return num1 + num2;
}

// console.log(soma(2, 2))
// console.log(soma(2, 22))
// console.log(soma(20, 2))

//parâmetros x argumentos
// ordem dos parrâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
    
}

// console.log(nomeIdade("matheus", 24))

function soma(numero1, numero2) {
    return num1 + num2;
}
function multiplica(numero1, numero2) {
    return num1 * num2;
}

console.log(multiplica(soma(4, 3), soma(3, 3)))