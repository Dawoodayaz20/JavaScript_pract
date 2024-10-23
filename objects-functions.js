/*let myBook = {
    title : 'Programming Techniques',
    author: 'Hewlett Packard',
    publisher: 'Priting Press'
}

let anotherBook = {
    title : 'Physics',
    author: 'Einstein',
    publisher: 'Priting Press'
}

let bookInfo = function (Book) {
    
    console.log(`${Book.title} of ${Book.author} published by ${Book.publisher}`)
}

bookInfo(myBook)
bookInfo(anotherBook)*/

let tempConverter = function (temp){
    Celsius =  (temp - 32) * 5/9
    Kelvin = ((temp - 32) * 5/9 ) + 273
    return `The temperature in Celsius is ${Celsius} degree and in Kelvin is ${Kelvin} degree.`
}

let fahConverter = tempConverter(180)
console.log(fahConverter);
