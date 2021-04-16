const number = 1;
const num2 = number ; //cria uma copia de number


console.log(num2);


const person = {
    name: 'Max'
};

const secondPerson = person; // é na vdd uma referência da memória da const person


const secondPerson = {
    ...person //é uma copia real
}



person.name = 'Manu';  //

console.log(secondPerson);