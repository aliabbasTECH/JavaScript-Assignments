// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< task 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// function getdata(){
//     document.getElementById("nameData").innerHTML= document.getElementById("nam").value;
         
//     document.getElementById("EmailData").innerHTML=document.getElementById("email").value;

//     document.getElementById("passData"). innerHTML=document.getElementById("pass").value
// }

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< task 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more"; 
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less"; 
//       moreText.style.display = "inline";
//     }
//   }


//       <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< task3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var a
var b
var c

function editbtn(){
a= document.getElementById("tname").innerHTML= document.getElementById("name").value;
             
b= document.getElementById("tclass").innerHTML=document.getElementById("class").value;
    
c= document.getElementById("tmarks"). innerHTML=document.getElementById("marks").value
    }
function editbtn1(){
      a= document.getElementById("tname1").innerHTML= document.getElementById("name").value;
                   
      b= document.getElementById("tclass1").innerHTML=document.getElementById("class").value;
          
      c= document.getElementById("tmarks1"). innerHTML=document.getElementById("marks").value
          }
function editbtn2(){
            a= document.getElementById("tname2").innerHTML= document.getElementById("name").value;
                         
            b= document.getElementById("tclass2").innerHTML=document.getElementById("class").value;
                
            c= document.getElementById("tmarks2"). innerHTML=document.getElementById("marks").value
                }
function editbtn3(){
 a= document.getElementById("tname3").innerHTML= document.getElementById("name").value;
                               
b= document.getElementById("tclass3").innerHTML=document.getElementById("class").value;
                      
c= document.getElementById("tmarks3"). innerHTML=document.getElementById("marks").value
                      }


function deletebtn(){
      var td = event.target.parentNode; 
      var tr = td.parentNode; // the row to be removed
      tr.parentNode.removeChild(tr);
}
function edit(){
      
}