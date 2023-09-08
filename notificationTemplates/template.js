const registrationOtp = `<div style="background: #f2f2f2;
padding: 1rem;
height: fit-content;">
<div style="font-family: Arial, Helvetica, sans-serif; background: #f2f2f2;
max-width: 650px;
padding: 30px;
position: relative;
width: 600px;
margin: auto;
padding: 1rem;
background-color: transparent;
background-image: linear-gradient(-45deg, transparent, transparent 2%, white 2%, white 85%, transparent, 85%, transparent), linear-gradient(to bottom right, #2ad, #2ad 90%, transparent 90%);
background-position: top left, 0.2em 0.2em;
background-repeat: no-repeat;
filter: drop-shadow(0 0 1px #0005); ">
    <div>
        <div>
            <h2 style="font-size: 18px; text-align: center; padding-bottom: 30px">Eduffirm</h2>
        </div>
        <span style="float: right"><img
                src="https://images.pexels.com/photos/614521/pexels-photo-614521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width="120" class="CToWUd" data-bit="iit"></span>
        <p style="padding-left: 2rem;">Dear {{name}}, </p>
        <p style="padding-left: 2rem;line-height: 22px"><b>{{otpCode}}</b> is your One Time Password (OTP) to complete your registration
            process for the Eduffirm. This is valid for 15 mins only. Once you key in the above OTP
            in the designated box, you will be able to create a password.</p>
        <p style="padding-left: 2rem;>Thank you.</p>
    </div>
    </div>
</div>`
const ForgotOtp = `<div style="background: #f2f2f2;
padding: 1rem;
height: fit-content;">
<div style="font-family: Arial, Helvetica, sans-serif; background: #f2f2f2;
max-width: 650px;
padding: 30px;
position: relative;
width: 600px;
margin: auto;
padding: 1rem;
background-color: transparent;
background-image: linear-gradient(-45deg, transparent, transparent 2%, white 2%, white 85%, transparent, 85%, transparent), linear-gradient(to bottom right, #2ad, #2ad 90%, transparent 90%);
background-position: top left, 0.2em 0.2em;
background-repeat: no-repeat;
filter: drop-shadow(0 0 1px #0005); ">
    <div>
        <div>
            <h2 style="font-size: 18px; text-align: center; padding-bottom: 30px">Eduffirm</h2>
        </div>
        <span style="float: right"><img
                src="https://images.pexels.com/photos/614521/pexels-photo-614521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width="120" class="CToWUd" data-bit="iit"></span>
        <p style="padding-left: 2rem;">Dear {{name}}, </p>
        <p style=" padding-left: 2rem; line-height:22px"><b>{{otpCode}}</b> is your One Time Password (OTP) to rest password for changing
        password. This is valid for 15 mins only. Once you key in the above OTP in the designated box,
        you
        will be able to reset the password.</p>
        <p style="padding-left: 2rem;>Thank you.</p>
    </div>
    </div>
</div>`


const invitationTemplate =
    `<div style="background: #f2f2f2; padding: 1rem; height: fit-content;">
   <div style="font-family: Arial, Helvetica, sans-serif; background: #f2f2f2; max-width: 650px; padding: 30px; position: relative; width: 600px; margin: auto; padding: 1rem; background-color: transparent; background-image: linear-gradient(-45deg, transparent, transparent 2%, white 2%, white 85%, transparent, 85%, transparent), linear-gradient(to bottom right, #2ad, #2ad 90%, transparent 90%); background-position: top left, 0.2em 0.2em; background-repeat: no-repeat; filter: drop-shadow(0 0 1px #0005); ">
       <div>
           <div>
               <h2 style="font-size: 18px; text-align: center; padding-bottom: 30px">Eduffirm</h2>
           </div>
           <span style="float: right"><img src="https://images.pexels.com/photos/614521/pexels-photo-614521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="120" class="CToWUd" data-bit="iit"></span>
           <p style="padding-left: 2rem;">Dear {{name}}, </p>
           <p style="padding-left: 2rem; line-height: 22px">Setup your account for the Eduffirm. <a href="https://olt-app.onrender.com/login-page">Click here</a></p>
           <p style="padding-left: 2rem;">Thank you.</p>
       </div>
   </div>
</div>`

const tutorRejectsStudent = `<div style="background: #f1f1f1; padding: 1rem;">
<div style="font-family: Arial, Helvetica, sans-serif;
            background: #fff;
            max-width: 650px;
            padding: 30px;
            position: relative;
            width: fit-content;
            margin: auto;
            padding: 1rem;
            background-color: transparent;
            background-image: linear-gradient(49deg, transparent, transparent 2%, white 2%, white 89%, transparent, 85%, transparent), linear-gradient(to bottom right, #2ad, #2ad 90%, transparent 90%);
            background-position: top left, 0.2em 0.2em;
            background-repeat: no-repeat;
            filter: drop-shadow(0 0 1px #0005);
            position: relative;">
  <div style="padding-left: 1rem;">
    <span><img src="https://images.pexels.com/photos/614521/pexels-photo-614521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="120" class="CToWUd" data-bit="iit"></span>

    <p style="text-wrap: balance;
              box-sizing: border-box;
              background-repeat: no-repeat;
              font-family: Avenir, Avenir Next, Segoe UI, Helvetica, Arial, sans-serif;
              color: #3d474d;
              font-size: 17px;
              line-height: 160%;
              margin: 0 0 20px;">Tutor's Name: <b>{{name}}</b></p>
    <p style="text-wrap: balance;
              box-sizing: border-box;
              background-repeat: no-repeat;
              font-family: Avenir, Avenir Next, Segoe UI, Helvetica, Arial, sans-serif;
              color: #3d474d;
              font-size: 17px;
              line-height: 160%;
              margin: 0 0 20px;">I hope you're doing well. I wanted to personally reach out to you regarding your request for an online course. Unfortunately, due to prior commitments and schedule constraints, I am unable to accommodate your request at this time.

      I genuinely appreciate your interest in my tutoring services and your understanding of my current availability limitations. I'm sure you'll find a suitable tutor who can assist you with your learning needs.

      If you have any questions or need assistance in finding another tutor, please feel free to reach out to Eddufirm at <b>{{contactInformation}}</b>, and they will be happy to help you find an alternative tutor who can meet your requirements.

      I apologize for any inconvenience this may cause, and I wish you all the best in your academic endeavors.

      Thank you for considering me as your tutor.</p>

    <p style="text-wrap: balance;
              box-sizing: border-box;
              background-repeat: no-repeat;
              font-family: Avenir, Avenir Next, Segoe UI, Helvetica, Arial, sans-serif;
              color: #3d474d;
              font-size: 17px;
              line-height: 160%;
              margin: 0 0 10px;">Warm regards,
    </p>
    <p style="text-wrap: balance;
              box-sizing: border-box;
              background-repeat: no-repeat;
              font-family: Avenir, Avenir Next, Segoe UI, Helvetica, Arial, sans-serif;
              color: #3d474d;
              font-size: 17px;
              line-height: 160%;
              margin: 0 0 20px;"><b>{{name}}</b></p>
  </div>
</div>
</div>`

const paymentAlert = `<div style="background: #f1f1f1;
padding: 1rem;">
    <div style="font-family: Arial,Helvetica,sans-serif;
background: #fff;
max-width: 650px;
padding: 30px;
position: relative;
width: fit-content;
margin: auto;
padding: 1rem;
background-color: transparent;
background-image: linear-gradient(49deg, transparent, transparent 2%, white 2%, white 89%, transparent, 85%, transparent), linear-gradient(to bottom right, #2ad, #2ad 90%, transparent 90%);
background-position: top left, 0.2em 0.2em;
background-repeat: no-repeat;
filter: drop-shadow(0 0 1px #0005);
position: relative;">
        <div style="padding-left: 1rem;">
            <div>
                <span>
                    <img src="https://images.pexels.com/photos/614521/pexels-photo-614521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        width="120" class="CToWUd" data-bit="iit"></span>
            </div>

            <p style="text-wrap: balance;
        box-sizing: border-box;
        background-repeat: no-repeat;
        font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
        color: #3d474d;
        font-size: 17px;
        line-height: 160%;
        margin: 0 0 20px;">  Dear {{name}}</p>
            <p style="text-wrap: balance;
        box-sizing: border-box;
        background-repeat: no-repeat;
        font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
        color: #3d474d;
        font-size: 17px;
        line-height: 160%;
        margin: 0 0 20px;">We are writing to confirm that your payment for the course
               <b> [Course Name]</b> has been received and processed successfully. Thank you for choosing to enroll in
                our
                course!
            </p>
            <div style="box-sizing: border-box;
        background-repeat: no-repeat;
        border-radius: 15px;
        margin: 30px 0 35px;
        padding: 0;
        border: 1px solid #dce2e6;
        padding: 1rem;">
                <h2 style="box-sizing: border-box;
            background-repeat: no-repeat;
            font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
            font-size: 21px;
            font-weight: 600;
            line-height: 140%;
            margin: 0 0 20px;">Here are the payment details:
                </h2>
                <p style="text-wrap: balance;
        box-sizing: border-box;
        background-repeat: no-repeat;
        font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
        color: #3d474d;
        font-size: 17px;
        line-height: 160%;
        margin: 0 0 20px;">Course Name: [Course Name]</p>
                <p style="text-wrap: balance;
        box-sizing: border-box;
        background-repeat: no-repeat;
        font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
        color: #3d474d;
        font-size: 17px;
        line-height: 160%;
        margin: 0 0 20px;">Payment Amount: [Payment Amount]</p>
                <p style="text-wrap: balance;
        box-sizing: border-box;
        background-repeat: no-repeat;
        font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
        color: #3d474d;
        font-size: 17px;
        line-height: 160%;
        margin: 0 0 20px;">Payment Date: [Payment Date]</p>
                <p style="text-wrap: balance;
        box-sizing: border-box;
        background-repeat: no-repeat;
        font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
        color: #3d474d;
        font-size: 17px;
        line-height: 160%;
        margin: 0 0 20px;">Payment Method: [Payment Method Used]</p>
                <p style="text-wrap: balance;
        box-sizing: border-box;
        background-repeat: no-repeat;
        font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
        color: #3d474d;
        font-size: 17px;
        line-height: 160%;
        margin: 0 0 20px;">Please keep an eye on your email for these important updates.
                </p>
            </div>
            <p style="text-wrap: balance;
        box-sizing: border-box;
        background-repeat: no-repeat;
        font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
        color: #3d474d;
        font-size: 17px;
        line-height: 160%;
        margin: 0 0 20px;">If you have any questions or require additional information,
                please do not hesitate to contact our support team at <b>[Contact Information]</b>. We are here to assist
                you
                throughout your learning journey.
            </p style="text-wrap: balance;
        box-sizing: border-box;
        background-repeat: no-repeat;
        font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
        color: #3d474d;
        font-size: 17px;
        line-height: 160%;
        margin: 0 0 20px;">
            <p style="text-wrap: balance;
        box-sizing: border-box;
        background-repeat: no-repeat;
        font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
        color: #3d474d;
        font-size: 17px;
        line-height: 160%;
        margin: 0 0 10px;">Happy Learning!!</p>
            <div style="text-wrap: balance;
        box-sizing: border-box;
        background-repeat: no-repeat;
        font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
        color: #3d474d;
        font-size: 17px;
        line-height: 160%;">Best regards,</div>
            <div style="text-wrap: balance;
        box-sizing: border-box;
        background-repeat: no-repeat;
        font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
        color: #3d474d;
        font-size: 17px;
        line-height: 160%;
        margin: 0 0 20px;">Eduffirm</div>
        </div>
    </div>
</div>`

const bookingAlert=`<div style="    background: #f1f1f1;
padding: 1rem;">
     <div style="    font-family: Arial,Helvetica,sans-serif;
     background: #fff;
     max-width: 650px;
     padding: 30px;
     position: relative;
     width: fit-content;
     margin: auto;
     padding: 1rem;
     background-color: transparent;
     background-image: linear-gradient(49deg, transparent, transparent 2%, white 2%, white 89%, transparent, 85%, transparent), linear-gradient(to bottom right, #2ad, #2ad 90%, transparent 90%);
     background-position: top left, 0.2em 0.2em;
     background-repeat: no-repeat;
     filter: drop-shadow(0 0 1px #0005);
     position: relative;">
         <div style="padding-left: 1rem;">

             <span><img
                     src="https://images.pexels.com/photos/614521/pexels-photo-614521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                     width="120" class="CToWUd" data-bit="iit"></span>
             <p style="    text-wrap: balance;
             box-sizing: border-box;
             background-repeat: no-repeat;
             font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
             color: #3d474d;
             font-size: 17px;
             line-height: 160%;
             margin: 0 0 20px;"> Hello hari, </p>
             <p style="    text-wrap: balance;
             box-sizing: border-box;
             background-repeat: no-repeat;
             font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
             color: #3d474d;
             font-size: 17px;
             line-height: 160%;
             margin: 0 0 20px;">Thank you for booking a tutor with us! We're excited to
                 help you on your learning journey.
             <div style="box-sizing: border-box;
             background-repeat: no-repeat;
             border-radius: 15px;
             margin: 30px 0 35px;
             border: 1px solid #dce2e6;
             padding: 1rem;">

                 <h2 style="box-sizing: border-box;
               background-repeat: no-repeat;
               font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
               font-size: 21px;
               font-weight: 600;
               line-height: 140%;
               margin: 0 0 20px;">
                     Here are the details of your booking:
                 </h2>
                 <div style="    text-wrap: balance;
                 box-sizing: border-box;
                 background-repeat: no-repeat;
                 font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
                 color: #3d474d;
                 font-size: 17px;
                 line-height: 160%;
                 margin: 0 0 20px;">Tutor's Name: [Tutor's Name]</div>
                 <p style="    text-wrap: balance;
                 box-sizing: border-box;
                 background-repeat: no-repeat;
                 font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
                 color: #3d474d;
                 font-size: 17px;
                 line-height: 160%;
                 margin: 0 0 20px;">Date and Time: [Date and Time of the Session]</p>
                 <div style="    text-wrap: balance;
                 box-sizing: border-box;
                 background-repeat: no-repeat;
                 font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
                 color: #3d474d;
                 font-size: 17px;
                 line-height: 160%;
                 margin: 0 0 20px;">Course Name: [Course Name]</div>
                 <div style="    text-wrap: balance;
                 box-sizing: border-box;
                 background-repeat: no-repeat;
                 font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
                 color: #3d474d;
                 font-size: 17px;
                 line-height: 160%;
                 margin: 0 0 20px;">Link to to join/access the course <a
                         style="color: blue;text-decoration: underline;">link</a></div>
             </div>
             <p style="    text-wrap: balance;
             box-sizing: border-box;
             background-repeat: no-repeat;
             font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
             color: #3d474d;
             font-size: 17px;
             line-height: 160%;
             margin: 0 0 20px;">Happy Learning!!</p>
             <p style="    text-wrap: balance;
             box-sizing: border-box;
             background-repeat: no-repeat;
             font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
             color: #3d474d;
             font-size: 17px;
             line-height: 160%;
             margin: 0 0 20px;">Looking forward to a successful tutoring session!</p>
             <p style="    text-wrap: balance;
             box-sizing: border-box;
             background-repeat: no-repeat;
             font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
             color: #3d474d;
             font-size: 17px;
             line-height: 160%;
             margin: 0 0 20px;">Best regards,</p>
             <p style="    text-wrap: balance;
             box-sizing: border-box;
             background-repeat: no-repeat;
             font-family: Avenir,Avenir Next,Segoe UI,Helvetica,Arial,sans-serif;
             color: #3d474d;
             font-size: 17px;
             line-height: 160%;
             margin: 0 0 20px;">Eduffirm</p>
         </div>
     </div>
 </div>`

const templates = {
    registrationOtp: registrationOtp,
    invitationTemplate: invitationTemplate,
    ForgotOtp: ForgotOtp,
    tutorRejectsStudent: tutorRejectsStudent,
    paymentAlert: paymentAlert,
    bookingAlert: bookingAlert,
};
module.exports = templates;
