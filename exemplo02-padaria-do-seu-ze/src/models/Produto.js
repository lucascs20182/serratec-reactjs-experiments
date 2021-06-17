export default class Produto {

    constructor(obj) {
        obj = obj || {}; // evita cannot read property of undefined

        this.id = obj.id;
        this.nome = obj.nome;
        this.quantidade = obj.quantidade;
        this.valor = obj.valor;
        this.urlImagem = obj.urlImagem;
    }
}
