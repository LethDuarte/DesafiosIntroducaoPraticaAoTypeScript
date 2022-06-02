/*let employee = {};
employee.code = 10;
employee.name = "John";*/

let employee: {code:number, name: string } //ou

let employee1 = {
    code: 10,
    name: 'John'
} 
//ou

interface Employee {
    code: number,
    name: string
}

let funcionario:Employee = {
    code: 10,
    name: 'John'
}