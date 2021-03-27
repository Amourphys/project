"use strict";

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a: 50
};

obj.a = 10;
console.log(obj);

const objec = {
    name: 'John',
    age: 25,
    isMarried: false
};

console.log(objec.name);
//console.log(objec[name]);

let arr = ['plum.png', 'orange.jpg',
 6, 'apple.bmp', {}, []];
console.log(arr[3]);

alert('Hello');

const result = confirm('Areyou here?');
console.log(result);

const answer = +prompt('Вам есть 18?', '18');
console.log(typeof(answer));
console.log(answer + 5);

const answers = [];

answers[0] = prompt('What do you name?', '');
answers[1] = prompt('What is you surname?', '');
answers[2] = prompt('How old are you?', '');

//document.write(answers);
console.log(typeof(answers));