import { Modelo } from "../Interfaces/modelo.js";
import Negociacao from "./negociacao.js";

class Negociacoes implements Modelo<Negociacoes>{
    private negociacoes: Negociacao[] = []; //guardar lista de negociacoes
    
    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }
    
    public lista(): readonly Negociacao[]{ //Readonly não permite a modificação do array. Se houver, retornam uma nova instância do array
        return this.negociacoes;
    }
    
    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    
    public negociacaoIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}

export default Negociacoes;