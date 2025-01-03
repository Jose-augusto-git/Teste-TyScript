const returnValue = <T>(value: T): T => value 

const message = returnValue<string>('Hello World')
const count = returnValue<number>(5)

function getFirstValueFromArray<Type>(array: Type[]){
    return array[0]
}

const getFirstValueFromStringArray = getFirstValueFromArray<string>(['John', 'Doe', 'Jane'])
const getFirstValueFromNumberArray = getFirstValueFromArray<number>([1, 2, 3])

//Promises
const returnPromise = async(): Promise<number> => {
    return 5
}

// Classes
class GenericNumber<T>{
    zeroValue: T
    sum: (x: T, y: T) => T
    constructor(zeroValue: T, sum: (x: T, y: T) => T){
        this.zeroValue = zeroValue
        this.sum = sum
    }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y:number) =>{
    return x + y;
})