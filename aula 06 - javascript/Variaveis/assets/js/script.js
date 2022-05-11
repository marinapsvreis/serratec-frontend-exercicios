//console.log('Hello World!')

var exibirTexto = function () {
  if (true) {
    var textoIf = 'Var dentro do IF'
    console.log(textoIf)
  }
  console.log(textoIf)
}
//console.log(textoIf) //aqui não pega o ecopo de var

exibirTexto()

var exibirTextoLet = function () {
  if (true) {
    let textoIfLet = 'Let dentro do IF'
    console.log(textoIfLet)
  }
  //console.log(textoIfLet) //aqui não pega o ecopo de let
}
//console.log(textoIfLet) //aqui não pega o ecopo de let

exibirTextoLet()

var exibirTextoConst = function () {
  if (true) {
    const textoConst = 'Const dentro do IF'
    console.log(textoConst)
  }
  const textoConst = 'Const fora do IF'
  console.log(textoConst) //um é diferente do outro
}
const textoConst = 'Const fora da função'
console.log(textoConst) //um é diferente do outro

exibirTextoConst()

//var escopo da função
//let escopo do bloco
//const se comporta igual ao let porém sem poder modificar a variavel depois de inicializada
