/*make a function that take two arguments
students_marks and total_marks
calculate its grade and percentage */ 
let students_marks
let Calculator = function (students_marks, total_marks) {
    percent = (students_marks/total_marks) * 100
    let Grade = ''
    if (percent >= 90) {
        Grade = 'A'
    }   
        else if (percent >= 80) {
            Grade = 'B'
    }
        else if (percent >= 70){
            Grade = 'C'
    }
        else if (percent >= 60){
            Grade = 'D'
}
        else if (percent >= 50){
            Grade = 'E'
}
    return `You have scored grade ${Grade} with ${percent}% marks`
}
let Result_card = Calculator(81, 100)
console.log(Result_card);
