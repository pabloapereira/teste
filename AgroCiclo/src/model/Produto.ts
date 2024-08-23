import { CicloCultivo } from "./CicloCulti";

export default abstract class Produto{
  public nome: string = "";

  constructor (nome:string) {
    this.nome = nome;
  }

  public abstract tempoGerminacao():number;
}
