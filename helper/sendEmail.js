const nodemailer = require("nodemailer")
async function emailVarificationMail(email , emailVerificationTemplate){
    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "tuhinahamed2030@gmail.com",
          pass: "bkovubyvlpeskrby",
        },
      });
      const info = await transporter.sendMail({
        from: 'Orebi Ecommerce', // sender address
        to: email, // list of receivers
        subject: "Need Email Varification", // Subject line
        html:emailVerificationTemplate , // html body
      });
}

module.exports = emailVarificationMail