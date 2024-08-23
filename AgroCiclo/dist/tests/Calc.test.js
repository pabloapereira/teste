"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Calc_1 = __importDefault(require("../model/Calc"));
const Grao_1 = __importDefault(require("../model/Grao"));
const grao = new Grao_1.default("milho", 90, 85, 200);
const calc = new Calc_1.default(grao);
calc["populacao"] = 1000;
calc["espaca"] = 0.5;
test("teste de metro linear", () => {
    const esperado = (1000 * 0.5) / 10000;
    expect(calc.plantMetroLinear()).toBe(esperado);
});
