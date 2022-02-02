import View from "./view.js";

class MensagemView extends View<string> {

    template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `
    }
}
export default MensagemView;