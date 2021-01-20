// - Código do desafio feito por João Pedro Resende.

let valorLista

// - Variaveis para teste.
const itens = [["Maça", "Abacaxi"],["Banana"]]
const quantidade = [[2,3], 3]
const precos = [[2, 2], 2]
const emails = ["joao@gmail.com", "jose@gmail.com"]

let reciboTotal = []

// - Função para receber emails.
function gerarRecibo(itens, quantidade, precos, email){
  let total
  let reciboEmail = []
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  // - Calcular valor de toda lista de compras.
  for(i = 0; i < email.length; i++){
    if(typeof quantidade[i] === "object" && typeof precos[i] === "object"){
      total = quantidade[i].reduce(reducer) * precos[i].reduce(reducer)
    }
    total = quantidade[i] * precos[i]
  }

  // - Calcular troco.
  valorRestante = total / email.length 
  troco = total % email.length 

  // - Percorrer array de emails e colocando no array.
  for(k = 0; k < email.length; k++){
    reciboEmail.push({
      "Email":email[k],
      "Itens":itens[k],
      "Total": k > 0 ? valorRestante : valorRestante + troco
    })
  }
  return reciboEmail
}

// - Rodando função de gerarRecibo e mostrar o recibo.
console.log(gerarRecibo(itens, quantidade, precos, emails))