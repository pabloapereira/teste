import { CicloCultivo } from "./CicloCulti";
import Produto from "./Produto";

export default class Grao extends Produto implements CicloCultivo{
  private cicloCultivo: number = 0;
  private estacao?:string;
  private pg: number = 0;
  private pms:number = 0;

  constructor(nome: string, cicloCultivo: number, pg: number, pms:number, estacao?: string) {
    super(nome) 
    if (estacao == undefined) {
      this.setEstacao("verão")
    } else {
      this.setEstacao(estacao);
    }
    
    this.setNome(nome);
    this.setCiclo(cicloCultivo);
    this.setPg(pg);
    this.setPms(pms);
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string) {
    this.nome = nome;
  }

  public setCiclo(cicloCultivo: number) {
    this.cicloCultivo = cicloCultivo;
  }

  public getCiclo() {
    return this.cicloCultivo;
  }

  public setEstacao(estacao: string) {
    this.estacao = estacao;
  }

  public getEstacao() {
    return this.estacao;
  }

  public setPg(pg: number) {
    this.pg = pg;
  }

  public getPg() :number{
    return this.pg;
  }

  public setPms(pms: number) {
    this.pms = pms;
  }

  public getPms() {
    return this.pms;
  }

  public tempoGerminacao(): number {
    return 24;
  }
}
