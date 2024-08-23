"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Banco {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    listarGrao() {
        return this.produtos;
    }
}
exports.default = Banco;
