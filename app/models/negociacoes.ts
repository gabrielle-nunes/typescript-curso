import Negociacao from "./negociacao.js";

class Negociacoes {
    private negociacoes: Negociacao[] = []; //guardar lista de negociacoes

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[]{ //Readonly não permite a modificação do array. Se houver, retornam uma nova instância do array
        return this.negociacoes;
    }
}

export default Negociacoes;