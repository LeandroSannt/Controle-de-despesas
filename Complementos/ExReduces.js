const number = [1,2,3]
//a funcão sempre vai retornar um valor, acumulator recebe o primeiro valor 0 q foi definido inicialmente + number q é o valor do arry, apos, ele soma 1+0 e muda o valor de acumulator para 1 e depos faz dnv no segundo arry 1 + 2 e muda acumulator para 3 ai faz acumulator 3 e array 3 vira 6 e vai retornar o ultimo valor
const sum = number.reduce((acumulador,number) =>acumulador + number,0)

console.log (sum)