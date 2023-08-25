function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}


function displayPost(posts){
    ul = document.getElementById('post-item');
    for(const post of posts ){
         const li = document.createElement('li');
         li.innerText = post.title;
         ul.appendChild(li);
    }
}