//elemento já em tela
function alterarTitulo() {
  let novoTitulo = prompt('Digite um titulo')
  let titulo = document.getElementById('titulo') //também funciona sem essa linha
  titulo.innerHTML = novoTitulo
}

function alterarCorTitulo() {
  let novaCor = gerarCor()
  titulo.style.color = novaCor
}

function trocarCor() {
  let novaCor = gerarCor()
  let quadrado = document.getElementById('quadrado') //também funciona sem essa linha
  quadrado.style.backgroundColor = novaCor
}

function alterarTexto() {
  let novoTexto = textoDigitado.value
  quadrado.innerHTML = novoTexto
}

function gerarCor(opacidade = 1) {
  let r = parseInt(Math.random() * 255)

  let g = parseInt(Math.random() * 255)

  let b = parseInt(Math.random() * 255)

  return `rgba(${r}, ${g}, ${b}, ${opacidade})`
}

function adicionarNaLista() {
  let item = inputText.value
  let lista = '<li>' + item + '</li>'
  let conteudoAnterior = listaArea.innerHTML

  listaArea.innerHTML = conteudoAnterior + lista
}
