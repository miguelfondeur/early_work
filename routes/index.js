var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.post('/send',function(req, res, next){

  var name    = req.body.name;
  var email   = req.body.email;
  var message = req.body.message;

  //NodeMailer
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'miguelfondeur@gmail.com',
      pass: '2131mefe'
    }
  });

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: 'miguelfondeur.com', // sender address
      to: 'miguelfondeur@gmail.com',
      subject: 'Message from miguelfondeur.com', // Subject line
      text: 'You have a new submission with the following details... Name: '+name+' Email: '+email+' Message: '+message, // plaintext body
      html: '<h1 style="color: darkblue; font-weight: 300;">You\'ve got a new message!</h1><br><ul style="list-style: none;"><li>Name: '+name+'</li><li>Email: '+email+'</li><li>Message: '+message+'</li></ul>' // html body
  };

  //Form Validation
  req.checkBody('name','Name field is required').notEmpty();
  req.checkBody('email','Email field is required').notEmpty();
  req.checkBody('email','Not valid email address').isEmail();
  req.checkBody('message','Message field is Required').notEmpty();

  //If Errors
  var errors = request.validationErrors();

  if(errors){
    res.render('register', {
      errors: errors,
      name: name,
      email: email,
      message: message
    });
  } else {
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.redirect('/');
        }else {
          console.log('Message Sent: '+info);
          req.flash('success', 'Your email has sent successfully');
          res.redirect('/');
        }
    });


  }
});

module.exports = router;
