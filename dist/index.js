"use strict";
//Tipos Basicos
let ages = 20;
const firstName = 'John';
const isValid = true;
let idk = 5;
idk = '5';
idk = true;
const ids = [1, 2, 3, 4];
const booleans = [true, false, true];
const names = ['John', 'Doe', 'Jane'];
//Tuplas
const person = ['John', 20];
//Lista de Tuplas
const people = [
    ['John', 20],
    ['Doe', 30],
    ['Jane', 25]
];
//Interseccion(Interseção)
const productId = 5;
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const Directions = Direction.up;
console.log(Directions);
