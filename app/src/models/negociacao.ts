import { Modelo } from "../Interfaces/modelo.js";

class Negociacao implements Modelo<Negociacao> {

    constructor(

        private _data: Date, 
        public quantidade: number, 
        public valor: number
    ) {}

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
        const exp = /-/g; //regex para achar todos os hífens da data
        const date = new Date(dataString.replace(exp, ",")); //ao achar todos os hífens, substitua por ,
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
    
        return new Negociacao(date, quantidade, valor);
    }

    get volume(): number{
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public paraTexto(): string {
        return `
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor}
    `;
    }

    public negociacaoIgual(negociacao: Negociacao): boolean{
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }

}

export default Negociacao