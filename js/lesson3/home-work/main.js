// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 1;
if (x === 0 ){
    console.log('Не вірно')}
else {console.log('Вірно')}
x = 0;
if (x === 0 ){
    console.log('Не вірно')}
else {console.log('Вірно')}
x= -3;
if (x === 0 ){
    console.log('Не вірно')}
else {console.log('Вірно')}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let time=50;
if (time>=0 && time<=15) {console.log('перша чверть')}
else if(time>15 && time<=30) {console.log('друга чверть')}
else if(time>30 && time<=45) {console.log('третя чверть')}
else if(time>45 && time<=60) {console.log('четверта чверть')}
//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day;
switch (day){
    case 1 :
        console.log("Понеділок");
        break;
    case 2 :
        console.log(" Вівторок");
        break;
    case 3 :
        console.log("Середа");
        break;
        case 4 :
        console.log("Четвер");
        break;
    case 5 :
        console.log("П'ятниця");
        break;
    case 6 :
        console.log("Субота");
        break;
    case 7 :
        console.log("Неділя");
        break;
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a=2;
let b=2;
if (a>b) {console.log(a)}
else if(a<b){console.log(b)}
else {console.log(a)}
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let y='df';
if(y ==='' || y === null) {y = 'default';
    console.log(y);
}
else{
    console.log(y);}