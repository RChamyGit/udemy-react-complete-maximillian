import person from "./importsAndExports/person";


//há diferenças grandes entre Javascript classico
// e next generation

class Person {
    name = 'Max';
    call = () => {
        // code
    };
}

class Human {
    // constructor() { 
    //     // ES6
    //     this.gender = 'male';
    // }
    gender = 'male';
    printGender = () => {
        console.log(this.gender);
    }

}


class Person extends Human{
    constructor(){
        // super(); ES6
        gender = 'female';
        name = 'Max';
    }

    printMyName=()=>{
        console.log(this.name);
    }
}


const myPerson = new Person()
myPerson.call()


person.printMyName();
console.log(myPerson.name)