"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TelaInicial_1 = __importDefault(require("./view/TelaInicial"));
let iniciar = new TelaInicial_1.default();
iniciar.iniciar();
/*const option = {
  method: "POST",
  headers: {
    "Content-Type": "appication/json"
  },
  body: JSON.stringify({
    name: "teste2",
    cliclo: 90,
    pg: 80,
    pms: 200,
  })
};

fetch("http://localhost:3000/graos", option)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });*/
