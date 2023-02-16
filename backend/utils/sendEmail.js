const nodeMailer = require("nodemailer");

const sendEmail = async(options)=>{

    // send mail feom my side as a transporter
    const transporter = nodeMailer.createTransport({
        host:process.env.SMPT_HOST,
        port:process.env.SMPT_PORT,
        secure:true,
        service:process.env.SMPT_SERVICE,
        auth:{
            user:process.env.SMPT_EMAIL, //SMPT : simple mail transfer protocol
            pass:process.env.SMPT_PASSWORD
        }
    });

    //send mail to another person oroptin to send in mail
    const mailOptions ={
        from:process.env.SMPT_EMAIL,
        to:options.email,
        subject:options.subject,
        text:options.message
    };

    //main line to send the mail
    await transporter.sendMail(mailOptions);
};

module.exports=sendEmail


