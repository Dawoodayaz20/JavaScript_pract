const todos = [{
    text : 'Order Cat food',
    completed: true
},{
    text : 'Do Exercise',
    completed: false
},{
    text : 'Buy Grocery',
    completed: true
},{
    text : 'Practice Coding',
    completed: false
},{
    text : 'Wake Up Early',
    completed : false
},{
    text : 'Learn about the Frameworks',
    completed : false
}] 

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = function (todo) {
        return todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
    }
    console.log(filteredNotes)
}

renderNotes(notes, filters)

document.querySelector('#create-todo').addEventListener('click', function(e){
    e.target.textContent = 'The button was clicked'
}) 

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

document.querySelector('#remove-todo').addEventListener('click', function() {
    document.querySelectorAll('.todo').forEach(function(note){
        note.remove()
    })
})

document.querySelector('#search').addEventListener('input', function(e){
    console.log(e.target.value)
})
