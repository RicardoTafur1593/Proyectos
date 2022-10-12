/*
    ===== Código de TypeScript =====
*/
function sumar (a:number, b:number): number {
    return a + b;
}

const sumarFlecha = (a:number, b:number): number => {
    return a + b;
}

//recordar que los argumentos opcionales deben ir al final de la función porque la función comienza recorre 
//y para cuando encuentra un argumento opciona
function multiplicador ( numero:number, otroNumero?: number, base:number = 2): number {
    return numero  * base;
}

const resultado = multiplicador (5, 0, 10);

console.log(resultado);


//void hace que la funcion no devuelva nada

interface personajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar( personaje:personajeLOR , curarX:number ): void {
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: personajeLOR = {
    nombre: 'strider',
    pv: 50,
    mostrarHp (){
        console.log('puntos de vida: ', this.pv);
    }
}

curar(nuevoPersonaje,20);
nuevoPersonaje.mostrarHp();