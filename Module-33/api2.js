function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => displayUser(users))
}

function displayUser(users){
    const ul = document.getElementById('userId')
    for(const user of users){
        console.log(user.name);
        const li = document.createElement('li')
        li.innerText = `Name: ${user.name}, Email: ${user.email}`
        ul.appendChild(li)
    }

}


function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPost(data))
}

function displayPost(data){
    const ul = document.getElementById('userPost')
    for(const post of data){
        console.log(post);
        const li = document.createElement('li')
        li.innerText = `Post ${post.body}`
        ul.appendChild(li)
    }
}