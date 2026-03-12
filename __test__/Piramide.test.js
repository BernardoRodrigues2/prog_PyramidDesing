const Piramide = require('../models/Piramide')

describe('Teste Unitario da classe Piramide: ', ()=>{
    test('Teste de calculo do Apotema da Base', ()=>{
        const aresta = 2
        const altura = 2

        const piramide = new Piramide(aresta,altura)
        const apotemaB = piramide.calcularApotemaBase()
        const resultAb = 2.449

        expect(apotemaB).toBeCloseTo(resultAb, 3)
    })

    test('Teste de calculo do Apotema da Piramide', ()=>{
        const aresta = 2
        const altura = 2

        const piramide = new Piramide(aresta,altura)
        const apotemaP = piramide.calcularApotemaPiramide()
        const resultAp = 3.162

        expect(apotemaP).toBeCloseTo(resultAp, 3)
    })

    test('Teste de calculo da Area da base da Piramide', ()=>{
        const aresta = 2
        const altura = 2

        const piramide = new Piramide(aresta,altura)
        const areaBase = piramide.calcularAreaBase()
        const resultAreab = 10.392

        expect(areaBase).toBeCloseTo(resultAreab, 3)
    })

    test('Teste de calculo da Area Lateral da Piramide', ()=>{
        const aresta = 2
        const altura = 2

        const piramide = new Piramide(aresta,altura)
        const areaLateral = piramide.calcularAreaLateral()
        const resultAreaL = 14.697

        expect(areaLateral).toBeCloseTo(resultAreaL, 3)
    })

    test('Teste de calculo do Volume da Piramide', ()=>{
        const aresta = 2
        const altura = 2

        const piramide = new Piramide(aresta,altura)
        const volume = piramide.calcularVolume()
        const resultVolume = 6.928

        expect(volume).toBeCloseTo(resultVolume, 3)
    })
})