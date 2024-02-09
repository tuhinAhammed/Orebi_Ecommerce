const nodemailer = require("nodemailer")
async function emailVarification(email){
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
        html: '<div><img alt=""src=https://i.ibb.co/0CwR9wV/OREBI.png style=width:100px><h2 style=font-size:24px;color:#262626>This Mail Is For Verify Your Mail</h2><p style=font-size:16px;color:#565555>Please Varify Your Email To connect Orebi Ecommerce. Wish for a Great Journey</p><button style="padding:5px 12px;color:#fff;background:#262626;border-radius:5px;font-size:20px">Click For Vaify</button></div>', // html body
      });
}

module.exports = emailVarification