var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.post('/send',function(req, res, next){
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
      text: 'You have a new submission with the following details... Name: '+req.body.name+' Email: '+req.body.email+' Message: '+req.body.message, // plaintext body
      html: '<h1 style="color: darkblue; font-weight: 300;">You\'ve got a new message!</h1><br><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
          res.redirect('/');
      }else {
        console.log('Message Sent: '+info);
        res.redirect('/');
      }
  });

});

module.exports = router;
