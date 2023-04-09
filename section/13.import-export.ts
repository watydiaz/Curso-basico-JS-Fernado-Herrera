//Se realiza la importacion 
import { addTwoNumbers} from '../helpers/math-helpers'
import { substractTwonNumber} from '../helpers/math-helpers'
import { timesTwoNumbers} from '../helpers/math-helpers'
import { divideTwoNumers} from '../helpers/math-helpers'

let num1 = 10;
let num2 = 20;

let total1: number  = addTwoNumbers(num1,num2);
let total2: number  = substractTwonNumber(num1,num2);
let total3: number  = timesTwoNumbers(num1,num2);
let total4: number  = divideTwoNumers(num1,num2);

console.log('Add: ' + total1);
console.log('Substract: ' + total2);
console.log('Times: ' + total3);
console.log('Divide: ' + total4);