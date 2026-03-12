const rl = require('readline-sync')
const Piramide = require('./models/Piramide')

console.log('==============================================================')
console.log('================== Sistema PyramidDesign =====================')
console.log('==============================================================')
console.log('')

console.log('========== Sistema para calcular o Modulo Piramide ===========')
console.log('')

const aresta = Number(rl.question('Digite o valor da Aresta: '))
const altura = Number(rl.question('Digite o valor da Altura: '))
console.log('')

const piramide = new Piramide(aresta,altura)
const areaB = piramide.calcularAreaBase()
const areaL = piramide.calcularAreaLateral()
const apotemaB = piramide.calcularApotemaBase()
const apotemaP = piramide.calcularApotemaPiramide()
const volume = piramide.calcularVolume()

console.log('===========================================================================')
console.log(`O valor do calculo da Área da base da Piramide é de: ${areaB.toFixed(3)} m²`)
console.log(`O valor do calculo da Área da lateral da Piramide é de: ${areaL.toFixed(3)} m²`)
console.log(`O valor do calculo do Apotema da Base é de: ${apotemaB.toFixed(3)} m²`)
console.log(`O valor do calculo do Apotema da Piramide é de: ${apotemaP.toFixed(3)} m²`)
console.log(`O valor do calculo do Volume é de: ${volume.toFixed(3)} m²`)
console.log('===========================================================================')
console.log('')

console.log('Programa Finalizado!')