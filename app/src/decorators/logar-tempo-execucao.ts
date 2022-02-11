export function logarTempoExecucao(emSegundos: boolean =  false){

    return function(
        target: any, 
        propertyKey: string,
        descriptor: PropertyDescriptor

        /* target: se o decorator está em um método estático de uma classe, 
        pode ser uma função construtora.Caso o método não foi estático, ele vai ser o prototype.
        propertyKey: nome do método, nesse caso do tipo string.
        descriptor: referência para o método original.*/

    ) {
        const metodoOriginal = descriptor.value; //referência do método
        descriptor.value = function(...args: any[]){
            let dividor = 1;
            let unidade = 'milisegundos';

            if(emSegundos){
                dividor = 1000;
                unidade = 'segundos'
            }
            
            const t1 = performance.now();
            //chamando método original
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2-t1)/dividor} ${unidade}`);
            retorno
        };

        return descriptor;
    }
}