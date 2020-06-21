//         <<<<<<<<<<<<<  task1 >>>>>>>>>>>>>>

//  function time(){
//      var a= new Date();
//      document.write(a)
//  }
//  time();

//          <<<<<<<<<<<<<<<< task 2 >>>>>>>>>>>>>>

// function name(){
//     var fname=prompt("type your first name")
//     var lname=prompt("type your  lastname")
//     var fullname=fname+lname
//     document.write("your full name is : "+fullname)
// }

// name();

//      <<<<<<<<<<<<<<<<< task 3 >>>>>>>>>>>>>>>>>

// function add(){
//     var num1= +prompt("number1:")
//     var num2= +prompt("number 2")
//     var num3 = num1 + num2
//     document.write(num3)
// }

// add();

// '     <<<<<<<<<<<<<<<< task 4 >>>>>>>>>>>.



// function Calculator(){
//         var num1= +prompt("number1:")
//         var num3 = prompt("select operator sign (+-/*%)")
//         var num2= +prompt("number 2")
        
//         if(num3 === "-"){
//             Ans=num1 - num2
//         }
//         else if(num3 === "+"){
//             Ans=num1 + num2
//         }
//         else if(num3 === "*"){
//             Ans=num1 * num2
//         }
//         else if(num3 === "/"){
//             Ans=num1 / num2
//         }
//         else if(num3 === "%"){
//             Ans=num1 % num2
            
//         }
//         document.write("result of ("+num1+" "+num3+" "+num2+") : "+ Ans)

//     }

// Calculator();


//      <<<<<<<<<<<<<<<<<<<<<<<<  task 5 >>>>>>>>>>>>>>>>>>>>>

// function Squres(){
//     var b = prompt("type to find the squre of number")
//     var a =  b**2  
//     document.write("squre of number is : "+ a)
// }

// Squres()


//  <<<<<<<<<<<<<<<<<<<<<<<< task6 >>>>>>>>>>>>>>>>>>>>>

// function factorialize(num) {
//     if (num === 0 || num === 1)
//       return 1;
//     for (var i = num - 1; i >= 1; i--) {
//       num *= i;
//     }
//     document.write(num);
//   }
//   factorialize(prompt("enter num to find it"));


// <<<<<<<<<<<<<<<<<<<task 7>>>>>>>>>>>>>>>>>

// function cont(a,b){
//     a=prompt("start number")
//     b=prompt("end number")
//     for (a; a<=b ; a++)
//         document.write("<br>"+a)
// }

// cont()

// // <<<<<<<<<<<<<<<<<<<task8>>>>>>>>>>>>>>>>>

// function hypo(){
//     function squar(){
//     var a=prompt("enter base")
//     var b=prompt("enter perpendicular")
//         h=a**2 + b**2 
//         document.write("hypotenuse is:"+h)
//     }
//     squar()
    
// }

// hypo();


//  <<<<<<<<<<<<<<<<<<<< task 9 >>>>>>>>>>>>>>>>>>


// function rect(a,b){
//     var a=prompt("enter width:")
//     var b=prompt("enter height:")
//     var   A = a*b
//         document.write("area of tha rectangle is : "+A)
// }

// rect()

//  <<<<<<<<<<<<<<<<<<<< task 10 >>>>>>>>>>>>>>>>


// function palindrome(){
//     var a = prompt(" Enter ")
//     var b = "";
//     for (var i = a.length -1; i >= 0 ; i--){
//         b += a[i]
//     }
//     if (a === b){
//         document.write(a+" is a plaindrome word")
//     }
//     else{
//         document.write(a+" is a not plaindrome word")
//     }
// }

// palindrome();


//  <<<<<<<<<<<<<<<<,,task 11>>>>>>>>>>>

// var str=" the quick brown fox"
// var str1= str.replace("t", "T").replace("q", "Q").replace("b", "B").replace("f", "F")

// document.write(str1)

//     <<<<<<<<<<<<<<<<  task 12 >>>>>>>>>>>>>>>>>>>>

// function findlongestword(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   document.write(result);
// }
// findlongestword('Web Development Tutorial');

//  <<<<<<<<<<<<<<<<<<< task13 >>>>>>>>>>>>>>>

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var p = 0; p < str.length; p++) 
//  {
//     if (str.charAt(p) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   document.write (letter_Count);
// }

// char_count('JSResourse.com', 'o')

//  <<<<<<<<<<<<<<<<<<<<<<  task 14 >>>>>>>>>>>>>>
// function circumference(radius){
// var circumference= 2*3.142*radius
// document.write("the circumference is  = "+circumference)
// }
// function area(radius){
// var area= 3.142*(radius)**2
// document.write("<br>Area of circle = "+ area)
// }
// circumference(prompt("enter the radius to find the circumference"))
// area(prompt("enter the radius to find the area"))