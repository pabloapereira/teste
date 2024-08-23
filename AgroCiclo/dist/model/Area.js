"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorPerso_1 = __importDefault(require("./ErrorPerso"));
class Area {
    constructor(tamanho, areaCultivada) {
        this.tamanho = 0;
        this.areaCultivada = 0;
        this.setTamanho(tamanho);
        this.setAreaCultivada(areaCultivada);
    }
    setTamanho(tamanho) {
        this.tamanho = tamanho;
    }
    getTamanho() {
        return this.tamanho;
    }
    setAreaCultivada(areaCultivada) {
        this.areaCultivada = areaCultivada;
    }
    getAreaCultivada() {
        return this.areaCultivada;
    }
    adicionarArea(novaArea) {
        this.tamanho += novaArea;
    }
    areaDisponivel() {
        return this.getTamanho() - this.getAreaCultivada();
    }
    adicionarAreaCultivada(novaArea) {
        if (this.getAreaCultivada() + novaArea <= this.areaDisponivel()) {
            this.setAreaCultivada(this.getAreaCultivada() + novaArea);
        }
        else {
            throw new ErrorPerso_1.default(novaArea);
        }
    }
}
exports.default = Area;
