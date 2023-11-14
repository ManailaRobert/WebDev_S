console.log("Welcome to signin");

let primaVariabila=10;
primaVariabila =20;

const aDouaVariabila = 10.3456;

const aTreiaVariabila ="acesta este un string";
const aPatraVariabila ='acesta este un string';
const stringInterpolat =`acesta este un string ${aPatraVariabila} `;

const arr1= [];
arr1.push[10];

const obj ={
    name:"Nume",
    "desc":"descriere",
    'year':2023,
    "numeleCursului":"Web Apps"
}
obj.desc="Smth";

obj["year"]="2023-2024"

let arrayNr = [20,30,40,50];
const array = [obj,10,40,30];

console.log(obj);
console.log(arrayNr);
console.log(array);


arrayNr.fill(10, 1,4)
console.log(arrayNr);

arrayNr[0] = 4;
console.log(arrayNr.indexOf(1)); 
// &&(And),||(Or),!(Not),==(equal without type),!=(not equal without type), === (equal with type),!==(equal with type)
//if/else
// if(cond)
// {
// ...
// }else if(cond2)
// {
// ...
// }else{


// for(let i =x; i<y;i++)
// {
//     ...
// }


//for each:
// for(let value of arrayNr){
//    console.log(value);
// }

// while(conditie)
// {
//     ...
// }


// do{
// ...
// }while(conditie)

// find unique values in array
/*
1. Intitializam array
2. initializam un contor array
3. parcurge elementele array-ului
3.1 verific daca elementul exista in contor
3.1.1 pentru fiecare elem din contor
3.1.2 verific daca elementul curent == elem curent din contor
3.1.3 daca sunt egale exista
3.2 daca exista merg la urmatorul element
3.3 daca nu exista il adaug in contor

*/


const mainArray = [1, 2, 3, 3, 3, 4, 5, 7, 2, 1, 1];
const contor = [];
const counter = {};
for (const el of mainArray) {
    // find all unique elements
    let ok = false; 
    for (const cEl of contor) {
        if (el === cEl) {
            ok = true;
            break;
        }
    }

    if (ok === false) {
        contor.push(el);
    }

    // count how many times each unique el appears in array
    if (counter[el]) {
        counter[el] = counter[el] + 1;
    } else {
        counter[el] = 1;
    }
}

console.log(mainArray);
console.log(contor);
console.log(counter);

// function numeleFunctiei(param1, param2, param3) {
//     ...
//     return value;
// }
function greaterThan5(n) {
    return n > 5;
}

function isEven(n) {
    return n % 2 == 0;
}

function filter(arr, conditional) {
    const result = [];
    for (const el of arr) {
        const keepElement = conditional(el);
        if (keepElement) {
            result.push(el);
        }
    }
    return result;
}

const result = filter(arr1, isEven)
console.log(result);

const result2 = filter(result, greaterThan5);
console.log(result2);

const f = isEven;
