//      <<<<<<<<<<< task1 >>>>>>>>>>>

// var D= new Date()
// document.write(D)

//  <<<<<<<<<<<<< task2 >>>>>>>>>>>>>
// var a=new Date()
// var b = a.toString()
// var c = b.slice(4,8)
// document.write(c)

// <<<<<<<<<<<< task3 >>>>>>>>>>>>>>

// var a=new Date()
// var b = a.toString()
// var c = b.slice(0,3)
// document.write(c)

// <<<<<<<<<<<< task4 >>>>>>>>>>>>>>

// var a=new Date()
// var b=a.getDay()
// if (b < 16 ){
//     document.write("first fifteen days of the month")}
// else if( b >= 16){
//     document.write("last fifteen days of month")
// }

//   <<<<<<<<<<<<<<<<<<<<<< task 6>>>>>>>>>>>>>>>>>>>>>
// var a=new Date()
// document.write("current Date:"+a)
// var am=a.getMonth()
// var b=a.getDay()
// var c=a.getMilliseconds()
// var e=a.getMinutes()
// document.write("<br>elapsed milliseconds since "+ am + "/"+ b + "/ 2020 : "+ c )
// document.write("<br> elapsed minutes since "+ am + "/ "+ b + "/ 2020 : "+ e )


//         <<<<<<<<<<<<<<<<< task 7>>>>>>>>>>>>>>>>>>>>

// var a=new Date()

// var b=a.getHours()

// if (b  === 0){
//     document.write("it midnight")

// }
// else if (b  <12){
//     document.write("it is  noon")

// }
// else if (b  > 12 ){
//     document.write("it is pm")

// }

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<task8>>>>>>>>>>>>>>>>>>

// var mydate=new Date("tuesday december 31, 2020 13:14:00")

// document.write( "Later date"+mydate)

//            <<<<<<<<<<<<<<< task 9 >>>>>>>>>>>>>>>>>>>>>>

//   var myolddate=new Date("sat april 1, 2020 13:14:00 ") 
//   var oldday = myolddate.getTime()
//   var todate = new Date()
//   var today  = todate.getTime()
//   var diff   = today - oldday 
//   var abstime = diff/(1000*60*60*24)
//   var acc = Math.floor(abstime)

//  document.write(acc+" days have passed since 1st ramdan, 2020")

//  <<<<<<<<<<<<<<<<<<<<<<<<< task 10 >>>>>>>>>>>>>>>>>>>>>


// var myolddate=new Date("sat jan 1, 2015 13:14:00 ")
// var sec1=myolddate.getSeconds()
// var mynewdate=new Date("sat dec 25, 2015 13:14:00 ")
// var sec2=mynewdate.getSeconds()
// var diffr= mynewdate - myolddate
// document.write(diffr+"seconds has passed since beginning of 2015")

//          <<<<<<<<<<<<<<<<<<<<<<<  task 11 >>>>>>>>>>>>>>>>>>>


// var mydate=new Date()
// document.write("current date:"+mydate)
// var hour=mydate.setHours(mydate.getHours() - 1);
// document.write("<br>past hour:"+mydate)

//      <<<<<<<<<<<<<<<<<<<<<<<<<<<  task12 >>>>>>>>>>>>>>>>>>>>>

// var mydate=new Date()
// document.write("current date:"+mydate)
// var hour=mydate.setFullYear(mydate.getFullYear() - 100);
// document.write("<br>100 years back:"+mydate)

//     <<<<<<<<<<<<<<<<<<<<<<<< task 13 >>>>>>>>>>>>>>>>>>>>>>

// var Dob= new Date (prompt("Enter your date of birth",))
// var dobyear= Dob.getFullYear()
// var today=new Date;
// var TodayYear= today.getFullYear()
// var totalage= TodayYear-dobyear

// document.write(totalage)

//    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  task 14 >>>>>>>>>>>>>>>>>>>>>>
// var customer= prompt("enter name of customer:")
// var numberOfU= +prompt("enter the number of units used:")
// var charges=16
// var NetPayableInDate= numberOfU * charges
// var latecharge=350
// var NetPayableOutDate= NetPayableInDate + latecharge
// var month=new Date()
// var month=month.getMonth()
// document.write("Customer Name:" +customer)
// document.write("<br>Customer Name:" +numberOfU)
// document.write("<br>Customer Name:" +charges)
// document.write("<br>Customer Name:" +month)


// if (month === month){
//      document.write("<br><br>net Amount payable (with in due date):"+NetPayableInDate )
// }

// document.write("<br>Late payment surcharge :" +latecharge)
// document.write("<br>Late payment surcharge :" +NetPayableOutDate)

// if (month === month.getMonth()-1 ){
//     document.write("net Amount payable (with in due date):"+NetPayableOutDate)
// }
