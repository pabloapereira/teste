"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cultivar {
    constructor(dataPlantio, areaCultivo, area) {
        this.dataPlantio = "";
        this.areaCultivo = 0;
        this.areaCultivo = areaCultivo;
        this.dataPlantio = dataPlantio;
        this.area = area;
    }
    setAreaCultivo(areaCultivo) {
        this.areaCultivo = areaCultivo;
    }
    getAreaCultivo() {
        return this.areaCultivo;
    }
    setDataPlantio(dataPlantio) {
        this.dataPlantio = dataPlantio;
    }
    getDataPlantio() {
        return this.dataPlantio;
    }
    previsaoColheita() {
        return 30;
    }
}
exports.default = Cultivar;
