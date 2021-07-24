
if ( window.location.pathname.includes("index.html") ||
    window.location.href == "https://thevirtualguruji.com/") {
    localStorage.setItem('subject','Science');
    localStorage.setItem('board','ICSE');
    localStorage.setItem('grade','8');
  let subHtml = `
            <div class="cards mb-2 p-3 justify-content-center cursor-pointer my-m" >
                <div>
                    <a href="./virtual-guruji2.html" style="color: #0c141b; text-decoration: none; "
                        onclick="setSubject('Science')">
                        <div>
                            <img src="assets/science.png" width="100" alt="">
                        </div>
                        <div class="text-center m-2 font-weight-bold">
                            Science
                        </div>
                    </a>

                </div>

            </div>
              <div class="cards mb-2 p-3 justify-content-center my-m">
                <div>
                    <a href="./virtual-guruji2.html" style="color: #0c141b; text-decoration: none; "
                        onclick="setSubject('Math')">
                        <div>
                            <img src="assets/math.png" width="100" alt="">
                        </div>
                        <div class="text-center m-2 font-weight-bold">
                            Math
                        </div>
                    </a>
                </div>
            </div>
            `;
  document.getElementById("subHtml").innerHTML = subHtml;
}

function onSubmit(){

     var name = document.getElementById('name').value;
     var phone = document.getElementById('phoneNumber').value;
     var email = document.getElementById('email').value;
     var city = document.getElementById('city').value;
    //  var grade = document.getElementById('grade').value;

    let error=""
    let errorflag=false;
    if(name==""){
    error="Name is Required"
    document.getElementById("err-name").classList.replace('d-none','d-block')
     document.getElementById("err-name").innerText = error;
        errorflag=true;
    }
    if(phone==""){
    error="Phone is required"
    document.getElementById("err-phone").classList.replace('d-none','d-block')
     document.getElementById("err-phone").innerText = error;
    
    errorflag = true;
    }
    if(email==""){
    error="Email is required"
    document.getElementById("err-email").classList.replace('d-none','d-block')
     document.getElementById("err-email").innerText = error;
    
   errorflag = true;
    }
    if(city==""){
    error="City is required"
     document.getElementById("err-mobile").classList.replace('d-none','d-block')
     document.getElementById("err-mobile").innerText = error;
    
  errorflag = true;
    }
    if (errorflag) {
        return false;
    }
   

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

     let Body = `Name: ${name} <br>  Phone Number: ${phone} <br> Email:  ${email} <br>  Grade: ${Grade} <br> Subject: ${Subject} <br> Day: ${Day} <br> Time: ${Time} <br> City: ${city} `;
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
  city: city
});
console.log(raw);

var requestOptions = {
  method: "GET",
  mode: "no-cors",
  headers:{},
};

fetch(`https://raiseme.in/api/sendOtherMail/${Body}`, requestOptions)
  .then((response) => response.text())
  .then((result) =>{
      var modal = document.getElementById("myModal");
       modal.style.display = "none";
      var modal2 = document.getElementById("myModal2");
       modal2.style.display = "block";
  });
}


function onPythonSubmit() {
  var name = document.getElementById("namep").value;
  var phone = document.getElementById("phoneNumberp").value;
  var email = document.getElementById("emailp").value;
  var city = document.getElementById("cityp").value;
  //  var grade = document.getElementById('grade').value;

  let error = "";
  let errorflag = false;
  if (name == "") {
    error = "Name is Required";
    document.getElementById("err-pname").classList.replace("d-none", "d-block");
    document.getElementById("err-pname").innerText = error;
    errorflag = true;
  }
  if (phone == "") {
    error = "Phone is required";
    document.getElementById("err-pphone").classList.replace("d-none", "d-block");
    document.getElementById("err-pphone").innerText = error;

    errorflag = true;
  }
  if (email == "") {
    error = "Email is required";
    document.getElementById("err-pemail").classList.replace("d-none", "d-block");
    document.getElementById("err-pemail").innerText = error;

    errorflag = true;
  }
  if (city == "") {
    error = "City is required";
    document
      .getElementById("err-pmobile")
      .classList.replace("d-none", "d-block");
    document.getElementById("err-pmobile").innerText = error;

    errorflag = true;
  }
  if (errorflag) {
    return false;
  }


  let Body = `Name: ${name} <br>  Phone Number: ${phone} <br> Email:  ${email} <br> City: ${city} `;
  console.log(Body);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "GET",
    mode: "no-cors",
    headers: {},
  };

  fetch(`https://raiseme.in/api/sendOtherMail/${Body}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      var modal = document.getElementById("myModal_python");
      modal.style.display = "none";
      var modal2 = document.getElementById("myModal2");
      modal2.style.display = "block";
    });
}

function setBoard(board){
localStorage.setItem('board',board);
}
function setSubject(subject){
  
localStorage.setItem('subject',subject);  
window.location.href = "virtual-guruji2.html";
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
                        <div class="text-center m-2 font-weight-bold">
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
                        <div class="text-center m-2 font-weight-bold">
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
                        <div class="text-center m-2 font-weight-bold">
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
                        <div class="text-center m-2 font-weight-bold">
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
                        <div class="text-center m-2 font-weight-bold">
                            Math
                        </div>
                    </a>
                </div>
            </div>    
            <div class="cards mb-2 p-3 cursor-pointer subject-cards justify-content-center my-m"  >
            <div>
                <a href="./virtual-guruji2.html" style="color: #0c141b; text-decoration: none; "
                    onclick="setSubject('Biology')">
                    <div>
                        <img src="assets/biology.png" width="100" alt="">
                    </div>
                    <div class="text-center m-2 font-weight-bold">
                       Biology
                    </div>
                </a>
            </div>

        </div>        
            `;

             document.getElementById("subHtml").innerHTML = subHtml;
    }
localStorage.setItem('grade',grade);      
}

if(window.location.pathname.includes('virtual-guruji2.html')){
    // document.getElementById('subject').innerHTML = localStorage.getItem('subject');
    // document.getElementById('board').innerHTML = localStorage.getItem('board');



document.addEventListener('DOMContentLoaded', init, false);
}
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
         html += `
         <div class="card  mt-4 mb-4 subject-card" >
          <div class="card-title pt-4" style="padding-left: 32px;color:#000">
             <h4 id="subject" class="font-weight-bold">${element.subject}</h4>
             <small style="background-image: linear-gradient(75deg,#FDC830, #F37335, #f12711, #f5af19);color:white" id="board" class="badge badge-pill mt-2 p-2 fs-6" style="float: right; margin-right: 20px;" >${element.board}</small>
          </div>
          <hr>
          <div class="card-body col-12" style="color:black">
              <div class="d-flex justify-content-evenly" >
                  <div>
                      <span class="p-2" style="border-right:1px solid black;">
                          <span class="text-center font-weight-bold">${element.nClasses}</span>  live Classes
                      </span>
                      </div>
                      <div>
                          <span class="py-2 px-3" style="border-right:1px solid black;">
                              <span class="text-center font-weight-bold">${element.months}</span>  Months
                          </span>
                      </div>
                       
                      <div>
                          <span style="border-left:0;">
                              <span class="text-center font-weight-bold">&nbsp;&nbsp; ${element.fees}</span>  Fees
                          </span>
                      </div>
              </div>

              <div class="mt-3 card-font" >                    
                      <div class="p-2 font-weight-bold">
                          <img src="assets/star.png" width="25" style="padding-right:8px">                        
                          Best to Score More in Exams                            
                      </div>
                      <div class="p-2 font-weight-bold">
                          <img src="assets/star.png" width="25" style="padding-right:8px">                           
                          Covers Complete ${element.board} Syllabus.                            
                      </div> 
                      <div class="p-2 font-weight-bold">
                          <img src="assets/star.png" width="25" style="padding-right:8px">                          
                          Demands 3 Hours of Practise per Week                 
                      </div>                        
              </div>
              <hr>

              <div class="card-font">
                  <div class="p-2 ">
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
                

              </div>

              <div class="m-3" >
                  <a style=" background-image: linear-gradient( 75deg, #FDC830, #F37335, #f12711, #f5af19);color:white" class="btn" onclick='demoOpen()'>Book Demo</a>
              </div>             
                  
              </div>
          </div>
         `;
     });

     document.getElementById('selectedClass').innerHTML= html;
}

// style="box-shadow: 5px 10px 18px #888888; "

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


    function openPythonForm(){
        document.getElementById("myModal_python").style.display='block'
    }

    
