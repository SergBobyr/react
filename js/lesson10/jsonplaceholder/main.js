// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

fetch('http://jsonplaceholder.typicode.com/users')
.then(value => value.json()).
then(users=>{
    for (const user of users) {


let ul = document.createElement("ul");
let li = document.createElement("li");
li.innerText = `${user.id} ${user.name}`;
ul.append(li);
document.body.appendChild(ul);
let a = document.createElement('a')
        a.innerText = 'link'
        ul.append(a)
        a.href='user-details.html?id='+user.id

    }})
