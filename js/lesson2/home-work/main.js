//1 - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
    let arr=[];
arr[0]='lorem';
console.log(arr[0]);
arr[1]=15;
console.log(arr[1]);
arr[2]= false;
console.log(arr[2]);
arr[3]=true;
console.log(arr[3]);
arr[4]=25;
console.log(arr[4]);
arr[5]=144;
console.log(arr[5]);
arr[6]='string';
console.log(arr[6]);
arr[0]='array';


//2 - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book_one={
    title: 'peace' ,
    pageCount: 169,
    genre: 'art',
}
let book_two={
    title: 'world' ,
    pageCount: 200,
    genre: 'fantasy',
}
let book_three={
    title: 'food' ,
    pageCount: 19,
    genre: 'kitchen',
}
// 3- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book_one1={
    title: 'peace' ,
    pageCount: 169,
    genre: 'art',
    authors: [
        {name: 'taras', age: 70,}
    ]
}
let book_two2={
    title: 'world' ,
    pageCount: 200,
    genre: 'fantasy',
    authors: [{name: 'greg', age: 80,}
    ]
}
let book_three3={
    title: 'food' ,
    pageCount: 19,
    genre: 'kitchen',
    authors: [
         {name: 'lesya', age: 60,}
    ]
}

//4 - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arr1 =[
    {name: 'serik',
    username: 'username',
    password: 'pasword'},
    {name: 'sveta',
    username: 'svetacoll',
    password: 'pasword1'},
    {name: 'petya',
    username: 'petyasuper',
    password: 'pasword2'},
    {name: 'vasya',
    username: 'vasyacool',
    password: 'pasword3'},
    {name: 'katya',
    username: 'katyasuper',
    password: 'pasword4'},
]
console.log(arr1[0].password);
console.log(arr1[1].password);
console.log(arr1[2].password);
console.log(arr1[3]['password']);
console.log(arr1[4].password);