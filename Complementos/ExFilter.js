const randowNumbers =[36,99,45,90]
//vefifica os itens do array e retorna bolean se for falso retorna um array vazio, se não retorna os itens que foram selecionados pela funcão
const numbersGreaterThan37= randowNumbers.filter(item => item >50)

console.log(numbersGreaterThan37)