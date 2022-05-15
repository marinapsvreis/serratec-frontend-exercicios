const baseURL = 'https://viacep.com.br/ws/'
const returnType = '/json'

var resultados = []

function buscarEndereco(event) {
  //previne o recarregamento da pagina
  event.preventDefault()

  var cep = document.getElementById('input-cep').value
  cep = obterNumeros(cep)
  if (cep.length === 8) {
    buscarEnderecoAPI(cep)
    document.getElementById('input-cep').value = ''
    return
  }

  return alert('CEP deve ter 8 caracteres')
}

function obterNumeros(cep) {
  return cep.replace(/[^0-9]/g, '').trim()
}

function buscarEnderecoAPI(cep) {
  //console.log('Buscando na API' + cep)
  //const url = baseURL + cep + returnType
  const url = `${baseURL}${cep}${returnType}`
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`Error. ${response.status}`)
      return response.json()
    })
    .then(data => {
      //console.log(data) // data é o conteudo do json
      if (!('erro' in data)) {
        resultados.push({
          id: Math.floor(Math.random() * (999999 - 000001) + 000001),
          cep: data.cep,
          logradouro: data.logradouro,
          complemento: data.complemento,
          bairro: data.bairro,
          cidade: data.localidade,
          uf: data.uf,
          ibge: data.ibge
        })
        //console.log(resultados) conteudo sendo armazenado

        localStorage.setItem('resultados', JSON.stringify(resultados))
        atualizarTabela()
      } else {
        alert('CEP não localizado!')
      }
    })
    .catch(err => console.log(err))
}

function atualizarTabela() {
  var linhasTabela = ''
  resultados.map(item => {
    linhasTabela += `<tr>
                      <th scope="row">${item.cep}</th>
                      <td>${item.logradouro}</td>
                      <td>${item.complemento}</td>
                      <td>${item.bairro}Centro</td>
                      <td>${item.cidade}</td>
                      <td>${item.uf}</td>
                      <td>${item.ibge}</td>
                      <td><button onclick="limparRegistroDoHistorico(${item.id});" class="btn btn-danger">Limpar</button></td>
                    </tr>`
  })

  document.getElementById('corpo-tabela').innerHTML = linhasTabela
}

function limparRegistroDoHistorico(id) {
  var itemLocalizado = resultados.filter(r => r.id === id)
  if (avisoDeConfirmacao(itemLocalizado.shift())) {
    var novaLista = resultados.filter(r => r.id !== id)
    resultados = novaLista
    atualizarTabela()
    alert(`O registro de pesquisa foi excluido`)
    localStorage.setItem('resultados', JSON.stringify(resultados))
    return
  }
}

function avisoDeConfirmacao(registro) {
  return confirm(
    `Deseja excluir a pesquisa ${registro.cel} da lista de historicos?`
  )
}

function verificarLocalStorage() {
  var local = JSON.parse(localStorage.getItem('resultados'))
  if (local === null || local.length === 0) return
  resultados = local
  atualizarTabela()
}
