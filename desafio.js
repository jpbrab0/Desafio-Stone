
let valorLista
let emails = []

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
  const dividirValor = Math.round(valorLista / email.length)
  
  // - Por fim, percorre o array, pegando cada email e colocando na variavel emails com o email e o valor a pagar. 
  email.map(valorArray => {
    emails.push({"email": valorArray, "valor a pagar": dividirValor})
  })
}

recebeListaDeCompras(["feijao", "arroz"], [2, 3], [1.99, 2.99])
recebeEmail(["jose@gmail.com", "joao@gmail.com"])

// - console.log para retornar os valores.
console.log(emails)