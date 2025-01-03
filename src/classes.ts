interface IPerson{
    id: number;
    sayMyName(): string;
}


class Person implements IPerson{
    readonly id: number;
    protected name: string;
    private age: number;

    constructor(id: number, name: string, age: number){
        this.id = 1;
        this.name = 'John';
        this.age = 20;
    }

    sayMyName(): string{
        return this.name;
    }
}

//Mesma coisa que a classe a cima
class PersonRefact{
    constructor(
        readonly id: number,
        protected name: string,
        private age: number
    ){}
}

class Employee extends Person{
    constructor(id: number, name: string, age: number){
        super(id, name, age);
    }
    whoAmI(){
        return this.name();
    }
}

const personX = new Person(1, 'John', 20);
