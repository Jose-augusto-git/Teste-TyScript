// Type
type Order = {
    productId: string,
    price: number,
}

type User = { 
    FirstName: string,
    age: number,
    email: string,
    password?: string,
    orders: Order[],
    register(): string;
}

const user: User = {
    FirstName: 'John',
    age: 20,
    email: 'email@email.com',
    password: '123456',
    orders: [{productId: '1', price: 50}],
    register(){
        return "a"
    }
}

user.password

const printLog = (message: string) => {}

printLog(user.password!)

//Unions
type Author = {
    books: string[],
}

const author: Author & User = {
    age: 20,
    books: ['Book 1', 'Book 2'],
    email: 'emael@email.com',
    FirstName: 'John',
    orders:[],
    register(){
        return "a"
    }
}

//Interfaces

interface UserInterface{
    firstName: string,
    email: string,
}

const emailUser: UserInterface = {
    email: 'email@email.com',
    firstName: 'John',
}

interface AuthorInterface{
    books: string[],
}

const newAuthor: AuthorInterface & UserInterface = {
    email: 'email@email.com',
    firstName: 'John',
    books: ['Book 1', 'Book 2'],
}

type Grade = number | string;
const grade: Grade = 1;

