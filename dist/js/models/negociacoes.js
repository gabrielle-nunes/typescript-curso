class Negociacoes {
    constructor() {
        this.negociacoes = []; //guardar lista de negociacoes
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
export default Negociacoes;
