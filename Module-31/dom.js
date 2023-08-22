document.getElementById('add-border').addEventListener('click', function(){
    // console.log("add border");
    const borderContainer = document.getElementById('friend-container');
    borderContainer.style.border = '3px solid yellow';
})

// function addBackgroundColor(){
//     const friends = document.getElementsByClassName('friend');
// for(const friend of friends){
//     friend.style.backgroundColor = 'lightblue';
// }
// }

document.getElementById('background-color').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue';
    }
})

document.getElementById('add-friend').addEventListener('click', function(){
    const friendContainer = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = ` 
            <h3 class="friend-name"> new friend added </h3>
            <p>Lorem ipsum dolor sit amet.</p>
    `    
    friendContainer.appendChild(friendDiv);
})