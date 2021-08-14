const nodemailer = require("nodemailer");

const email={
  "host": "smtp.mailtrap.io",
  "port": 587,
  "secure": false, // true for 465, false for other ports
  "auth": {
    "user": "username", // generated ethereal user
    "pass": "password", // generated ethereal password
  }
}

const send=async(data)=>{
  nodemailer.createTransport(email).sendMail(data,function(error,info){
    if(error){
      console.log(error);
    } else{
      console.log(info);
      return info.response;
    }
  });
};

const content={
  from: "sender email", // sender address
  to: "receiver email", // list of receivers
  subject: "인증번호 랜덤 생성 테스트", // Subject line
  text: `인증번호는 ${Math.floor(Math.random()*1000000)}입니다.`, // plain text body
}

send(content);