// console.log('start');
// try{console.log()}
// catch (e) {console.error(e)
// } finally {
//     console.log('finally')
// }
// console.log('end');
// function calc(a,b){
//     if(b===0){
//         throw new Error('b is 0')
//     }
//     return a/b
// }
//
// console.log(calc(6, 0));

// let user={
//     name:'vasja',
//     age: 11,
//     foo(){
//         console.log('foo');}
// }
// let{name}=user
// console.log(name);
//
// function fooo({name}){
//     console.log(name);}
//
// fooo({age:33, name:'asd', wilson: true})
// let name = 'vasja';
// let age = 11
// let user={
//     name,
//     age,
//     foo(){
//         console.log('foo');},
// wife:{nama:'anna'}}
//
// let{name: userName, wife:{nama}}=user;
// console.log(nama);
// let numbers = [11,22,33];
// let [a, ,c] = numbers;
// console.log(a,c);
// let user={
//     name:'vasja',
//     age: 11,
//     foo(){
//         console.log('foo');}
// }
// let user2 = user;
// let user3={
//     name:'vasja',
//     age: 11,
//     foo(){
//         console.log('foo');}
// }
//
// console.log(user===user2);

// let user={
//     name:'vasja',
//     age: 11,
//     foo(){
//         console.log('foo');}
// }
// let copyUser = {...user}
// console.log(copyUser);
// console.log(user);
// console.log(copyUser === user);

// let numbers = [11,22,33];
//
// let num = [...numbers];
// num.push(44)
// console.log(num);
// console.log(numbers);

// let user={
//     name:'vasja',
//     age: [11,22,33],
// }
// let as = Object.assign({},user);
// console.log(as.age===user.age);
// console.log(user===as);
//
// function foo(obj){
//     try {console.log(obj.name)}
//     catch (e) {console.log(e)
//
//     }
//     console.log('end');
// }
// foo()
// function div(a,b){
//     if(b===0)
//     {throw new Error('kaput')}
//     return a/b;
//     finally{
//         console.log('ok');}
// }
//
// console.log(div(6, 0));
// let user;
// console.log(user?.name);
// let name = 'vasya';
// let age = 21;
// let user = {
//     name,
//     age,
// }
// console.log(user);
// let user={
//     name: 'petro',
//     age:23,
//     wife:{
//         name:'olya',
//         age:12
//     }
// }
// let {age, name, wife:{name:wName}}=user;
// console.log(age, name, wName);
// function userBuilder(age, name) {
//     let user = {age, name}
//     return {
//         setAge: function (newAge) {
//             if (typeof newAge === 'string') {
//                 throw new Error('kosyak')
//             } else {
//                 user.age = newAge
//             }
//
//         },
//         user: function() {return {...user}}
//     }}
//
//
// let bu = userBuilder(8,'kilo')
// console.log(bu.setAge(100));
// console.log(bu.user());
// let str = 'hello okten'
// // console.log(str[0]);
// let toUp=str.toUpperCase();
// console.log(toUp);
// console.log(toUp.toLowerCase());
// console.log(str.substring(str.indexOf('e'),str.indexOf('n')));
//
// console.log(str.charAt(7));
// let phone = '(067)99-22-33-44'
// // console.log(phone.replaceAll('(','').replaceAll(')','').replaceAll('-',''));
// console.log(phone.replaceAll(/[()-]/g, ''));
// let obj= 'name:"vasya" age:31'
// let one = obj.split(' ')
// let two = one[0]
// let tw=two.split(':');
// console.log(tw[0]);
// let arr = [11,22,33,44];
// let s = arr.reverse();
// console.log(s);
// console.log(arr.includes(22));
// console.log(arr.includes(66));

let str = '   gfgtgf    ';
console.log(str.length);
let s = str.trim();
console.log(s.length);