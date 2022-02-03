
class Negociacao {

    constructor(

        private _data: Date, 
        public quantidade: number, 
        public valor: number
    ) {}

    get volume(): number{
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
        const exp = /-/g; //regex para achar todos os hífens da data
        const date = new Date(dataString.replace(exp, ",")); //ao achar todos os hífens, substitua por ,
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
    
        return new Negociacao(date, quantidade, valor);
    }
}

export default Negociacao