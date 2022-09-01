var arrayId = []
var arrayNome = []
var arrayPreco = []
var arrayAvaliacao = []
var contador = 0
cadastrarProduto()
var ID = prompt("Digite o ID do produto:")
var nome = prompt("Digite o nome do produto:")
buscarId(ID)
 console.log (buscarNome(nome)) 

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
        if (nomeParametro == arrayNome[index] ) {
            console.log(arrayNome[index])
            return arrayId[index]
        }
    }

}

