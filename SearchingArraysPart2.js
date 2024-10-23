const notes = [{
    title : 'My next trip',
    body : 'I would like to go to a Canada'
}, {
    title : 'My second trip',
    body : 'I would like to go to Australia'
}, {
    title : 'My third trip',
    body : 'I would like to go to a Switzerland'
}
]

const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note) {
        return note.title === noteTitle
    })
    return notes[index]
}

const note = findNote(notes, 'My second trip')
console.log(note);

// Review: what is happening in the above code
// In the above code we have some objects in an array, if we want to find some particular data stored in it,
// we make a function "findNote" and inside it we make another function "findIndex", 
// findIndex function will check if the noteTitle that we put is equal to the title in the notes array,
// the return value will be the index of the data in the array object, 
// we put that index in the return value of findNote function. 