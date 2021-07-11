
if (window.location.pathname.includes("virtual-guruji.html")) {
    localStorage.setItem('subject','Science');
    localStorage.setItem('board','ICSE');
    localStorage.setItem('grade','8');
  let subHtml = `
            <div class="cards mb-2 p-3 justify-content-center cursor-pointer my-m" style="box-shadow: 5px 10px 18px #888888" >
                <div>
                    <a href="./virtual-guruji2.html" style="color: #0c141b; text-decoration: none; "
                        onclick="setSubject('Science')">
                        <div>
                            <img src="assets/science.png" width="100" alt="">
                        </div>
                        <div class="text-center m-2 fw-bold">
                            Science
                        </div>
                    </a>

                </div>

            </div>
              <div class="cards mb-2 p-3 justify-content-center my-m" style="box-shadow: 5px 10px 18px #888888">
                <div>
                    <a href="./virtual-guruji2.html" style="color: #0c141b; text-decoration: none; "
                        onclick="setSubject('Math')">
                        <div>
                            <img src="assets/math.png" width="100" alt="">
                        </div>
                        <div class="text-center m-2 fw-bold">
                            Math
                        </div>
                    </a>
                </div>
            </div>
            `;
  document.getElementById("subHtml").innerHTML = subHtml;
}
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

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  name: name,
  phone: phone,
  grade: Grade,
  time: Time,
  day: Day,
  email: email,
  subject: Subject,
});
console.log(raw);

var requestOptions = {
  method: "POST",
  mode: "no-cors",
  headers:{},
  body: raw
 
};

fetch("http://localhost:3001/api/sendOtherMail", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result));


 
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
    if (grade=='8' || grade=="9" || grade=="10") {
        let subHtml = `
            <div class="cards mb-2 p-3 cursor-pointer subject-cards justify-content-center my-m" >
                <div>
                    <a href="./virtual-guruji2.html" style="color: #0c141b; text-decoration: none; "
                        onclick="setSubject('Science')">
                        <div>
                            <img src="assets/science.png" width="100" alt="">
                        </div>
                        <div class="text-center m-2 fw-bold">
                            Science
                        </div>
                    </a>

                </div>

            </div>
              <div class="cards mb-2 p-3 cursor-poniter subject-cards justify-content-center my-m" >
                <div>
                    <a href="./virtual-guruji2.html" style="color: #0c141b; text-decoration: none; "
                        onclick="setSubject('Math')">
                        <div>
                            <img src="assets/math.png" width="100" alt="">
                        </div>
                        <div class="text-center m-2 fw-bold">
                            Math
                        </div>
                    </a>
                </div>
            </div>
            `;
            document.getElementById("subHtml").innerHTML=subHtml;
        
    }

    if (grade=="11" || grade=="12") {
        subHtml = ` <div class="cards mb-2 p-3 cursor-pointer subject-cards justify-content-center my-m" >
                <div>
                    <a href="./virtual-guruji2.html" style="color: #0c141b; text-decoration: none; "
                        onclick="setSubject('Physics')">
                        <div>
                            <img src="assets/physics.png" width="100" alt="">
                        </div>
                        <div class="text-center m-2 fw-bold">
                            Physics
                        </div>
                    </a>

                </div>

            </div>
              <div class="cards mb-2 p-3 cursor-pointer subject-cards justify-content-center my-m"  >
                <div>
                    <a href="./virtual-guruji2.html" style="color: #0c141b; text-decoration: none; "
                        onclick="setSubject('Chemistery')">
                        <div>
                            <img src="assets/chemistery.png" width="100" alt="">
                        </div>
                        <div class="text-center m-2 fw-bold">
                            Chemistery
                        </div>
                    </a>

                </div>

            </div>
             <div class="cards mb-2 p-3 cursor-pointer subject-cards justify-content-center my-m">
                <div>
                    <a href="./virtual-guruji2.html" style="color: #0c141b; text-decoration: none; "
                        onclick="setSubject('Math')">
                        <div>
                            <img src="assets/math.png" width="100" alt="">
                        </div>
                        <div class="text-center m-2 fw-bold">
                            Math
                        </div>
                    </a>
                </div>
            </div>

            
            `;

             document.getElementById("subHtml").innerHTML = subHtml;
    }
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
            document.getElementById("grades").value=grade;
            document.getElementById("boards").value=board;
            document.getElementById("subjects").value=subject;
            const initData=data.filter(function(element) {
                return element.board==board && element.grade==grade && element.subject==subject;
            })
            console.log(initData);
            initHtml(initData);
        }
    };
    xhttp.open("GET", "virtual.json", true);
    xhttp.send();
}

function initHtml(data){
    let subjectDetail =[];
    let html = '';
    subjectDetail=data;
  
     subjectDetail.forEach(element => {
         html+= `
         <div class="card pl-5 mt-4 mb-4 subject-card" style="box-shadow: 5px 10px 18px #888888; ">
          <div class="card-title pt-4" style="padding-left: 32px">
             <span id="subject" class="fs-3 fw-bolder">${element.subject}</span>
             <small id="board" class="badge rounded-pill bg-primary  mt-2 p-2 fs-6" style="float: right; margin-right: 20px;" >${element.board}</small>
          </div>
          <hr>
          <div class="card-body col-12">
              <div class="d-flex justify-content-between ">
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

              <div class="mt-3 card-font" >                    
                      <div class="p-2 ml-5 fw-bold">
                          <img src="assets/star.png" width="25" style="padding-right:8px">                        
                          Best to Score More in Exams                            
                      </div>
                      <div class="p-2 fw-bold">
                          <img src="assets/star.png" width="25" style="padding-right:8px">                           
                          Covers Complete ${element.board} Syllabus.                            
                      </div> 
                      <div class="p-2 fw-bold">
                          <img src="assets/star.png" width="25" style="padding-right:8px">                          
                          Demands 3 Hours of Practise per Week                 
                      </div>                        
              </div>
              <hr>

              <div class="card-font">
                  <div class="p-2 ml-5 ">
                     <img src="assets/tick.png" width="25" style="padding-right:8px">                       
                     ${element.nClasses} Live Interactive Classes                            
                  </div>
                  <div class="p-2 ">
                     <img src="assets/tick.png" width="25" style="padding-right:8px">                          
                     In-Class Case Studies for Real-Life Application                          
                  </div> 
                  <div class="p-2 ">
                     <img src="assets/tick.png" width="25" style="padding-right:8px">                         
                     Monthly Report Cards to Parents                  
                  </div>
                  <div class="p-2 ">
                     <img src="assets/tick.png" width="25" style="padding-right:8px">                         
                     3D Visualised Content                 
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
     let initData; 
        if (event.target.id=='boards')
            board=event.target.value

        if (event.target.id=='grades')
            grade=event.target.value

        if (event.target.id=='subjects')
            subject=event.target.value
  
         if(board!="All Board" || subject !="All Subject"){
            initData = data.filter(function (element) {
             return (
                     element.board == board &&
                     element.grade == grade &&
                     element.subject == subject
                   );
                 }); 
                   
             
         }
         if(board == "All Board" && subject !="All Subject"){
             initData = data.filter(function (element) {
             return (
                     element.tag == "All Board" &&
                     element.grade == grade &&
                     element.subject == subject
                   );
                 }); 
         }
          if (subject == "All Subject" && board !="All Board") {
            initData = data.filter(function (element) {
              return (
                element.board == board &&
                element.grade == grade &&
                element.tag_subject == "All Subject"
              );
            });
          }
          if (subject == "All Subject" && board =="All Board") {
            initData = data.filter(function (element) {
              return (
                element.tag == "All Board" &&
                element.grade == grade &&
                element.tag_subject == "All Subject"
              );
            });
          }
        
                 
                
            
        
          console.log(initData);
          initHtml(initData);
    }

    
