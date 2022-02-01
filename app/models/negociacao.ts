
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
}

export default Negociacao