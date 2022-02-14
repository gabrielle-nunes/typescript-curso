import { inspect } from "../decorators/inspect.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";

abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    //escape com ? faz com que ele seja opcional. Opcionais sempre serão os ultimos parametros
    const elemento = document.querySelector(seletor);

    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM. Verifique.`);
    }
  }

  public update(model: T): void {
    let template = this.template(model);
    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;
}

export default View;
