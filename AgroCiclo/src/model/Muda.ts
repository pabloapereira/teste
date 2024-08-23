import { CicloCultivo } from "./CicloCulti";

export default class Muda implements CicloCultivo{
  private name: string = "";
  private tempoCresci: number = 0;

  constructor(name: string, tempoCresci:number) {
    this.setName(name);
    this.setCiclo(tempoCresci);
  }

  public setName(name:string):void {
    this.name = name
  }

  public getName() :string {
    return this.name
  }

  public setCiclo(tempoCresci:number) {
    this.tempoCresci = tempoCresci
  }

  public getCiclo() :number {
    return this.tempoCresci
  }

  public previsaoColheita() :number {
    return 240;
  }
}
