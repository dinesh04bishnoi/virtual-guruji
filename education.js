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

     let Body = `Name: ${name} <br>  Phone Number: ${phone} \n Email:  ${email} \n  Grade: ${Grade} \n Subject: ${Subject} \n Day: ${Day} \n Time: ${Time} `;
     console.log(Body);
 
Email.send({
     Host : "smtp.gmail.com",
    //   SecureToken: ' be02ffd8-f6e0-45dc-a158-54fea97bbf99',
    // SecureToken: "214113ad-8edd-42c1-bba2-a08fc50c9ff6",
     Username : "dinesh89bishnoi@gmail.com",
     Password : "dinesh@567",
    To : 'dinesh89bishnoi@gmail.com',
    From : "dinesh89bishnoi@gmail.com",
    Subject : "This is the subject",
    Body : Body
}).then(
  message => alert(message)
);
}

