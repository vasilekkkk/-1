document.addEventListener('DOMContentLoaded', function () {
// задача 1 //
let str = 'abcde';
alert(str[0]);
lert(str[1]);
alert(str[4]);
    
// задача 2 //
let a = parseInt(prompt("Введите фёрст число:"));
let b = parseInt(prompt("Введите секонд число:"));
console.log(a > 0 || b > 0);
        
// задача 3 //
let age = parseInt(prompt("Введите ваш возраст:"));
if (age >= 18) {
    console.log("Совершеннолетний-дедус");
} else {
    console.log("Несовершеннолетний-бэйбик");
}});