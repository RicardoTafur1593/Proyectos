/*
    ===== Código de TypeScript =====
*/
interface Reproducir {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproducir = {
    volumen: 90,
    segundo: 36,
    cancion: 'mess',
    detalles:{
        autor: 'ed sheeran',
        anio: 2015,
    }
}

//destructuración de un objeto
const {volumen,segundo,cancion,detalles} = reproductor;
const {autor} = detalles;

console.log('el volumen actual de: ', volumen);
console.log('el segudo actual de: ', segundo);
console.log('la cancion actual de: ', cancion);
console.log('el autor es: ', autor);

//destructuración de un arreglo
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [p1,p2,p3]=dbz;

console.log('Personaje 1: ', p1);
console.log('Personaje 1: ', p2);
console.log('Personaje 1: ', p3);
