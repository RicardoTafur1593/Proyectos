//MULTIPLES PROMESAS
/* let p1 = new Promise((resolve,rejet)=>setTimeout(resolve,500,"hola mundo"));

let p2 = new Promise((resolve,reject)=>setTimeout(resolve,600,"segundo hola mudno"));

function finalizado(){
    console.log("Todo finalizo");
}

Promise.all([p1,p2]).then(function(resultados){
    console.log(resultados);
    finalizado();   
}); */

//ENCADENAR PROMESAS
function primeraPromesa(){
    return new Promise((resolve,rejet)=>setTimeout(resolve,500,"hola mundo"));
}

function segundaPromea(){
    return new Promise((resolve,reject)=>setTimeout(resolve,600,"segundo hola mudno"));
}

//Forma adecuada
primeraPromesa().then(segundaPromea).then(function(r){ console.log(r) });

//Forma incorrecta
/* primeraPromesa().then(function(r){
    segundaPromea().then(function(r2){
        console.log(r);
    })
}) */