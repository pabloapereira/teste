"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cultivar_1 = __importDefault(require("./Cultivar"));
class CultivoGrao extends Cultivar_1.default {
    constructor(areaCultivo, dataPlantio, area, produto) {
        super(dataPlantio, areaCultivo, area);
        this.today = new Date();
        this.dia = this.today.getDate();
        this.mes = this.today.getMonth() + 1;
        this.produto = produto;
    }
    setAreaCultivo(areaCultivo) {
        this.area.adicionarAreaCultivada(areaCultivo);
        this.setAreaCultivo(areaCultivo);
    }
    previsaoColheita() {
        return 90;
    }
}
exports.default = CultivoGrao;
