import Cultivar from "./Cultivar";
import Area from "./Area";
import Muda from "./Muda";

export default class Reflorestamento extends Cultivar {
    private muda:Muda;
    
    constructor(nome:string, areaCultivo:number, dataPlantio: string, area: Area, muda: Muda) {
        super(dataPlantio, areaCultivo, area);
        this.muda = muda;
    }
}