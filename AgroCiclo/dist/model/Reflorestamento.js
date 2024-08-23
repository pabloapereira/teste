"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cultivar_1 = __importDefault(require("./Cultivar"));
class Reflorestamento extends Cultivar_1.default {
    constructor(nome, areaCultivo, dataPlantio, area, muda) {
        super(dataPlantio, areaCultivo, area);
        this.muda = muda;
    }
}
exports.default = Reflorestamento;
