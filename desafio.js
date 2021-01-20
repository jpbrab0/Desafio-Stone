// - Código do desafio feito por João Pedro Resende.

let valorLista

// - Variaveis para teste.
const itens = []
const quantidade = []
const precos = []
const emails = []

let reciboTotal = []

// - Função para receber lista de compras.
function recebeListaDeCompras(itens, quantidade, preco){
  console.log(`Itens comprados: ${itens}`)
  // - Função para somar itens de um array.
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  // - Calculo do valor final.
  const valores = quantidade.reduce(reducer) * preco.reduce(reducer)

  // - Por fim, define o valor da variavel valorLista com o resultado do calculo final.
  valorLista = valores
}

// - Função para receber emails.
function recebeEmail(email){
  // - Variavel para dividir valores igualmente e arredondando caso necessário..
  const dividirValor = Math.round(valorLista / email.length) + 1
  
  // - Por fim, percorre o array, pegando cada email e colocando na variavel emails com o email e o valor a pagar. 
  email.map(valorArray => {
    reciboTotal.push({"email": valorArray, "valor a pagar": dividirValor})
  })
}

// - Rodando funções
recebeListaDeCompras(itens, quantidade, precos)
recebeEmail(emails)

// - console.log para retornar os valores.
console.log(reciboTotal)