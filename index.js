
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your email@gmail.com',
    pass: '16characterCode' //app password not user password
  }
});

var mailOptions = {
  from: 'your email@gmail.com',
  to: 'email@gmail.com', 
  subject: 'Sending Email using Node.js', 
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});