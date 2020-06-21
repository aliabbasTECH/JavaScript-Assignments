//                  <<<<<<<<<<<<<<<<< task 1 >>>>>>>>>>>>.

// var userFname=prompt("1:first name","name")
// var userLname=prompt("1:Last name","name")

// var fullName=userFname+" "+userLname

// document.write("Good Morning!"+fullName)

//                  <<<<<<<<<<<<<<<<<<<< task 2 >>>>>>>>>>>>>>>. 

// var userin=prompt("2: what is your favorit mobile model:","enter")
// document.write("my favorite phone is :" +userin)
// for (i=0; i< userin.length ; i++){
    
// }
// document.write("<br>length of string:"+i)


//               <<<<<<<<<<<<<<<<<<   task 3 >>>>>>>>>>>>>>>..


// var userin="Pakistani"
// document.write("string:"+userin)
// for (i=0; i< userin.length ; i++){
//     if(userin[i] === "n"){
//         var a=i
//     }  
// }
// document.write("<br>index of 'n':"+a)


//           <<<<<<<<<<<<<<<<<< task 4  >>>>>>>>>>>>>>>>>


// var userin="Hello World"
//  document.write("string:"+userin)
//  for (i=0; i< userin.length ; i++){
//      if(userin[i] === "l"){
//          var a=i
//      }  
//  }
//  document.write("<br>index of 'l':"+a)

//         >>>>>>>>>>>>>>>>>>>>>>>>>>   task 5    <<<<<<<<<<<<<<<<<<<<<


// var userin="Pakistani"

//  document.write("string:"+userin)
//  for (i=0; i< userin.length ; i++){
//      if(i === 3 ){
//          var a=userin[i]
//      }  
//  }
//  document.write("<br>index of 3:"+a)

//              <<<<<<<<<<<<<<<<<<<<<<<<<<    task6 >>>>>>>>>>>>>>>>>>>

//  var userFname=prompt("1:first name","name")
//  var userLname=prompt("1:Last name","name")

//  var  fullName = userFname.concat(userLname);

//  document.write("Good Morning!"+fullName)

//             <<<<<<<<<<<<<<<<<<<<<<  task7 >>>>>>>>>>>>>>>>>>>>>>>

// var city = "Hyderabad"
// var city2 = city.slice(5)
// var city3 = "Isalam"+city2
// document.write(city3)


//             <<<<<<<<<<<<<<<<<<<<<   task8  >>>>>>>>>>>>>>>>>>>>>

// var message = "“Ali and Sami are best friends. They play cricket and football together.” <br>"
// document.write("before remove 'and' '&' :"+message)
// var   message2 = message.split("and").join("")

// document.write("after remove :" +message2)


//             <<<<<<<<<<<<<<<<<<<<<<<  task 9 >>>>>>>>>>>>>>>>>>>>>>

// var num="472"
// document.write("<br>Value:"+num)
// document.write("<br>Type:"+typeof num)
// var num2= parseInt(num)
// document.write("<br>Value:"+num2)
// document.write("<br>Type:"+typeof num2)

//              <<<<<<<<<<<<<<<<<<<<<<<<<  task 10   >>>>>>>>>>>>>>>>>>>>>

// var user="peanuts"
// document.write("User input: "+user)
// var user=user.toUpperCase()
// document.write("<br>User Case: "+user)

//             <<<<<<<<<<<<<<<<<<<<<<<<<<<   task 11 >>>>>>>>>>>>>>>>>>

// var user="javascript"
// document.write("User input: "+user)
// user1=user.replace("j","J")
// document.write("<br>User Case: "+user1)

//              <<<<<<<<<<<<<<<<<<<<<<<< task 12 >>>>>>>>>>>>>>>>>


// var num= 35.36
// document.write("Number: "+num)
// num=num.toPrecision()
//     num1=num.split(".").join("")

// document.write("<br>convert to : "+typeof num+" : "+num1)


//              <<<<<<<<<<<<<<<<<<<<<<<<  task 13 >>>>>>>>>>>>>>>>>>>>>>

// var username=prompt("enter username")
// var str=String.fromCharCode(33, 44, 46, 64)

// for (i=0; i< username.length ; i++){
//         for(j=0; j<str.length; j++) {
//             if(username[i] === str[j]){
//              alert("Plese enter a valid User name without (!,.@)")
//          } 
//         } 
//      }


//              <<<<<<<<<<<<<<<<<<<<<<  task 14 >>>>>>>>>>>>>>>>>>>
    
// var str= ["cake", "apple pie", "cookie", "chips", "patties"]
// var user=prompt('Welcome to ABC store What do you want to order')
//     user=user.toLowerCase()
// for(i=0; i<str.length; i++){
//     if (str[i] === user ){
//         document.write(user+" is available at index "+i+" in our bakery")
//     }
//     else{
//         document.write("we are sory "+user+" is not available in our bakery")
//     }
//     break
// }

//        >>>>>>>>>>>>> >>>>>>>>>>>> >>>>>>>>>>>> task 15 <<<<<<<<<< <<<<<<<<<< <<<<<<<<<< 


// var pass=prompt("Enter chaeacter ")
// var text=pass

// if (  text.charCodeAt()  >= 65 && text.charCodeAt()  <= 90 ){
//    document.write("password is ok")
// }
// else if (text.charCodeAt()  >= 97 && text.charCodeAt()  <= 122){
//    document.write("password is ok")
// }
// else if ( text.charCodeAt()  >= 48 && text.charCodeAt()  <= 57 ){
//    document.write("password is ok")
// }
// else if( text < 6){
//    alert("password is wrong")
// }

// else{
//    alert("wrong pass")
// }

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<task 16 >>>>>>>>>>>>>>>>>

// var str = 'University of Karachi';
// var ar = str.split(''); 


// for (h=0 ; h < ar.length ; h++)(
//     document.write("<br>" +ar[h])
//    )

//       <<<<<<<<<<<<<<<<<<<< task 17 >>>>>>>>>>>>>>>
// var user= prompt("enter")

// var last=user.slice(-1);

// document.write("user input: "+user)
// document.write("<br>Last character of input: "+last)


//        <<<<<<<<<<<<<<<<<<<<  task 18 >>>>>>>>>>>>>>>>

// var temp="The quick brown fox jumps over the lazy dog"
// var temp=temp.toLowerCase()
// var count = (temp.match(/the/g)).length;
// document.write(count);