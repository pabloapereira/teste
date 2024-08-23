  import Produto from "./Produto";
  import Grao from "./Grao";
  import { ValorCalc } from "./ValorCalc";

  export default class Calc {
    private populacao: number = 0;
    private espaca: number = 0;
    private quantiMetroLinear:number = 0;
    private grao:Grao;

    constructor (grao:Grao) {
        this.grao = grao
    }   


    public plantMetroLinear():number {
      return (this.populacao * this.espaca) / ValorCalc.hectare;
    }

    public sementesMetroLinear() :number {
      return this.plantMetroLinear() * ValorCalc.multiSemen / this.grao.getPg()
    }

    public sementesHectare():number {
      return this.sementesMetroLinear() * this.quantiMetroLinear
    }

    public kgHectare() {
      this.grao.getPms() * this.sementesHectare() / ValorCalc.numeroSementes
    }
  }
