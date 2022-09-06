var arrayId = []
var arrayNome = []
var arrayPreco = []
var arrayAvaliacao = []
var contador = 0
cadastrarProduto()
cadastrarProduto()
cadastrarProduto()
cadastrarProduto()

var ID = prompt("Digite o ID do produto:")
var nome = prompt("Digite o nome do produto:")
var idTrocaValor = prompt("Qual ID quer trocar o valor?")
var trocarValor = prompt("Qual valor quer cadastrar?")
var deletarId = prompt("Qual produto deseja deletar? Digite o ID:")
buscarId(ID)
console.log(buscarNome(nome))
exibirProdutos()
console.log("  ")
ordenadosPeloId()
exibirProdutos()
console.log("  ")
ordenarPelaAvaliacao()
exibirProdutos()
console.log("  ")
ordenarPelaAvaliacao()
exibirProdutos()
console.log("  ")
atualizarPreco(idTrocaValor, trocarValor)
exibirProdutos()
console.log("  ")
deletarProduto(deletarId)


function cadastrarProduto() {
    arrayId[contador] = parseInt(prompt("Inserir um ID:"))
    arrayNome[contador] = prompt("Inserir nome do produto:")
    arrayPreco[contador] = parseFloat(prompt("Inserir preço:"))
    arrayAvaliacao[contador] = parseInt(prompt("Inserir avaliação"))
    contador++
}

function buscarId(idParametro) {

    for (var index = 0; index < contador; index++) {
        if (idParametro == arrayId[index]) {

            console.log(arrayId[index], arrayNome[index], arrayPreco[index], arrayAvaliacao[index])

        }
    }
}
function buscarNome(nomeParametro) {
    for (var index = 0; index < contador; index++) {
        if (nomeParametro == arrayNome[index]) {
            console.log(arrayNome[index])
            return arrayId[index]
        }
    }

}

function ordenadosPeloId() {
    ordenar(arrayId)
    exibirProdutos()
}
function ordenarPeloPreco() {
    ordenar(arrayPreco)
    exibirProdutos()
}
function ordenarPelaAvaliacao() {
    ordenar(arrayAvaliacao)
    exibirProdutos()
}

function exibirProdutos() {
    for (var index = 0; index < contador; index++) {
        console.log(arrayId(index), arrayNome[index], arrayPreco[index], arrayAvaliacao[index])
    }
}
function atualizarPreco(idParametro, novoValor) {
    for (var index = 0; index < contador; index++) {
        if (idParametro == arrayId[index]) {
            arrayPreco[index] = novoValor
        }

    }
    exibirProdutos()
}
function deletarProduto(idParametro) {
    for (var index = 0; index < contador; index++) {
        if (idParametro == arrayId[index])
            arrayId[index] = 0
        arrayNome[index] = 0
        arrayPreco[index] = 0
        arrayAvaliacao[index] = 0
    }

    for (var atual = 0; atual < contador - 1; atual++) {
        for (var seguinte = atual + 1; seguinte < contador; seguinte++) {
            if (arrayId[atual] == 0) {
                arrayId[atual] = arrayId[seguinte]
                arrayId[seguinte] = 0
                arrayNome[atual] = arrayNome[seguinte]
                arrayNome[seguinte] = 0
                arrayPreco[atual] = arrayPreco[seguinte]
                arrayPreco[seguinte] = 0
                arrayAvaliacao[atual] = arrayAvaliacao[seguinte]
                arrayAvaliacao[seguinte] = 0
            }

        }
    }
    var arrayIdAux = []
    var arrayNomeAux = []
    var arrayPrecoAux = []
    var arrayAvaliacaoAux = []
    for (var index = 0; index < contador; index++) {
        if (arrayId[index] != 0) {
            arrayIdAux[index] = arrayId[index]
            arrayNomeAux[index] = arrayNome[index]
            arrayPrecoAux[index] = arrayPreco[index]
            arrayAvaliacaoAux[index] = arrayAvaliacao[index]
        }

    }
    contador--
    arrayId = arrayIdAux
    arrayNome = arrayNomeAux
    arrayPreco = arrayPrecoAux
    arrayAvaliacao = arrayAvaliacaoAux
    exibirProdutos()
}
function ordenar(propriedadesParametro) {
    for (var atual = 0; atual < contador - 1; atual++) {
        for (var seguinte = atual + 1; seguinte < contador; seguinte++) {
            var idAux = arrayId[atual]
            var nomeAux = arrayNome[atual]
            var precoAux = arrayPreco[atual]
            var avaliacaoAux = arrayAvaliacao[atual]
            if (propriedadesParametro[atual] > propriedadesParametro[seguinte]) {
                arrayId[atual] = arrayId[seguinte]
                arrayId[seguinte] = idAux
                arrayNome[atual] = arrayNome[seguinte]
                arrayNome[seguinte] = nomeAux
                arrayPreco[atual] = arrayPreco[seguinte]
                arrayPreco[seguinte] = precoAux
                arrayAvaliacao[atual] = arrayAvaliacao[seguinte]
                arrayAvaliacao[seguinte] = avaliacaoAux
            }

        }
    }
}