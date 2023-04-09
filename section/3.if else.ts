console.log('inicio de Programa');
//Estructuras de control
//IF
export let isTired: boolean = true;

// if (isTired) {
//     console.log('Tomar Cafe');
// }else{
//     console.log('Si no esta cansado, tomar agua.')
// }


//Se debe procupar no anidar If/else.
let grade: number = 90;

if (grade >= 60) {
    console.log('El alumno aprueba la clase')
} else if(grade > 50) {
    console.log('Estudie mas')
} else {
    console.log('El alumno no apruebo la clase');
}

console.log('Fin de Programa');
//TRatar de usar else if