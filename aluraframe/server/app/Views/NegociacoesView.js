 class NegociacaoView{

    constructor(elemento){
        this._elemento = elemento;
    }

    _template(modelo){
        return `    
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
            ${modelo.negociacoes.map((n) =>{
               return `
               <tr>
                    <td>${DateHelper.dataParaTexto(n.data)}</td>
                    <td>${n.quantidade}</td>
                    <td>${n.valor}</td>
                    <td>${n.volume}</td>
               </tr>
               `
            }).join('')}
        </tbody>
            <td colspan="3"></td>
            <td>${
                modelo.negociacoes.reduce(function(total, n){
                    //reduce recebe um array e retorna 1 resultado
                    return total + n.volume;
            }, 0.0)// total inicializado com 0
        }</td> 
        <tfoot>

        </tfoot>
    </table>
        `;
    }

    update(modelo){
        this._elemento.innerHTML = this._template(modelo);
    }
}

