var arrayId = []
var arrayNome = []
var arrayPreco = []
var arrayAvaliacao = []
var contador = 0
cadastrarProduto ()
function cadastrarProduto (){
    arrayId[contador] = parseInt(prompt("Inserir um ID:"))
    arrayNome[contador] = parseInt(prompt("Inserir nome do produto:"))
    arrayPreco[contador] = parseFloat(prompt("Inserir preço:"))
    arrayAvaliacao[contador] = parseInt(prompt("Inserir avaliação"))
    contador++
}