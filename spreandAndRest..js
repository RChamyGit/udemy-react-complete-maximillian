

// Spread é usado para splitar elementos de array ou propriedades de objetos

const newArray = [...oldArray,1,2]

const newObject = {...person, newProp:5 }

 

// rest usado para combinar uma lista de argumenots de funcao em um array 


function sortArgs(...args) {
    return args.sort()
}


const numbers = [1,2,3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);
// 1,2,3,4

const newNumbers2 = [numbers, 4]

// [1,2,3],4

//spread
const person = {
    name: 'max'
};

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson);



//rest

const filter =(...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1,2,3));


