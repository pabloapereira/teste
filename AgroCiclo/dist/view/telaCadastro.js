"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelaCadastro = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class TelaCadastro {
    cadastro() {
        const teclado = (0, prompt_sync_1.default)();
        let opcao = 0;
        while (opcao !== 9) {
            console.log("------ Casatro Grão ------");
            console.log("1- Nome Grão: ");
            console.log("2- Cliclo: ");
            console.log("3- PG: ");
            console.log("4- PMS: ");
            console.log("5- Estação: ");
            console.log("6- Sair");
            const entrada = teclado("Escolha uma opção: ");
            opcao = parseInt(entrada);
            switch (opcao) {
                case 1:
                    const name = teclado("Digite o nome do grão");
                    console.log(`Nome ${name}`);
                    break;
            }
        }
    }
}
exports.TelaCadastro = TelaCadastro;
