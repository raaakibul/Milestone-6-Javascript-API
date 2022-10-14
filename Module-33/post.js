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

