const notes = [{
    title : 'My Next trip',
    body: 'I would like to go to a trip'
},
{
    title : 'Habbits to work on',
    body : 'Exercise. Eating a bit better'
},
{
    title : 'Office Modification',
    body : 'Get a new seat'
}]

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    console.log(filteredNotes)
}

renderNotes(notes, filters)

document.querySelector('#add_note').addEventListener('click', function(event){
    event.target.textContent = 'The Button was clicked'
})

document.querySelector('#rem_note').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function(e){
    console.log(e.target.value) // If we want to access the value typed in the search box, we have to write
                  // the perimeter(event) and after that we write target.value to access the value user typed in the search box. 
})
