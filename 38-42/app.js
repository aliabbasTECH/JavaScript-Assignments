//                         <<<<<<<<<<<<<<<<<<<<   task 1 >>>>>>>>>>>>>>>>>>>>>>>>


// function A_Power_B(){
//       var a= +prompt("enter the value of a")
//       var b= +prompt("enter the value of b")
//       var power= a**b
//       document.write(power) 
// }
// A_Power_B();

//                    <<<<<<<<<<<<<<<<<<<<<<<<<<<  task 2 >>>>>>>>>>>>>>>>>>>

// function leapyear(){
//     var year = +prompt("enter year")
//     if(year % 4 == 0){
//        a= "leap year"
//     }
//     else if (year % 100 != 0){
//         a= "leap year"
//     }
//     else if (year % 400 == 0){
//         a= "leap year"
//     }
//     else {
//         a="not a leap year"
//     }
//     document.write(a)
// }
// leapyear();


//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< task 3 >>>>>>>>>>>>>>>>>>>>>>>>



// var a= +prompt("enter side a value")
// var b= +prompt("enter side b value")
// var c= +prompt("enter side c value")
// var d=(a+b+c)/2;
// function s(){
    
//     document.write("sides of triangle"+d)   
// }
// function area(){ 
//     s();
//     var area = d*(d-a)*(d-b)*(d-c)
//     document.write("<br>area of triangle"+area)
// }
// area();



//            <<<<<<<<<<<<<<<<<<<<<<<<   task 4  >>>>>>>>>>>>>>>>>>>>>>>>  

// var eng= +prompt("enter english marks");
// var phy= +prompt ("enter phy marks");
// var math= + prompt("enter math marks");
// var total = 300;
// var avar;
// var per;

// function avarage(){
//     avar=eng+phy+math;
//     document.write("avarage marks from total subject ="+avar);
// }
// function percentage(){
//     per= avar*100/total;
//     document.write("<br>your percentage will be ="+per+"%");
// }
// function main(){
//     avarage();
//     percentage();
// }
// main();

//  <<<<<<<<<<<<<<<<<<<<<<<<<<< task 5  >>>>>>>>>>>>>>>>>>>>>>>>>


// var word= ["ali","abbas","hasssan"]
// var  a;
// function indexat(word,a){   
//     for (var i=0 ; i < word.length; i++){
//         if(word[i] === a)
//         return i
//     }                
// }  
// var b=indexat(word,"abbas")
// document.write(b)


//   <<<<<<<<<<<<<<<<<<  task 6 >>>>>>>>>>>>>>>>>>>>>>>>>.

// var strings="javascript is well known language to develop a website "

// function delet(){

//    var stringsWithOutVovels =   strings.replace( /[aeiou]/g, '' );
   
//   document.write(stringsWithOutVovels);
// }
// delet()

//  <<<<<<<<<<<<<<<<<<<<<<<<<   task 7   >>>>>>>>>>>>>>>>>>>>>>>>>>>


// function Occurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
//   document.write(Occurrences());




//       <<<<<<<<<<<<<<<<<< task 8  >>>>>>>>>>>>>>>>>>>>


// var km = +prompt("inter distance between city 1 to city 2 in kliometers");
// document.write("city distance you type = "+km+"<br>")
// function K2M(){
//     var m;
//     m=km*1000
//     document.write("<br>distance in meter ="+m)
// }
// K2M();

// function k2feet(){
//     var feet;
//     feet=km*3280.8
//     document.write("<br>distance in feet ="+feet)
// }

// k2feet();

// function k2inch(){
//     var inch
//     inch=km*39370
//     document.write("<br>distance in inches ="+inch)

// }

// k2inch();

// function k2cm(){
//     var cm;
//     cm=km*100000
//     document.write("<br>distance in inches ="+cm) 
// }
// k2cm();


//   <<<<<<<<<<<<<<<<<<<<<<< task 9 >>>>>>>>>>>>>>>>>>>>>>>>>>

    // var count = 1
    // var working_hours
    // var over_time
    // var over_time_pay;

    // while(count<=10)
    // {
        
    //     var working_hours=prompt("Enter the working hours of employee no"+count)
    //     if(working_hours>40)
    //     {
    //         over_time = working_hours - 40;
    //         over_time_pay = over_time * 12.00;
    //         document.write("empoly no "+  count+ " overtimenpay is ="+ over_time_pay+"<br>");
    //     }
    //     else
    //         document.write("empoly no "+count+" You have to work for more than 40 hours to get over time<br>");

    //     count++;
    // }

//   <<<<<<<<<<<<<<<<<<<<<<< task 10 >>>>>>>>>>>>>>>>>>>>>>>>>>

var amount= + prompt("Please input amount for withdraw : ")
	
var a= amount / 100
a=Math.floor(a)
var b=(amount % 100) / 50
b=Math.round(b)
var c=	((amount % 100) % 50) / 10
c=Math.round(c)
var d=(((amount % 100) % 50) % 10)
d=Math.round(d)
document.write("Required notes of Rs. 100  :"+a+"<br>"+"Required notes of Rs. 50  :"+b+"<br>"+"Required notes of Rs. 10 :"+c+"<br>"+"left over Rs :"+d)

