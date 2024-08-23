"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Banco_1 = __importDefault(require("../db/Banco"));
const telaCadastro_1 = require("./telaCadastro");
let banco = new Banco_1.default;
class TelaInicial {
    iniciar() {
        const teclado = (0, prompt_sync_1.default)();
        let opcao = 0;
        while (opcao !== 9) {
            console.log("------ Menu ------");
            console.log("1- Adicionar novo Grão");
            console.log("9- Sair");
            const entrada = teclado("Escolha uma opção: ");
            opcao = parseInt(entrada);
            switch (opcao) {
                case 1:
                    console.log("Redirecionando Tela Cadastro");
                    let cadastro = new telaCadastro_1.TelaCadastro();
                    cadastro.cadastro();
                    break;
                case 2:
                    console.log(banco.listarGrao());
                case 9:
                    console.log("Saindo do programa...");
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
                    break;
            }
        }
    }
}
exports.default = TelaInicial;
