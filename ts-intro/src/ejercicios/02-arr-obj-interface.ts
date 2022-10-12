/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash','Counter','Healing'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing'],
}

personaje.puebloNatal = 'Pueblo Paleto';

console.table(personaje);