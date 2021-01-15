/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada 
ao expoente*/

/*function Expoente (base, exp) {
    
        return Math.pow(base, exp)
    
}

console.log(Expoente(5, 2))*/

function Exp (base) {
    return function (exp) {
        console.log(Math.pow(base, exp))
    }
}

const Result = Exp(5)
Result(2)