"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = __importDefault(require("./Produto"));
class Grao extends Produto_1.default {
    constructor(nome, cicloCultivo, pg, pms, estacao) {
        super(nome);
        this.cicloCultivo = 0;
        this.pg = 0;
        this.pms = 0;
        if (estacao == undefined) {
            this.setEstacao("verão");
        }
        else {
            this.setEstacao(estacao);
        }
        this.setNome(nome);
        this.setCiclo(cicloCultivo);
        this.setPg(pg);
        this.setPms(pms);
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setCiclo(cicloCultivo) {
        this.cicloCultivo = cicloCultivo;
    }
    getCiclo() {
        return this.cicloCultivo;
    }
    setEstacao(estacao) {
        this.estacao = estacao;
    }
    getEstacao() {
        return this.estacao;
    }
    setPg(pg) {
        this.pg = pg;
    }
    getPg() {
        return this.pg;
    }
    setPms(pms) {
        this.pms = pms;
    }
    getPms() {
        return this.pms;
    }
    tempoGerminacao() {
        return 24;
    }
}
exports.default = Grao;
