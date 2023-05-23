function minhaFuncao(){
    //bloco de codigo
}

minhaFuncao("param")

//expressão de função

const soma = function(num1, num2) {
    return num1 + num2;
}
console.log(soma(1,1));

// diferença principal: HOISTING
// funções e var são "listadas" no topo do arquivo.
function apresentar() {
    return "olá";
}

console.log(soma(1,1));
const soma = function(num1, num2) {
    return num1 + num2;
}
