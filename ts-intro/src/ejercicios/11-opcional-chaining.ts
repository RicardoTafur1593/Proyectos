/*
    ===== Código de TypeScript =====
*/
interface Pasajero {
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'melisa',
    hijos: ['natalia', 'grabriel']
}

function imprimirHijos (pasajero: Pasajero): void{
    const cuantosHijos = pasajero.hijos?.length;
    console.log ( cuantosHijos );
}

imprimirHijos (pasajero1);