//Tablas de multiplicar 

//crear funcion que reciba base y limite para hacer las tablas de multiplicar 

export function printMultiplicationTable(base: number, limit: number = 10) {

    for (let i = 1; i <= limit; i++) {
        console.log(base, 'X', limit, '=', base * limit)
    }
}