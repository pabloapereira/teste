import PromptSync from "prompt-sync";

export class TelaCadastro {
    cadastro() {
        const teclado = PromptSync();
    
        let opcao: number = 0;
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
              const name = teclado("Digite o nome do grão: ")
              console.log(`Nome ${name}`);
              break;
          }
        }
      }
      /*
      case 2:
              console.log(banco.listarGrao());
            case 9:
              console.log("Saindo do programa...");
              break;
            default:
              console.log("Opção inválida. Tente novamente.");
              break;
      */
}