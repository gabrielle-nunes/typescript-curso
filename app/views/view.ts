
abstract class View<T> {

    protected elemento: HTMLElement;
    private escape = false;

    constructor(seletor: string, escape?: boolean){ //escape com ? faz com que ele seja opcional. Opcionais sempre serão os ultimos parametros
        this.elemento = document.querySelector(seletor);

        if(escape){
            this.escape = escape;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if(this.escape){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}

export default View