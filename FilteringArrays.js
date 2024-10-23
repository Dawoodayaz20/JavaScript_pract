const notes = [{
    title : 'My next trip',
    body : 'I would like to go to a Canada'
}, {
    title : 'My second trip',
    body : 'I would like to go to Australia'
}, {
    title : 'Exercise',
    body : 'Push ups, Pull ups, Eating'
}]

const findNotes = function (notes, query) {
   return notes.filter(function (note, index) {
        const isTitleMatch = note.title.includes(query)
        const isBodyMatch = note.body.includes(query)
        return isTitleMatch || isBodyMatch 
    })
}

console.log(findNotes(notes, 'trip')) 