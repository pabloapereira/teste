import ErrorPerso from "./ErrorPerso";

export default class Area {
  private tamanho: number = 0;
  private areaCultivada: number = 0;

  constructor(tamanho: number, areaCultivada: number) {
    this.setTamanho(tamanho);
    this.setAreaCultivada(areaCultivada);
  }

  public setTamanho(tamanho: number): void {
    this.tamanho = tamanho;
  }

  public getTamanho(): number {
    return this.tamanho;
  }

  public setAreaCultivada(areaCultivada: number): void {
    this.areaCultivada = areaCultivada;
  }

  public getAreaCultivada(): number {
    return this.areaCultivada;
  }

  public adicionarArea(novaArea: number): void {
    this.tamanho += novaArea;
  }

  public areaDisponivel(): number {
    return this.getTamanho() - this.getAreaCultivada();
  }

  public adicionarAreaCultivada(novaArea: number): void {
    if (this.getAreaCultivada() + novaArea <= this.areaDisponivel()) {
      this.setAreaCultivada(this.getAreaCultivada() + novaArea);
    } else {
      throw new ErrorPerso(novaArea)
    }
  }
}
