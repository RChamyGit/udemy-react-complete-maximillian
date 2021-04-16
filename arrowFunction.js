function myFunc(name){
    console.log(name);
    // vintage function
}

printMyName('Max');

const myFunctArrow = (name) => {
    console.log(name);
    // arrow function
    // resolve problema de this
    // contexto nao muda
}

const printMyName = (name, age) => {
    console.log(name,age);
}

// alternativa

const multiply = number => number * 2 ;

console.log(multiply(2));