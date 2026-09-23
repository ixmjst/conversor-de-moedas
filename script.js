//Cotação de moedas 
const USD=917.5
const EUR= 1051.2
const GBP=1222.2

// Obtendo os elementos do formulário.
const form= document.querySelector("form")
const amount=document.querySelector("#amount")
const currency=document.querySelector("#currency")
const footer=document.querySelector("main footer")
// Manipulando o input amount para receber somente números
amount.addEventListener("input",()=>{
   const hasCharacterRegex=/\D+/g
    amount.value=amount.value.replace(hasCharacterRegex,"")

})

//Capturando o evento de submit do formulário
form.onsubmit=(event)=>{
 event.preventDefault()
 switch(currency.value) {
    case "USD":
        convertCurrency(amount.value,USD,"$")
        break
    case "EUR":
        convertCurrency(amount.value,EUR,"€")
    case "GBP":
        convertCurrency(amount.value,GBP,"£")
 }
}

//função para  conversão da moeda
function convertCurrency(amount, price, symbol){
    try {
        // Adicionando a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")
    } catch (error) {
        //removendo o footer da tela
        footer.classList.remove("show-result")
        console.log(error)
        alert("ERROW")
    }
}