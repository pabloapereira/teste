import Produto from "../model/Produto";

export default class Banco {
  public produtos: Produto[] = [];

  public adicionarProduto(produto: Produto) {
    this.produtos.push(produto)
  }

  public listarGrao() {
    return this.produtos;
  }
}