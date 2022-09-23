/* let request=require('request');

request('https://google.com',function(){
    console.log('termine la peticion');
})

console.log("yo soy depues");
 */

//PROMESAS
/* let request=require('request-promise');

let promesa = request('https://www.google.com')
promesa.then(function(){console.log('termine la peticion')});
promesa.catch(function(err){console.log(err)}); 

console.log('yo sucedo despues'); */
/*
fullfiled (then): 0 completada, significa que la promesa se completo con exito
rejected (catch): 0 rechazada, significa que la promesa no se complemento con exito
pending (finally): 0 pendiente que es el estado de la promesa cuando la operacion no ha terminado, aqui decimos que la promeas no se ha cumplido 
settled (finally): 0 finalizada, cuando la promesa termino ya sea con exito o con algun error
*/

//new object promise
/* let promesas=new promise (function(res,rej){
    res(10);
    rej("algosalio mal");
}); */

//CREAR UNA PROMESA
let request=require('request');

function leerPagina(url){
    return new Promise(function(resolve,reject){
        request (url,function(error,response){
            if(error) return(error);

            resolve(response);

        })
    }) ;
}
//USAR PROMESA
let promesa=leerPagina('https://google.com');
promesa.then(r=>console.log("finalice la promesa")).catch(err=>console.log(err));


