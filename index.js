/*question #1*/
console.log("Hello world");

/*question #2*/
let myName = "your name";

console.log("My name is " + myName)

let yourJob = "learning"
let yourCourse = "JavaScript"
let levelOfLearning = "Full Stack Bootcamp"
let school = "DiaaTech";

console.log("I am " + yourJob + " " + yourCourse + " via " + levelOfLearning + " of " + school )

let person = "I"
let profession = "best developer"
let myStatus = "hard work"

console.log (person + " will become the " + profession + " by " + myStatus)

let doingWhat = "making"
let yourInterest = "commitment"
let yourAction = "code"
let yourDevotion = "consistency"

console.log("I am " + doingWhat +" "+ yourInterest + " to do " + yourAction + " with " + yourDevotion)

/*variables**/

let yourFullName = "Jemal Seid Adnew"
let yourAge = 37
let result = yourFullName.concat(" ", "age: ",yourAge);


console.log(result)

let yourName = "my name"

console.log(yourName)

let num1 = 8
let num2 = 15

let sum = num1 + num2
let multiply = num1 * num2
let minus = num1 - num2
let divide = num2 / num1
console.log(sum)
console.log(multiply)
console.log(minus)
console.log(divide)

/*BMI*/

let weightOfMark = 60 
let heightofMark = 1.75
let weightOfJohn= 70
let heightOfJohn = 2
bmi1 = weightOfMark/Math.pow(heightofMark, 2)
bmi2 = weightOfJohn/Math.pow(heightOfJohn, 2)
let markHigherBMI = Boolean(bmi1 > bmi2)

console.log(bmi1)
console.log(bmi2)
console.log(markHigherBMI)

// if else exercise 
// question #1

if(bmi1 > bmi2) {
    console.log("Mark's BMI is higher than John's")
}else{
    console.log("John's BMI is higher than Mark's BMI")
}

//question #2


if(bmi1 > bmi2) {
    console.log("Mark's BMI" , bmi1 , "is higher than John's BMI ", bmi2)
}else{
    console.log("John's BMI " , bmi2, "is higher than Mark's BMI ", bmi1)
}

/**Question 2.
Part1**/
const ageOfvoter = 15;

if (ageOfvoter > 18) {
   console.log("you are eligible to vote")
}else {
   console.log("you are not eligible to vote")
}




//part two

const studentMark= 49


if(studentMark >=93){
    console.log("Outstanding")
 }else if(studentMark < 93 && studentMark > 80) {
    console.log("Excelent")
 }else if(studentMark < 80 && studentMark >=75) {
    console.log("Good job")
 }else if (studentMark <75 && studentMark >= 50) {
    console.log("Study hard to improve your grades")
 }else{
    console.log("You will need to study the course again to get better results")
 }
 
 //part three

 const age = 8

if(age > 0 && age <2) {
   console.log("baby")
}else if (age > 3 && age < 5) {
   console.log("toddler")
}else if(age >6 && age <12) {
   console.log("Child")
}else if(age >13 && age <18) {
   console.log("teenager")
}else{
   console.log("adult")
}



//part four 

const userNumber = 8

if (userNumber == 0){
   console.log("zero")
}else if (userNumber > 0) {
   console.log("positive number")
}else {
   console.log("negative number")
}




