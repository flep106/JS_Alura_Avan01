class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new Listanegociacoes();
        this._negocicoesView = new NegociacaoView($('#negociacoesView'));      
        this._negocicoesView.update(this._listaNegociacoes);
        
        this._mensagem = new Mensagem();
        //essa diz onde vc quer incluir na view a mensagem
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
        
        this._limpaFormulario();
    }

    adiciona(event){
        //segura o form no botao incluir
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negocicoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociação Adicionada com sucesso!';
        this._mensagemView.update(this._mensagem);
        this._limpaFormulario();
            
    }

    //Ficar mais organizado
    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value,
        );
    }

    //metofos que comecam com _ é exclusivo da classe.
    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }


}