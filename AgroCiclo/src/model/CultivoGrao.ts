import Area from "./Area";
import Cultivar from "./Cultivar";
import Produto from "./Produto";

export default class CultivoGrao extends Cultivar {
    private produto:Produto;
    private today = new Date();
    private dia = this.today.getDate();
    private mes = this.today.getMonth() + 1;

    constructor(areaCultivo:number, dataPlantio: string, area: Area, produto: Produto) {
        super(dataPlantio, areaCultivo, area);
        this.produto = produto
    }

    public setAreaCultivo(areaCultivo: number): void {
        this.area.adicionarAreaCultivada(areaCultivo);
        this.setAreaCultivo(areaCultivo);
    }

    public previsaoColheita() : number {
        return 90;
    }
}