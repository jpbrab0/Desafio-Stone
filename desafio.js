// - Código do desafio feito por João Pedro Resende.

// - Coloque os dados da lista de compras nestas variaveis.

const itens = [["Maça", "Abacaxi"],["Banana"]]
const quantidade = [[2,3], 3]
const precos = [[2, 2], 2]
const emails = ["joao@gmail.com", "jose@gmail.com"]

let reciboTotal = []

// - Função para receber emails.
function gerarRecibo(itens, quantidade, precos, email){

  // - Variavel para contabilizar o gasto de cada email.
  let totalEmails = []
  let reciboEmail = []

  // - Função para somar todos os itens de um determinado array.
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  // - Calcular valor de toda lista de compras.
  for(i = 0; i < email.length; i++){
    if(typeof quantidade[i] === 'object'){
      totalEmails.push(quantidade[i].reduce(reducer) * precos[i].reduce(reducer))
    } else {
      totalEmails.push(quantidade[i] * precos[i])
    }
  }
  // - Percorrer array de emails e colocando na variavel reciboEmail com o email, itens e o total a pagar.
  for(k = 0; k < email.length; k++){
    // - Variavel para calcular troco.
    let troco = totalEmails[k] % email.length
    reciboEmail.push({
      "Email":email[k],
      "Itens":itens[k],
      "TotalCompra": k > 0 ? totalEmails[k] : totalEmails[k] + troco, // - Caso k seja maior que 0, vai calcular o preço a pagar do email.
      "TotalAPagar": (totalEmails.reduce(reducer)) / email.length // - Total dividido para cada email pagar, como pedido no desafio.
    })
  }
  return reciboEmail
}

// - Rodando função de gerarRecibo e mostrar o recibo.
console.log(gerarRecibo(itens, quantidade, precos, emails))