/*let greetfunct = function () {
    console.log('Hello User!')
} 

greetfunct()

let CelConverter = function (Fah) {
    let Cel = (Fah - 32) * 5/9
    return Cel
}

console.log(CelConverter(110))

let result = CelConverter()
console.log(CelConverter())
*/
let tip_percent = function (total, tip){
    return  (tip /total) * 100
}

let Result = tip_percent(20, 10)
console.log(Result)