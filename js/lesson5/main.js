// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//  let minNumber =(a, b, c)=>{if(a>b && a>c){console.log(a)} else if(a<b && b>c){console.log(b)}
// else if(c>b && a<c){console.log(c)} else {console.log('error')}
// }
// minNumber(1,2, 3)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxNumber =(a, b, c)=>{if(a>b && b<c)
// {console.log(b)} else if(a<b && a<c){console.log(a)}
// else if(c<b && a>c){console.log(c)}
// else {console.log('error')}
// }
// maxNumber(100,24, 35)

// - створити функцію яка повертає найбільше число з масиву
// let returnMaxNum = (arr) => {
//     for (i = 0; i < arr.length; i++) {
//         let val = arr[0];
//         if (arr[i] > val) {
//             val = arr[i];
//             return val;
//         } else {return arr[0]};
//
//     }
// }
//
// mas = [5, 2, 3, 4, 5]
// console.log(returnMaxNum(mas))
// - створити функцію яка повертає найменьше число з масиву
// let minNum = (arr) => {
//     let min = arr[0];
//     for (let item of arr) {
//
//         if (item < min) {
//             min = item
//         }
//     }
//     return min
// }
//  minNum(arr);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sum = (arr)=>{
//     let sum  =0;
//     for (i=0; i<arr.length; i++) {
// sum+=arr[i];
//
//     }console.log(sum);
// }
// mas = [1, 2, 3, 4, 5]
// sum(mas)
//
//
// - Дано натуральное число n. Выведите все числа от 1 до n.

// let nat =(n)=>{ for (i = 0; i <= n; i++){
//     document.write(`<div>${i}</div>`);
// }}
// nat(10)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// let sort = (a, b) => {
//     if (a < b) {
//         for (i = a; i <= b; i++) {
//             document.write(`<div>${i}</div>`);
//         }
//     }
//     else
//         {
//             for (i =a;  i >= b; i--) {
//                 document.write(`<div>${i}</div>`)
//             }
//         }
// }
// sort(10, 5);


//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let foo = (arr, i) => {
//
//         if (arr[i + 1]>=0) {
//             let temp;
//              temp=arr[i];
//             arr[i] = arr[i+1];
//             arr[i + 1] = temp;
//             return arr
//         }
//
// }
// console.log(foo([9,8,0,4], 1))

//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// const arr = [1,0,6,0,3]
// function foo(array) {
//     let newArray=[];
//     let counter = 0;
//     let index = 0;
//     for (let i = 0; i < arr.length; i++) {
//         array[i]?newArray[index++]=array[i]: counter++
//     }
//     const num = newArray.length
//     for (let i = num; i < num+counter; i++) {
//       newArray[i]=0;
//     }
//     return newArray
// }
//
// console.log(foo(arr));

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area(a,b) {return a*b
// }
// console.log(area(4, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function areaCircle(r){return Math.PI*Math.pow(r,2)}
// console.log(areaCircle(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function areaCylindr(h, r) {
//     return 2*Math.PI*r*(h+r)
// }
// console.log(areaCylindr(2,2));

// - створити функцію яка приймає масив та виводить кожен його елемент
// function print(arr) {
//     for (const arrElement of arr) {document.write(`<div>element ${arrElement}</div>`)
//
//     }
// }
// array=[1,2,3,4,5,65]
// print(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function par(text) {
//     document.write(`<p>${text}</p>`)
//     }
//
// console.log(par('Lorem ipsum dolor sit amet.'))

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function bed(text) {
//
// document.write(`<ul><li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li></ul>`)
//
// }
// bed('hi');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function bed(text, num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// bed('hi', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function list(arr) {
//     document.write(`<ul>`)
//     for (let arrElement of arr) {document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
// array =[1,'text', true, false];
// list(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function print(arr) {
//     for (let i = 0; i < arr.length; i++) {
//        document.write(`<div>${arr[i].id} ${arr[i].name} ${arr[i].age}</div>`)
//     }
// }
// array=[
//     {id:2,
// name: 'vasya',
// age:34,},
//     {id:3,
//         name: 'kolya',
//         age:33,},
//     {id:4,
//         name: 'stepan',
//         age:30,},
//
// ]
// print(array)

// - створити функцію яка повертає найменьше число з масиву
// function min(arr){
//     let min=arr[0];
//     for (const arrElement of arr) {
//         if(arrElement<min){min=arrElement
//         }
//     }
//     return min
// }
// let array = [1, 2, 3, -4]
// console.log(min(array));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sum(arr){
//     let s =0;
//     for (const el of arr) {
//         s+=el
//
//     }
//     return s
// }
// let array = [6, 2, 3, 4]
// console.log(sum(array));