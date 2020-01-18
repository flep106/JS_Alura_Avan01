class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new Listanegociacoes();

    }

    adiciona(event){

        event.preventDefault();

            let negociacao = new Negociacao(
                DateHelper.textoParaData(this._inputData.value),
                this._inputQuantidade.value,
                this._inputValor.value,
            );
            this._listaNegociacoes.adiciona(negociacao);

            console.log(this._listaNegociacoes.negociacoes);
            
    }
    //metofos que comecam com _ é exclusivo da classe.
    _limpaFormulario(){

    }


}