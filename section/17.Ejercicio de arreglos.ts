/* 
Mediante un ciclo for quiero mostran en pantalla el nombre de los empeados y el salarios correspondiente
*/
 export let employees: string [] = ['Daniel','Benjamin','Santiago'];
 export let salaries: number [] = [1500, 2400, 3200];


 for (let i = 0; i<salaries.length;i++){
    let employee = employees[i];
    let salary = salaries[i];
    console.log('El empleado '+employees[i]+' tiene un salario de '+salaries[i]+' al mes.')
 }






