"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cultivo {
    constructor() {
        this.produtoCultivo = "";
        this.estacaoPlantio = "";
        this.areaDisponivel = 0;
    }
    setProdutoCultivo(produtoCultivo) {
        this.produtoCultivo = produtoCultivo;
    }
    getProdutoCultivo() {
        return this.produtoCultivo;
    }
    getAreaDisponivel() {
        return this.areaDisponivel; //divida de aonde implementar banco talvez
    }
}
exports.default = Cultivo;
