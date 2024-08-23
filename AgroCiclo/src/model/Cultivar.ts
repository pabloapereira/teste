import Area from "./Area";

export default class Cultivar {
  private dataPlantio: string = "";
  private areaCultivo: number = 0;
  public area: Area;

  constructor(dataPlantio: string, areaCultivo: number, area: Area) {
    this.areaCultivo = areaCultivo;
    this.dataPlantio = dataPlantio;
    this.area = area;
  }

  public setAreaCultivo(areaCultivo: number) :void {
    this.areaCultivo = areaCultivo;
  }

  public getAreaCultivo() {
    return this.areaCultivo;
  }

  public setDataPlantio(dataPlantio: string) {
    this.dataPlantio = dataPlantio;
  }

  public getDataPlantio() {
    return this.dataPlantio;
  }

  public previsaoColheita() :number {
    return 30
  }
}
