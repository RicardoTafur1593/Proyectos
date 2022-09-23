//crear una funcion asincronata
//la funcion asincrona siempre devuelve una promesa
//async reconstruye las funciones sincronas para que automaticamente te devuelva una promesa ya resuelta
//async en funciones asincronas solo devuelve una promesa, en este caso no esta resuelta
//async con await
//await hace que el objeto new de la promesa se trata como una funcion normal
async function showGitHubInfo(){
    let response = await fetch('https://api.github.com/RicardoTafur1593/Proyectos');
    let Proyectos = await response.json();
    console.log(Proyectos);
}

showGitHubInfo();

//manejo de errores en promesas con un bloque try
(async function(){
    try{
        let promesa=await Promise.reject("Error");
        let promesa2=await Promise.reject("Error");
    }
    catch(err){
        console.log(err);
    }
})()