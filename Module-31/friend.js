document.getElementById('add-border').addEventListener('click',
function(){
    const container = document.getElementById('friend-container')
    container.style.border = '3px solid yellow'
    // container.style.margin = '18px'

})
// another way 
// function addBackground(){
//     const friends = document.getElementsByClassName('friend')
//     for(const friend of friends){
//         friend.style.backgroundColor='red'
//     }

// }

document.getElementById('add-background').addEventListener('click', 
function(){
    const friends = document.getElementsByClassName('friend')

    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue'
    }
})


document.getElementById('add-friend').addEventListener('click', 
function(){
    const container = document.getElementById('friend-container')
    const friendDiv = document.createElement('div')
    friendDiv.classList.add('friend')
    friendDiv.innerHTML = `
           <h3 class="friend-name">New friend</h3>
           <p>Reprehenderit numquam assumenda voluptatem magni!</p>
           `
           container.appendChild(friendDiv)
})