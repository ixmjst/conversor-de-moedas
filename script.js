const amount=document.querySelector("#amount")

// Manipulando o input amount para receber somente números
amount.addEventListener("input",()=>{
   console.log(amount.value)
   const hasCharacterRegex=/\D+/g
    amount.value=amount.value.replace(hasCharacterRegex,"")
    
})