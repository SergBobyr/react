// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// function lengthStr(str) {console.log(str.length)
// }
// lengthStr('hello world');
// lengthStr('lorem ipsum');
// lengthStr('javascript is cool');

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// function up(str) {
//     return str.toUpperCase()
// }
// console.log(up('hello world'));
// console.log(up('lorem ipsum'));
// console.log(up('javascript is cool'))

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// function low(str) {
//     return str.toLowerCase()
// }
// console.log(low('HELLO WORLD'));
// console.log(low('LOREM IPSUM'));
// console.log(low('JAVASCRIPT IS COOL'))

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.length);
// function clear (dirty){return str.trim();
// }
// console.log(clear(str));


//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні'
// function stringToarray(str)
// {return str.split(' ')};
// let arr = stringToarray(str);
// console.log(arr);


//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let mas = [10,8,-7,55,987,-1011,0,1050,0]
// let map = mas.map(function (a){return a.toString()})
// console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11, 21, 3];
//
//
// let sortNums = (arr, direction) => {
//     if (direction === 'ascending') {
//         arr.sort((a, b) => a - b)
//     } else if (direction === 'descending') {
//         arr.sort((a, b) => b - a)
//     }
//     return arr
// }
// console.log(sortNums(nums, 'ascending')); // [3,11,21]
// console.log(sortNums(nums, 'descending')); // [21,11,3]

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let sort = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration)
// console.log(sort);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let sort=coursesAndDurationArray.filter(item=>item.monthDuration>5)
// console.log(sort);

// описати колоду карт
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let suits = [
    {cardSuit: 'spade', color: 'red'},
    {cardSuit: 'diamond', color: 'red'},
    {cardSuit: 'heart', color: 'black'},
    {cardSuit: 'clubs', color: 'black'},
]
let cardNames = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king', 'joker']
let deck = [];
for (let suit of suits) {
    for (const cardName of cardNames) {
        const card = {
            cardSuit: suit.cardSuit,
            value: cardName,
            color: suit.color
        }
        deck.push(card)
    }
}
// console.log(deck);

// - знайти піковий туз
// console.log(deck.filter(item => item.cardSuit === 'spade' && item.value === 'ace'));

// - всі шістки
// console.log(deck.filter(item => item.value === 6));

// - всі червоні карти
// console.log(deck.filter(item => item.color === 'red'));

// - всі буби
// console.log(deck.filter(item => item.cardSuit === 'diamond'));

// - всі трефи від 9 та більше
// console.log(deck.filter(item => item.cardSuit === 'clubs'&& (item.value>=9||typeof item.value=== 'string')));

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = deck.reduce((acc, currentValue) => {
    if (currentValue.cardSuit === 'spade') {
        acc.spades.push(currentValue)
    } else if (currentValue.cardSuit === 'diamond') {
        acc.diamonds.push(currentValue)
    }
    else if (currentValue.cardSuit === 'heart') {
        acc.hearts.push(currentValue)
    }
    else if (currentValue.cardSuit === 'clubs') {
        acc.clubs.push(currentValue)
    }

    return acc},
        {spades: [],
            diamonds: [],
            hearts: [],
            clubs: []})
console.log(reduce);