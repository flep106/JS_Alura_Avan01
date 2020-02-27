class MensagemView{
    constructor(elemento){
        this._elemento = this.elemento;
    }

    _template(modelo){
        return`<p class="alert alert-info">${modelo.texto}</p>`;
    }

    update(modelo){
        this._elemento.innerHTML = this._template(modelo);
    }
}