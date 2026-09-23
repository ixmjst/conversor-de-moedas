// Obtendo os elementos do formulário.
const form= document.querySelector("form")
const amount=document.querySelector("#amount")
const currency=document.querySelector("#currency")

// Manipulando o input amount para receber somente números
amount.addEventListener("input",()=>{
   console.log(amount.value)
   const hasCharacterRegex=/\D+/g
    amount.value=amount.value.replace(hasCharacterRegex,"")

})

//Capturando o evento de submit do formulário
form.onsubmit=(event)=>{
 event.preventDefault()
 console.log(currency.value)
}