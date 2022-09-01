var arrayId = []
var arrayNome = []
var arrayPreco = []
var arrayAvaliacao = []
var contador = 0
cadastrarProduto()
var ID = prompt("Digite o ID do produto")
buscarProduto(ID)

function cadastrarProduto() {
    arrayId[contador] = parseInt(prompt("Inserir um ID:"))
    arrayNome[contador] = prompt("Inserir nome do produto:")
    arrayPreco[contador] = parseFloat(prompt("Inserir preço:"))
    arrayAvaliacao[contador] = parseInt(prompt("Inserir avaliação"))
    contador++
}

function buscarProduto(idParametro) {

    for (var index = 0; index < contador; index++) {
        if (idParametro == arrayId[index]) {

            console.log(arrayId[index], arrayNome[index], arrayPreco[index], arrayAvaliacao[index])
        }
    }


}
