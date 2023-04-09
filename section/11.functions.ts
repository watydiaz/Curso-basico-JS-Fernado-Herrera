//Funciones: conujto de lineas de codigo que realizan una tarea especifica y pueden retornar algo, se ppueden reutilizar.
// function saludar (nombre){
    // console.log('Hola, ',nombre);
// }

//llamar la funcion se hace de esta manera saludar ();

//Cuando las fucniones estan dentro de un objeto, a estas se le llaman Metodos.


export function greet( name: string = 'mundo' ){
    console.log('Hola ', name);
}


let name = 'juan';
greet(name);