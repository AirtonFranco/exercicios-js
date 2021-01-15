/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

//Primeira forma de se fazer
function Tabuada (n1, n2) {
    console.log(n1 + n2)
    console.log(n1 - n2)
    console.log(n1 * n2)
    console.log(n1 / n2)
}

Tabuada(9, 8)


//Segunda forma de se fazer
function Calc (num1) {

    return function (num2) {
        console.log(num1 + num2)
        console.log(num1 - num2)
        console.log(num1 * num2)
        console.log(num1 / num2)
    }
    
}

const result = Calc(9)
result(8)
