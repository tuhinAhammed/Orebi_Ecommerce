function emailSendTemplate(token){
    return `<div><img alt=""src=https://i.ibb.co/0CwR9wV/OREBI.png style=width:100px><h2 style=font-size:24px;color:#262626>This Mail Is For Verify Your Mail</h2><p style=font-size:16px;color:#565555>Please Varify Your Email To connect Orebi Ecommerce. Wish for a Great Journey</p><button style="padding:5px 12px;color:#fff;background:#262626;border-radius:5px;font-size:20px">Click For Vaify</button></div> </br> ,
    ${token}`
}
module.exports = emailSendTemplate