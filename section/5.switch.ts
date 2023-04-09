console.log('inicio de Programa');

 export let weekDay = -4;//lunes= 1,marte=2 miercoles=3

if(weekDay<=0){
 throw new console.error('Dia de la semana no permitido');
}

switch (weekDay) {
    case 1:
        console.log('Lunes');
        break;  
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
    break;
}

console.log('Fin de Programa');
//TRatar de usar else if