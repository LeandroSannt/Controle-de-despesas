const transactionUl =document.querySelector('#transactions')
const incomeDisplay =document.querySelector
('#money-plus')
const expenseDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector
('#balance')
const form = document.querySelector
('#form')
const inputTrasactionName = document.querySelector('#text')
const inputTrasactionAmount = document.querySelector('#amount')

//criando localStorage
const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'))
//alterando os dados para ficarem salvos no localstorage
let transactions =localStorage.getItem('transactions') !== null ? localStorageTransactions: []

const removeTransaction = ID => {
    transactions = transactions.filter(transaction=>transaction.id !== ID)
    updateLocalStorage()
    init()
}

const addTransactionIntoDOM = transaction =>{4
    const operator = transaction.amount < 0 ?'-':'+'
    const CSSClass = transaction.amount <0 ?'minus':'plus'
    //math.add mostra somente o valor do numero e escondendo os sinais 
    const amountwithoutOperator =Math.abs(transaction.amount)
    const li = document.createElement('li')
    //adiciona a classe dentro da lista
    li.classList.add(CSSClass)
    li.innerHTML=` ${transaction.name} <span>${operator}R$ ${amountwithoutOperator}</span><button class="delete-btn" onClick="removeTransaction (${transaction.id})">
    x
    </button>`

   transactionUl.append(li)
}

const updateBalanceValue = () =>{
    //criando um novo array q pode ser alterado sem alterar o inical 
    const transectionsAmounts =transactions
        .map(transection =>transection.amount)
    const total = transectionsAmounts
        .reduce((accumulator,transection)=>accumulator + transection,0)
        .toFixed(2)
    
    const income =transectionsAmounts
    //reliza a soma do valores 
        .filter(value => value > 0)
        .reduce((accumulator,value) =>accumulator + value,0)
        .toFixed(2)
    const expense = transectionsAmounts
        .filter (value=> value<0)
        .reduce((accumulator,value) =>accumulator -value,0)
        .toFixed(2)

    balanceDisplay.textContent =`R$ ${total}`
    incomeDisplay.textContent =`R$ ${income}`
    expenseDisplay.textContent =`R$ ${expense}`
}

//criada uma função para fazer um loop e colocar os valores dentro do li2
const init = () =>{
    transactionUl.innerHTML = ''
    transactions.forEach(addTransactionIntoDOM)
    updateBalanceValue()

}
init()

const updateLocalStorage =() =>{
    localStorage.setItem('transactions', JSON.stringify(transactions))

}
const generateID =() =>Math.round(Math.random()*1000)

form.addEventListener('submit',event =>{
    event.preventDefault()
//funcao q leva os dados para o list
const transactionName = inputTrasactionName.value.trim() 
const transactionAmount = inputTrasactionAmount.value.trim() 
 //valida se os inputs estao vazios   
    if(transactionName ==''|| transactionAmount === '' ){

    alert('Preencha corretamente os dados ')
    return
}
const transaction = {
    id :generateID(),
    name:transactionName, 
    amount:Number(transactionAmount)
}

transactions.push(transaction)
//funcao q leva os dados para o list
init()
updateLocalStorage()

inputTrasactionName.value= ''
inputTrasactionAmount.value = ''


} )