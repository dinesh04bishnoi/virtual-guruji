

function onSubmit(){
    // console.log(studentForm.value)

     var name = document.getElementById('name').value;
     var phone = document.getElementById('phoneNumber').value;
     var email = document.getElementById('email').value;
    //  var grade = document.getElementById('grade').value;

     var grade = document.getElementsByName('grade');              
     for(i = 0; i < grade.length; i++) {
         if(grade[i].checked)        
            Grade   = grade[i].value;
     }

     var subject = document.getElementsByName('subject');
     for(i=0;i<subject.length;i++){
         if(subject[i].checked){
             Subject = subject[i].value;
         }
     }

     var day = document.getElementsByName('days');
     for(i=0;i<day.length;i++){
         if(day[i].checked){
             Day = day[i].value;
         }
     }
     var time = document.getElementsByName('time');
     for(i=0;i<time.length;i++){
         if(time[i].checked){
             Time = time[i].value;
         }
     }

     let Body = `Name: ${name} <br>  Phone Number: ${phone} <br> Email:  ${email} <br>  Grade: ${Grade} <br> Subject: ${Subject} <br> Day: ${Day} <br> Time: ${Time} `;
     console.log(Body);

//      var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Access-Control-Allow-Origin", "*");


// var raw = JSON.stringify({
//   "name": name,
//   "phone": phone,
//   "grade": Grade,
//   "time": Time,
//   "day": Day,
//   "email": email,
//   "subject": Subject
// });

// var requestOptions = {
//   method: 'POST',
//   mode: 'cors',
// //   headers: myHeaders,

//   body: raw,
// //   redirect: 'follow'
// };

// fetch("https://raiseme.in/api/sendOtherMail", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
 
// Email.send({
//     //  Host : "email-smtp.ap-south-1.amazonaws.com",
//     //   SecureToken: ' be02ffd8-f6e0-45dc-a158-54fea97bbf99',
//      SecureToken: "e11ce911-bced-424f-bf45-e8e230a4f45e",
//     //  Username : "AKIAYLBOTPXQXQBZV66R",
//     //  Password : "BLC4UlB2PO71OXGvnk3wHD0ZrnMOJDpffABKGXbWQyZt",
//     To : 'dinesh89bishnoi@gmail.com',
//     From : "hvk940@gmail.com",
//     Subject : "This is the subject",
//     Body : Body
// }).then(
//   message => alert(message)
// );
}

function setBoard(board){
localStorage.setItem('board',board);
}
function setSubject(subject){
localStorage.setItem('subject',subject);  
}
function setGrade(grade){
localStorage.setItem('grade',grade);      
}

// if(window.location.pathname.includes('virtual-guruji2.html')){
//     document.getElementById('subject').innerHTML = localStorage.getItem('subject');
//     document.getElementById('board').innerHTML = localStorage.getItem('board');
// }


document.addEventListener('DOMContentLoaded', init, false);

let board;
let grade;
let subject;
let data;

function init(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           data = JSON.parse(xhttp.responseText);
            board = localStorage.getItem('board');
            grade = localStorage.getItem('grade');
            subject = localStorage.getItem('subject');
            initHtml(board,grade,subject);
        }
    };
    xhttp.open("GET", "virtual.json", true);
    xhttp.send();
}

function initHtml(board,grade,subject){
    let subjectDetail =[];
    let html = '';
    subjectDetail.push(data[0]['Board'][board][grade][subject]);
    console.log(subjectDetail);
     subjectDetail.forEach(element => {
         html+= `
         <div class="card pl-5" style="width: 25rem;box-shadow: 5px 10px 18px #888888; ">
          <div class="card-title pt-4" style="padding-left: 32px">
             <span id="subject" class="fs-3 fw-bolder">${element.subject}</span>
             <small id="board" class="badge rounded-pill bg-primary  mt-2 p-2 fs-6" style="float: right; margin-right: 20px;" >${element.board}</small>
          </div>
          <hr>
          <div class="card-body col-12">
              <div class="d-flex justify-content-around">
                  <div>
                      <span class="p-2" style="border-right:1px solid black;">
                          <span class="text-center fw-bold">${element.nClasses}</span> <br> live Classes
                      </span>
                      </div>
                      <div>
                          <span class="p-2" style="border-right:1px solid black;">
                              <span class="text-center fw-bold">${element.months}</span> <br> Months
                          </span>
                      </div>
                       
                      <div>
                          <span style="border-left:0;">
                              <span class="text-center fw-bold">${element.fees}</span> <br> Fees
                          </span>
                      </div>
              </div>

              <div class="mt-3">                    
                      <div class="p-2 ml-5 fw-bold">
                          <i class="fas fa-star "></i>                        
                              Best of Enhancing Problem Solving Skills                            
                      </div>
                      <div class="p-2 fw-bold">
                          <i class="fas fa-star "></i>                           
                              Best of Enhancing Problem Solving Skills                            
                      </div> 
                      <div class="p-2 fw-bold">
                          <i class="fas fa-star "></i>                          
                              Best of Enhancing Problem Solving Skills                  
                      </div>                        
              </div>
              <hr>

              <div>
                  <div class="p-2 ml-5 ">
                     <i class="fas fa-circle"></i>                       
                          Best of Enhancing Problem Solving Skills                            
                  </div>
                  <div class="p-2 ">
                     <i class="fas fa-circle"></i>                          
                          Best of Enhancing Problem Solving Skills                            
                  </div> 
                  <div class="p-2 ">
                     <i class="fas fa-circle"></i>                         
                          Best of Enhancing Problem Solving Skills                  
                  </div>

              </div>

              <div class="m-3" >
                  <a href="./virtual-guruji3.html" style="box-shadow: 5px 10px 18px #888888;" class="btn btn-primary">Explore More</a>
              </div>             
                  
              </div>
          </div>
         `
     });

     document.getElementById('selectedClass').innerHTML= html;
}


function filter(event){
    // console.log(event.target.value);
    if(event.target.id == 'grades'){
       grade = event.target.value;       
    }
    if(event.target.id == 'boards'){
        board = event.target.value;
        if(grade == 'All Board'){
           
        }
    }

    if(event.target.id == 'subjects'){
      subject = event.target.value  
    }

    
}