
function soma (num1, num2){
    let soma = num1+num2
    return console.log(soma)
}
function subtracao(nu1, nu2){
    let subtracao = nu1-nu2
    return console.log(subtracao)
}
function multiplicacao(m1, m2){
    let multiplicacao = m1*m2
    return console.log(multiplicacao)
}
function divisao (d1, d2){
    let divisao = d1/d2
    return console.log(divisao)
}

console.log("Teste de Operações/ Soma")
soma(3, 4)
console.log("Teste de Operações/ Subtracão")
subtracao(4, 2)
console.log("Teste de Operações / Multiplicação")
multiplicacao(3, 2)
console.log("Teste de Operações / Divisão")
divisao(10, 2)
console.log("Teste de Operações / Divisão por zero")
divisao(10, 0)

function quadradoDoNumero(m1){
    let quadradoDoNumero = multiplicacao(m1, m1)
    return console.log(quadradoDoNumero)
}
quadradoDoNumero(4)

function mediaDeTresNumeros(me1, me2, me3){
    let mediaDeTresNumeros = me1 + me2 + me3
    let total = divisao(mediaDeTresNumeros, 3)
    return console.log(total)
}
mediaDeTresNumeros(6, 4, 5)

function calculaPorcentagem(num, por){
    let mult = multiplicacao(num, por);
    let total = divisao(mult, 100);
    return console.log(total);
}
calculaPorcentagem(300, 15)