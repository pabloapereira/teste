import PromptSync from "prompt-sync";
import Grao from "../model/Grao";
import Banco from "../db/Banco";
import { TelaCadastro } from "./telaCadastro";

let banco:Banco = new Banco;

export default class TelaInicial {
  iniciar() {
    const teclado = PromptSync();

    let opcao: number = 0;
    while (opcao !== 9) {
      console.log("------ Menu ------");
      console.log("1- Adicionar novo Grão");
      console.log("9- Sair");

      const entrada = teclado("Escolha uma opção: ");
      opcao = parseInt(entrada);

      switch (opcao) {
        case 1:
          console.log("Redirecionando Tela Cadastro");
          let cadastro = new TelaCadastro();
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
