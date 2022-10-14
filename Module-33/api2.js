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