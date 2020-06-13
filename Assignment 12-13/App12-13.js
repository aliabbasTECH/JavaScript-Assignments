//                     <<<<<< task1  >>>>>>>>


var input=prompt("Enter chaeacter ")
var text=input

if (  text.charCodeAt()  >= 65 && text.charCodeAt()  <= 90 ){
    document.write("<br>Ans1:<br> Uppercase letter")
}
else if (text.charCodeAt()  >= 97 && text.charCodeAt()  <= 122){
    document.write("<br>Ans1:<br>Lowercase Letter ")
}
else if ( text.charCodeAt()  >= 48 && text.charCodeAt()  <= 57 ){
    document.write("<br>Ans1:<br> you type numbers ")
}
else if( text.charCodeAt() >=33 && text.charCodeAt() <= 47){
    document.write("<br>Ans1:<br>symbols signs oprators")
}



//                     <<<<<< task2 >>>>>>>>



var int1= +prompt("Qustion 2 ","enter integer 1")
var int2= +prompt("Qustion 2:","enter integer 2")
    

if (int1 < int2){
    document.write("<br> <br> Ans 2:<br>"+ int1+ " is less then "+int2 )
}

//                     <<<<<< task3  >>>>>>>>


var num = prompt("Qustion3","enter num negative or positive")
    
if (num < 0){
    document.write("<br> <br> Ans 3:<br> number is negative")
}
else{
    document.write("<br> <br> Ans 3:<br> number is positive")
}

//                     <<<<<< task4  >>>>>>>>



var chr = prompt("Qustion 4:")

if (chr === "a"&&"e"&&"i"&&"o"&&"u" ){
    document.write("<br> <br> Ans 3:<br> you write Vowel " +chr)
}
else{
    document.write("<br> <br> Ans 3:<br> you write is not Vowel " +chr)
}





//                     <<<<<< task5  >>>>>>>>

var pass1= prompt("Qustion 5:"," enter password 1")
var pass2= prompt("Qustion 5:","enter password 2")

if (pass1 === pass2 ){
    alert("Correct! The password you entered matches the original password")
}

else if(!!pass1  && !!pass2){
    alert(" empty password not allow")
}

else {
    document.write("<br> ans5:<br>incorrect pass<br>")
}

//                     <<<<<< task6  >>>>>>>>


var greeting
var hour = 13
if (hour < 18) {
greeting = "Good day"}

else{
greeting = "Good evening"
}

document.write( "<br> <br> ans 6: "+ greeting)



//                     <<<<<< task7 >>>>>>>>







document.write( "<br> <br> ans 7: <br>")
var time= prompt("Qustion 7 ","input time in 24 hrs formet (19:00)" )

if ( time === "1:00"){
    document.write("1pm")
}
else if ( time === "2:00"){
    document.write("2 AM")
}
else if ( time === "3:00"){
    document.write("3 AM")
}
else if ( time === "4:00"){
    document.write("4 AM")
}
else if ( time === "5:00"){
    document.write("5 AM")
}
else if ( time === "6:00"){
    document.write("6 AM")
}
else if ( time === "7:00"){
    document.write("7 AM")
}
else if ( time === "8:00"){
    document.write("8 AM")
}
else if ( time === "9:00"){
    document.write("9am")
}
else if ( time === "10:00"){
    document.write("10 AM")
}
else if ( time === "11:00"){
    document.write("11 Am")
}
else if ( time === "12:00"){
    document.write("12 Am")
}
else if ( time === "13:00"){
    document.write("1pm")
}
else if ( time === "14:00"){
    document.write("2pm")
}
else if ( time === "15:00"){
    document.write("3pm")
}
else if ( time === "16:00"){
    document.write("4pm")
}
else if ( time === "17:00"){
    document.write("5pm")
}
else if ( time === "18:00"){
    document.write("6pm")
}
else if ( time === "19:00"){
    document.write("7pm")
}
else if ( time === "20:00"){
    document.write("8pm")
}
else if ( time === "21:00"){
    document.write("9pm")
}
else if ( time === "22:00"){
    document.write("10pm")
}
else if ( time === "23:00"){
    document.write("11pm")
}

else if ( time === "24:00"){
    document.write("12pm")
}




