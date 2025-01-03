//Tipos Basicos
let ages: number = 20;
const firstName: string = 'John';
const isValid: boolean = true;
let idk: any = 5;



idk = '5';
idk = true;

const ids: number[] = [1, 2, 3, 4];
const booleans: boolean[] = [true, false, true];
const names: string[] = ['John', 'Doe', 'Jane'];

//Tuplas
const person: [string, number] = ['John', 20];

//Lista de Tuplas
const people: [string, number][] = [
    ['John', 20],
    ['Doe', 30],
    ['Jane', 25]
]

//Interseccion(Interseção)
const productId: string | number = 5;

//Enum
enum Direction{
    up = 1,
    Down = 2,
}

const Directions: Direction = Direction.up;

//Type Assertions
const produtName: any = 'John';

// let productId2 = produtName as string;
let productId2 = <string>produtName;





console.log(Directions);