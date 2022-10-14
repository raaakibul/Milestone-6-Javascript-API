// console.log("api connected ");

// function loadData(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json.userId))
// }

// function loadData(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//      .then(response => response.json())
//      .then(data =>console.log(data))

// }


function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
         .then(response => response.json())
         .then(data =>console.log(data))
}

 

function loadTitle(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
         .then(response=>response.json())
         .then(title =>console.log(title.title))
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => displayUser(users))
}

function displayUser(users){
    const ul = document.getElementById('userId');
    for(const user of users){
        console.log(user);
        const li = document.createElement('li');
        li.innerText = `name:${user.name}, email:${user.email}` ;
        ul.appendChild(li);

    }
}

function post(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(post =>console.log(post))
}
