import Calc from "../model/Calc";
import Grao from "../model/Grao";
import { ValorCalc } from "../model/ValorCalc";

const grao: Grao = new Grao("milho", 90, 85, 200)
const calc: Calc = new Calc(grao);

calc["populacao"] = 1000;
calc["espaca"] = 0.5;

test("teste de metro linear", () => {
    const esperado = (1000 * 0.5) / 10000;

    expect(calc.plantMetroLinear()).toBe(esperado)
})          