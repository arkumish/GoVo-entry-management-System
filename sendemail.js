const nodemailer = require('nodemailer');
require('dotenv').config();



exports.SendEmail = function( req,res){

    console.log("i am sending mail here");
      var mssg = req.body.message;
      var tosend = req.body.tosend;

      console.log(mssg,tosend);
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:  process.env.EMAIL, // Put your gmail account
            pass: process.env.PASSWORD // Put your gmail password
        }
    });
    
    // var mssg = "Check Out Sucessfull \n Your Details : " + "\nName : " + req.body.vName +"\nEmail : " + req.body.vEmail + "\n Phone : " + req.body.vPhone + "\n CheckIn : " + req.body.CheckIn + "\n CheckOut : " + req.body.CheckOut + "\n Host Details : \n Name : " + req.body.hname + "\n Address : " + req.body.CheckIn;
    
    // Step 2
    let mailOptions = {
        from: process.env.EMAIL, // TODO: email sender
        to: tosend, // TODO: email receiver
        subject: 'Checkout Successfull',
        text: mssg
    };
    
    // Step 3
    
    
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('Error occurs', err);
            res.status(500).send("failed")
        }
        console.log('Email sent!!!');
        res.send("Mail Send Successfully");
    });
    
    
    }
