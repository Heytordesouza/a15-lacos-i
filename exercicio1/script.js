/* Exercício 1

Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando 
se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, 
e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

Toda vez que a resposta for **sim**, o laço deve se repetir, 
e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, 
devemos imprimir o valor total da conta.*/

let coxinha = prompt("Você deseja comer coxinhas? \n S para Sim \n N para Não").toUpperCase()

let conta = 0

while(coxinha==="S"){
   conta = conta + 2.50
   alert(" A coxinha comprada aumentou o valor do seu pagamento")
   coxinha = prompt("Você deseja comer mais coxinhas? \n S para Sim \n N para Não").toUpperCase()
} 
   console.log(`Seu pagamento final ficou em R$ ${conta}`)

