class Listanegociacoes{

    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        //pega um array vazio e coloca a copia da lista original
        return  [].concat(this._negociacoes);
    }
}