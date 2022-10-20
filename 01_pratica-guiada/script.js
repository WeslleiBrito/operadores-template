//CODIGO AQUI

let saldo = 15 + 22.4
console.log("Saldo", saldo)

saldo -= 12.34
console.log("Saldo atualizado", saldo)

saldo /= 3
console.log("Valor por irmãos", saldo)

saldo *= 3.42
console.log("Saldo depois de aplicado", saldo)

saldo %= 3
console.log("Troco para o chiclete", saldo)

const multpESoma = 2 * 2 + 2
console.log("Multipcação direta", multpESoma)

const multpESomaNovo = 2 * (2 + 2)
console.log("Multiplicação com parenteses", multpESomaNovo)

// = atribuição
// == comparando valores
// === comparando valores e tipo
// !== vslor e tipo diferente

const comparacaoIgual = 5 === 5
console.log("5 === 5", comparacaoIgual)

const comparacaoDiferente = 5 !== 5
console.log("5 !== 5", comparacaoDiferente)

const comparacaoNumeroStrigDiferente = 5 !== "5"
console.log("5 !== '5'", comparacaoNumeroStrigDiferente)

const comparacaoTipoEValor = "5" === "cinco"
console.log("'5' === 'conco'", comparacaoTipoEValor)

const tipoIgual = typeof 5 === typeof 20
console.log("Comparação de tipos",tipoIgual)

const tipoIgualString = typeof "5" === "cinco"
console.log("comparação de tipo string", tipoIgualString)

const numero1 = 2
const numero2 = 9

let resultado 

resultado = numero1 === numero2
console.log("O primeiro numero é igual ao segundo", resultado)

resultado = numero1 <= numero2
console.log("O número 1 é menor que o numero 2?", resultado)

resultado = numero1 > numero2
console.log("O número 1 é maior que o número 2?", resultado)

resultado = numero1 < numero2
console.log("O número 1 é menor que número 2", resultado)

const a = 'Quero dirigir um Celta 2012';
const b = 'Sou maior de idade';
const c = 'Consigo comprar o Celta por 22.000 reais';
const d = 'Consigo alugar o Celta';
const e = 'Tenho carteira de motorista';

/* a
!b
b && !e
b && (c || d)
(b && e) && !a */

const suaIdade = Number(prompt("Qual a sua idade"))
const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

console.log("Sua idade é maior do que a do seu melhor amigo?", suaIdade > idadeAmigo)
console.log("a diferença entente a sua idade e a do seu amigo é de:", (suaIdade - idadeAmigo))
