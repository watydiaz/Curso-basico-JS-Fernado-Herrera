//Se realiza la importacion 
import { addTwoNumbers} from '../helpers/math-helpers'
import { substractTwonNumber} from '../helpers/math-helpers'
import { timesTwoNumbers} from '../helpers/math-helpers'
import { divideTwoNumers} from '../helpers/math-helpers'

let num1 = 10;
let num2 = 20;


let total1: number  = addTwoNumbers(num1,num2);
// let total2: number  = substractTwonNumber(30,20);
// let total3: number  = timesTwoNumbers(30,20);
// let total4: number  = divideTwoNumers(30,20);

console.log('Add: ' + total1);
// console.log('Substract: ' + total);
// console.log('Times: ' + total);
// console.log('Divide' + total);