"use strict";

console.log('arr' + '- object');
console.log(4 + '- object');
//console.log(4 + +'5');

let incr = 10,
    decr = 10;

//incr++;
//decr--;

console.log(incr++);// постфиксная форма сначала возвращает первоначальное значение и прибавляет к нему
console.log(decr--);
console.log(++incr);// префиксная форма сначала прибавляет
console.log(--decr);

console.log(5%2); // остаток от деления

console.log(2*4 == '8'); // true
console.log(2*4 ==='8'); // false

const isChecked = true,
      isClose = true;

console.log(isChecked && isClose);// логическое и
console.log(isChecked || isClose);// логическое или
console.log(isChecked || !isClose);// отрицание