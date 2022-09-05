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
buscarId(ID)
console.log(buscarNome(nome))
exibirProdutos()
console.log("  ")
ordenadosPeloId ()
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
    for (var atual = 0; atual < contador - 1; atual++) {
        for (var seguinte = atual + 1; seguinte < contador; seguinte++) {
            var idAux = arrayId[atual]
            var nomeAux = arrayNome[atual]
            var precoAux = arrayPreco[atual]
            var avaliacaoAux = arrayAvaliacao[atual]
            if (arrayId[atual] > arrayId[seguinte]) {
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
    exibirProdutos ()
}
function exibirProdutos (){
    for(var index=0;index<contador;index++){
        console.log(arrayId(index),arrayNome[index],arrayPreco[index],arrayAvaliacao[index])
    }
}