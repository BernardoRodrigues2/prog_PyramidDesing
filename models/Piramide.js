class Piramide{
    constructor(aresta,altura){
        this.aresta = aresta
        this.altura = altura
    }

    calcularApotemaBase(){
        return this.aresta * (Math.sqrt(3/2))
    }

    calcularApotemaPiramide(){
        return Math.sqrt((this.altura * this.altura) + (this.calcularApotemaBase() * this.calcularApotemaBase()))
    }

    calcularAreaLateral(){
        return 3 * this.aresta * this.calcularApotemaBase()

    }

    calcularAreaBase(){
        return 3 * Math.sqrt(3) * (this.aresta * this.aresta) / 2
    }

    calcularVolume(){

        return (1/3) * this.calcularAreaBase() * this.altura
    }
}

module.exports = Piramide