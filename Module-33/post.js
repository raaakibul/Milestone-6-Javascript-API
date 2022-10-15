function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(data=> displayPost(data))
}
loadPosts()

function displayPost(posts){
    const postContainer = document.getElementById('post_container');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML =`
        <p>${post.userId}</p>
        <h3>${post.title}</h3>
        <p>${post.body}</P>
        <p>${post.id}</p>
        `
        postContainer.appendChild(div);
        console.log(post);
    }
}

function addPost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
            title:'My new post',
            body:'This is my posts',
            userId:1
        }),
        headers:{
            'content-type':'application/json; charset=UTF-8'
        }
    })
        .then(res=>res.json())
        .then(data=>console.log(data))
}
