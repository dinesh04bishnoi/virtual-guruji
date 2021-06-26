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

if(window.location.pathname.includes('virtual-guruji2.html')){
    document.getElementById('subject').innerHTML = localStorage.getItem('subject');
    document.getElementById('board').innerHTML = localStorage.getItem('board');
}
