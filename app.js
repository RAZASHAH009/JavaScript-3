// Chapter 9

// Q1

// var city = prompt("Enter your city ")
// if(city == "karachi" ){

//     alert("welcome to city of light")}

//     else{
//     alert("no city")
// }

// Q2


// var gender = prompt("Enter Your Gender (M/F) ")

// if(gender == "Male"){
//   alert("Good Morning sir")

// }

// else{
//     alert("Good Morning Mama")
// }


// Q3 
    
// var signal = prompt("Enter Color of traffic signal ")
// if(signal == "red"){
//     alert("Must stop !");
    
// }
// else if(signal == "yellow"){
//     alert("ready to move ")

// }

// else if(signal == "green"){
//     alert("move now")
// } 

// else{
// alert( "no color show")
// }


// Q4
// var fuel = prompt("How much fuel do you have in the tank(in litres)");
// if (fuel < 0.25) {
//   alert("Please refill the fuel in your car");
// } else {
//   alert("You can continue your journey");
// }



// Q5

// Q6
 
// var totalMarks = prompt("Enter your total mask")
// var obtainedMarks = prompt ("Enter your obtained marks")
// var percentage = (obtainedMarks/totalMarks)*100

// document.write("<h1>MarkSheet</h1> <br>")
// document.write("<p>Total mark :</p>" + totalMarks +"<br>")
// document.write("<p>Marks obtained :</p>"+ obtainedMarks + "<br>")
// document.write("<p>percentage :</p>"+ percentage + "% <br>" )

// if (percentage >= 80){
//     document.write("Grade : A+  <br>")
//     document.write("Remarks : Excelent ")
// }
// else if(percentage >=70){
//     document.write("Grade  : A <br>")
//     document.write("Remarks : Good ")

// }
// else if(percentage >=60){
//     document.write("Grade  : B <br>")
//     document.write("Remarks : you Need improve ")

// }
// else if(percentage <=60){
//     document.write("Grade : Fail <br>")
//     document.write(" Remarks : Sorry ")

// }

// Q7 
// Q8
 
// var num1 = prompt("Enter your number")

// if( num1 % 3 === 0 ){
//       alert("The number is divisble by 3");
// } else {
//   alert("The number is not divisible by  3");
// }


// Q9
// var num = prompt("enter a number")

// if(num % 2 == 0){
//     alert("odd num")
// }
// else{
//     alert("Even num")
// }
 

// Q10

// var tem = prompt("Enter tempreture")

// if(tem >= 40){
//     alert(" “It is too hot outside.”")
// }

//  else if(tem >= 30){
//     alert("“The Weather today is Normal.”")
// }


// else if(tem >= 20){
//     alert("“Today’s Weather is cool.”")
// }

// else {
//     alert(" OMG! “Today’s Weather is so cool.”")
// }

// Q11 

// var num = +prompt("Enter 1st number ")
// var num1 = +prompt("Enter 2nd number ")
// var operator =prompt("Inter a operator (+,-,*,/):");

// if(operator === '+'){
//     alert(num+num1)
// }

//  else if(operator === '-'){
//        alert(num-num1)
// }

// else if(operator === '*'){
//     alert(num*num1)
// }

//  else if(operator === '/'){
//     alert(num/num1)
// }

// else{
//     alert("invalid number")
// }


// Chapter 12-13 
// var ch = prompt("Please enter a character (number or string):");
// if (ch >= "A" && ch <= "Z")
//   document.write(ch + " is an UpperCase character <br>");
// else if (ch >= "a" && ch <= "z")
//   document.write(ch + " is an LowerCase character <br>");
// else {
//   document.write(ch + " is a number <br>");
// }

//---------Q2-------

// var num1 = +prompt("Enter first number : ");
// var num2 = +prompt("Enter second number : ");

// if (num1 > num2) {
//   alert(num1 + " is greater than " + num2);
// } else if (num1 < num2) {
//   alert(num1 + " is less than  " + num2);
// } else {
//   alert(num1 + " and " + num2 + " are equal");
// }

//---------Q3-------

// var num = +prompt("Enter number : ");

// if (num > 1 && num !== 0) {
//   alert(" Number is positive");
// } else if (num < 1 && num !== 0) {
//   alert("Number is negative");
// } else {
//   alert("Zero");
// }

//---------Q4-------

// var vowel = prompt("Enter  a Vowel :");

// if (vowel === "a") {
//   alert("true");
// } else if (vowel === "e") {
//   alert("true");
// } else if (vowel === "i") {
//   alert("true");
// } else if (vowel === "o") {
//   alert("true");
// } else if (vowel === "u") {
//   alert("true");
// } else {
//   alert("False");
// }

//---------Q5-------

// var password = "BankLogin13";
// var userPassword = prompt("Please enter your Password : ");

// if (!userPassword) {
//   alert("Please enter your password");
// } else if (userPassword === password) {
//   alert("“Correct! The password you entered matches the original password");
// } else {
//   alert("Incorrect password");
// }

//---------Q6------

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
//   alert(greeting);
// } else {
//   greeting = "Good evening";
//   alert(greeting);
// }

//---------Q7------

// var time = +prompt("Enter time : ");

// if (time >= 0 && time < 1200) {
//   alert("Good Morning");
// } else if (time >= 1200 && time < 1700) {
//   alert("Good Afternoon");
// } else if (time >= 1700 && time < 2100) {
//   alert("Good Evening");
// } else if (time >= 2100 && time < 2359) {
//   alert("Good Night");
// } else {
//   alert("wrong time");
// }







