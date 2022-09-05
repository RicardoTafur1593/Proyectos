/* Tipos de variables
string String()
number Number()
boolean Boolean()
underfined
symbol Symbol()
null
BigInt()*/

console.log(Number(200).toString());
console.log(parseInt(40.6));

//Type coerción
console.log(10+"5");
console.log ("10"==10);

//boleanos o boolean solo se le puede asiganar true o false
//las condiciones y ciclos usan boleanos
//underfined, Nan, null, -0, 0,"",false ....>todos son evaluados como false
let resultado = Boolean (1);
console.log(resultado);

/*valores de comparación-----> 
== igual
=== estrictamente igual

!= desigualdad
!== desigualdad estricta

x > y mayor que
x < y menor que

>= mayor igual que
<= menos igual que */
let edad=24;
let resultado_final = edad>18;
console.log(resultado_final);

//Operadores lógicos
/*
&& operador and
|| operador or
!  operador de negación o NOT
?? operador nullish coalescing // funsión de nulos o unión nulosa
*/

//if, else, else if
if(x=0){
    conosole.log(x);
}else{
    console.log(x^2);
}


let calificación=9;
if(calificación==10){
    console.log("excelente");
}else if(calificación>7){
    console.log("Muy bien");
}else if(calificación>5){
    console.log("Puedes mejorar");
}else{
    conosole.log("Reprobado");
}

//ciclos 
//imprimir numeros del 1 al 10
/*FOR (i=i+1----->i++)
    1.Instrucciones inicial
    2.Condición
    3.Instrucción despupes de cada iteración
*/
for(let i=1;i<=10;i=i+1){
    console.log(i);
}
//break
for(let i=1;i<=10;i=i+1){
    console.log(i);
    if(i==5){break;
    }
}
//continue
for(let i=1;i<=10;i=i+1){
    console.log(i);
    if(i%2!=0){continue;
    }
    console.log("Es par");
}

//WHILE --- primero la condición luego la iteración
let i=1
while(i<10){
    console.log(i);
    i++;
}

//DO WHILE --- primero la iteración luego la condición
do{
    console.log("ejecución");
}while(prompt());

//undefined es el estado por defecto de una variable declarada 
//null, la variable declarada null tiene un valor por lo tanto es un objeto
//NaN, representa not and number

//Declaración de funcion
function saludar(){
    console.log("hola");
}
//se llama a funcion:
saludar();

function cuadrado(numero){
    return numero*numero;
}
let cuadrado_de_dos = cuadrado(2);
console.log(cuadrado_de_dos);

//Expresión de función
//let func=function(){}

//Declaración de funciones
/*Existe los siguientes alcances:
    Alcance global: las variables declaradas aca esta disponibles en todo el codigo
    Alcance local: cada función en javascript crea su alcance local y estos se dividen en:
        Alcance de función: var se aloja en toda la función sin importar en que parte de la función este definida
        Alcance de bloque: let y const se alojan en bloque mas proximo si esta dentro de un if solo tendra alcance para este
*/  
//const se usa para declarar un valor que no va cambiarse
//var se usa para declarar una variable que se puede usar en toda la función 
//let se usa para declarar una variable que solo se puede usar dentro bloque 

//arguments devuelve todos los valores obtenidos de los argumentos de la funcion
function sumaTodos(){
    console.log(arguments);
}
sumaTodos(1,2,3,4);

//para sumar todos los argumentos de la anterior función se debe hacer:
function sumaTodos(){
    let suma=0;
    for(let i=0;i<arguments.length;i++){
        suma += arguments[i];
    }
  console.log(suma);
}
sumaTodos(1,2,3,4);

//un argumento puede ser enviado como valor o como referencia
//valor, se envia una copia del argumento orginal.
let eddad=20;
function modificadores(eddad){
  eddad=25;
}
console.log(eddad);
modificadores(eddad);
console.log(eddad);
//referencia, cuando el parametro apunta a la misma dirección del valor orginal y se modifica
let valor=[20];
function cambios(valor){
    valor[0]=25;
}
console.log(valor);
cambios(valor);
console.log(valor)

//Funciones puras: no produce efectos secundarios
let edades =[20];//arreglos

function modificador(edades){
    let copia=[...edades];//genero una copia
    copia[0]=25;//modifico la copia y no el valor original
    return copia;//para comunicar los cambios con el exterior es preferible 
}
console.log(edades);
modificador(edades);
console.log(edades);

/* First class object
debe ser posible retornarlo-------->return 2;
debe ser posible asignarlo a una variable-------->let number=2;
debe ser posible enviarlo como argumento-------->hola (2);
*/

//ARREGLOS
//el elemento arreglo.push agrega el dato al final del arreglo
//el elemento arreglo.unshift agrega el dato al comienzo del arreglo
//el elemento arreglo.pop quita el dato al final del arreglo
//el elemento arreglo.shift quita el dato del comienzo del arreglo

//si guardamos en una variable los elementos de push y unshift, devuelve la longitud del arreglo
//si guardamos en una variable los elementos de pop y shift, devuelve los valores correspodientes que han sido quitado

//se recorre un arreglo con un ciclo for
let arreglo=[1,2,3,4]
for(let i=0;i<arreglo.length;i++){
    console.log(arreglo[i]);
}

//operaciones forEach, map, reduce, filter y find todos estos son nuevos elementos para los arreglos.
//foreach es una alternativa de recorrer un arreglo sin usar un ciclo for
//agregando otra variable(indice) a la funcion te devuelve la posición de cada elemento del arreglo
//agregando otra variable(arreglo) mas a la funcion te devuelve el arreglo total
let lenguajes=["ruby","php","javascript","python"];
lenguajes.forEach(function(probando,indice,arreglo){
    console.log(probando,indice,arreglo);
});

//map, genera un nuevo arreglo a partir de utilizar el arreglo original como base
//forma basica sin usar map
let numeros=[2,3,5,1,34];
let cuadrados=[];
for (let i=0; i<numeros.length;i++){
    cuadrados[i]=cuadrados[i]*cuadrados[i];
}
console.log(cuadrados);
//usando map, recoradar que map no elimina el arreglo original
let cuadrados=numeros.map(function(nuevo_numero){
    return nuevo_numero*nuevo_numero;
})
console.log(cuadrados);

//filter,es para filtrar un valor del arreglo
//return true, devuelve todos los valores que coinciden con la condición
//return false, devuelve el arreglo vacio
//acondiciación se muestra para encontrar y mostrar los valores pares dentro de un arreglo
let matriz=[1,2,3,4,5,6,7,8];
let nuevo=matriz.filter(function(numero){
    return numero%2===0;
})
console.log(nuevo);

//reduce, es un acumulador del arreglo
let matriz2=[1,2,3,4,5];
matriz2.reduce(function(acumulador,elemento){
    console.log(acumulador);
    return 1;
},1)
//retornar la suma 
let suma=matriz2.reduce(function(acc,numero){
    return acc+numero;
},0)
console.log(suma);

//METODOS DE BUSQUEDA en un arreglo
//indexOf---> ==== y devuelve la posición del elemento
arreglo.indexOf("ruby");
//includes---> ==== y devuelve un true o false si encuentra el elementro 
//includes---> acepta un parametro de inicio de busqueda dentro del arreglo
arreglo.includes("ruby",1);
//find---> Retorna el elemento buscado
//findIndex---> retorna la posición del elemento buscado
//some---> retorna true o false si encontro el elemento
let respuesta=arreglo.find(function(elemento,posicion,arreglo){
    return elementro==="ruby";
})
console.log(respuesta);

//ARREGLOS: sintaxis de expanción y contracción
//Spread usa el operador (...)
//Spread expande a los arreglos, cambiando su forma de imprimirlos
let nuevo_arreglo=[1,2,3,4,5];
console.log(...nuevo_arreglo);
//Spread cambia la forma de imprimir una cadena, imprimiendo cada elemento que forma la cadena
let nombre="Ricardo"
console.log(...nombre);
//Rest parameters usa el operador (...)
//Rest parameters contrae todo en un arreglo nuevo
function demo(...arr){
    console.log(arr);
}
demo(10,2);

//JavaScript object notation === JSON
let curso={
    titulo:"Curso profesional de JS",
    formato:"video",
    bloques:["Introducción","funciones"],
    incribir:function(){console.log("inscrito")}
}
console.log(curso.titulo);
console.log(curso["titulo"]);
curso.incribir()
console.log(curso.titulo="curso de ruby");
curso["incribir"]=function(){console.log("incribir_v2")};
curso.incribir();

//spread operation (...) se puede generar copias del objeto
//ademas de generar la copia se le puede agregar propiedades al objeto
//ademas te permite combinar objetos y cambiar alguna de sus propiedades
let user={
    edad:20,
    nombre:"ricardo",
}
let admin = {...user,permisos:true};
console.log(admin);
//con object.assign te permite hacer lo mismo que el spread
let user2={
    edad:20,
    nombre:"richy",
}
let esquemaPermisos={nivel:2}
let copia=Object.assign({},user2);
//let copia=Object.assign(user2,{permiso:true});
//let copia=Object.assign(user2,esquemaPermisos);
console.log(copia);

//Funciones constructoras
// las funciones constructoras sirven para ejecutarse como prioridad dentro de un objeto o clase
// la palabra reservada new sirve para llamar y crear un nuevo objeto en una clase ya existente
// la palabra reservada this hacer referencia por si sola a el objeto windonws
// existen dos formas de ejecución de una función, inmediatamente o variadad. indiatamente mediante la palbra aplly, y variada la palabra 