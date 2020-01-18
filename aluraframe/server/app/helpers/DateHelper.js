class DateHelper{

    constructor(){
        throw new Error('Esta Classe não pode ser estanciada!');
    }

   static textoParaData(texto){
        //data formato: 2016-11-12
        // ... -> pega cada item do array e coloca em cada parametro do construtor Date
        // new Date - o mes que é segunda posição eh de 0 a 11
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');
            
        let data = new Date(...
            texto
            .split('-')
            .map((item, indice) =>{
                if(indice == 1){
                   return (item - 1); //mes eh 0 a 11
                }else{
                    return item;
                }
              
            }));

            return data;
    }

    static dataParaTexto(data){             
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
}