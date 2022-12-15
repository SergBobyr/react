// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname , email, phone){
//     this.id=id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone
// }
// let user1 = new User(2,'kolya', 'skovoroda', 'i@ukr.net',123456)
// let user2 = new User(1,'olya', 'roda', 'a@ukr.net',223456)
// let user3 = new User(4,'sanja', 'zgoda', 'b@ukr.net',323456)
// let user4 = new User(3,'spetja', 'skovo', 'c@ukr.net',423456)
// let arr = [];
// arr.push(user1,user2,user3,user4)
// console.log(arr);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = arr.filter(function(user){return user.id%2===0 })
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = arr.sort(function (item1, item2){return item1.id-item2.id})
// console.log(sort);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class Client {
//     constructor(id, name, surname, email, phone,order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//             }
//         }
//
// let client1 = new Client(1,'ivan','ivanov', 'i@ukr.net',123456, ['sugar','fresh','fish','meat'])
// let client2 = new Client(1,'ivan','ivanov', 'k@ukr.net',123456, ['fresh','fish','meat'])
// let client3 = new Client(1,'ivan','ivanov', 'l@ukr.net',123456, ['sugar','fresh','fish','meat','bread'])
// let client4 = new Client(1,'ivan','ivanov', 'm@ukr.net',123456, ['sugar','fresh','fish','meat','milk','bread'])
// let arr = [];
// arr.push(client1, client2, client3, client4)
// console.log(arr.sort((a, b) => a.order.length - b.order.length));

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function car(model, product, yearProduct, maxSpeed, engine){
//     this.model=model;
//     this.product=product;
//     this.yearProduct=yearProduct;
//     this.maxSpeed=maxSpeed;
//     this.engine=engine;
//    this.drive =function () {
//        console.log((`їдемо зі швидкістю ${this.maxSpeed} на годину`));}
//     this.info=function () {
//         for (const value in this) { if(typeof this[value] !== 'function'){
//             console.log(`${value} - ${this[value]}`);}
//         }
//     }
//     this.increaseMaxSpeed=function(newSpeed){return this.maxSpeed+=newSpeed};
//    this.addDriver = function(driver){return this.driver = driver}
// }
// let car1=new car('audi','germany', 2010, 220, 2.0)
// console.log(car1.increaseMaxSpeed(20));
// console.log(car1.addDriver('mikola'));

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class car{
//     constructor (model, product, yearProduct, maxSpeed, engine){
//     this.model=model;
//     this.product=product;
//     this.yearProduct=yearProduct;
//     this.maxSpeed=maxSpeed;
//     this.engine=engine;}
//
//     drive() {
//         console.log((`їдемо зі швидкістю ${this.maxSpeed} на годину`));}
//     info() {
//         for (const value in this) { if(typeof this[value] !== 'function'){
//             console.log(`${value} - ${this[value]}`);}
//         }
//     }
//     increaseMaxSpeed(newSpeed){return this.maxSpeed+=newSpeed};
//     addDriver(driver){return this.driver = driver}
//
// }
// let car1=new car('audi','germany', 2010, 220, 2.0)
// console.log(car1.increaseMaxSpeed(20));
// console.log(car1.addDriver('mikola'));

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella{
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
//
//     name; age; footSize}
//
// let ci1 = new Cinderella('ann',22,35);
// let ci2 = new Cinderella('kate',24,38);
// let ci3 = new Cinderella('olya',20,36);
// let ci4 = new Cinderella('marianna',26,41);
// let ci5 = new Cinderella('lesja',21,37);
// let arr=[];
// arr.push(ci1,ci2,ci3,ci4,ci5)
// // console.log(arr);
//
// class Prince {
//
//     constructor(name, age, prFootSize) {
//         this.name = name;
//         this.age = age;
//         this.prFootSize = prFootSize;
//     }
//
//     }
//  let pr1 = new Prince('kolya',25,41)
//
// let love = (girl,boy)=>{
//     for (const value of girl) {if(value.footSize===boy.prFootSize){ console.log(value.name)}
//
//     }}
// love(arr,pr1)
// let find = arr.find(value => value.footSize===pr1.prFootSize)
// console.log(find);