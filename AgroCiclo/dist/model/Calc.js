"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValorCalc_1 = require("./ValorCalc");
class Calc {
    constructor(grao) {
        this.populacao = 0;
        this.espaca = 0;
        this.quantiMetroLinear = 0;
        this.grao = grao;
    }
    plantMetroLinear() {
        return (this.populacao * this.espaca) / ValorCalc_1.ValorCalc.hectare;
    }
    sementesMetroLinear() {
        return this.plantMetroLinear() * ValorCalc_1.ValorCalc.multiSemen / this.grao.getPg();
    }
    sementesHectare() {
        return this.sementesMetroLinear() * this.quantiMetroLinear;
    }
    kgHectare() {
        this.grao.getPms() * this.sementesHectare() / ValorCalc_1.ValorCalc.numeroSementes;
    }
}
exports.default = Calc;
