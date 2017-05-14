var express = require('express');
var router = express.Router();

var config = require('../config');

var apiKey = config.mail.apiKey;
var domain = config.mail.domain;
var contactEmail = config.mail.contact;
var mailgun = require('mailgun-js')({apiKey: apiKey, domain: domain});

var ContactModel = require('../models/contact');

router.get('/', function() {
  ContactModel.find({}, function(err, contacts) {
    if (err) { return next(err); }

    res.json(contacts);
  });
});

router.post('/', function(req, res, next) {
  var email = req.body.email;
  var phone = req.body.phone;
  var subject = req.body.subject;
  var text = req.body.text;
  var username = req.body.username;

  var Contact = new ContactModel({
    email:    email,
    phone:    phone,
    subject:  subject,
    text:     text,
    username: username
  });

  Contact.save(function(err, contact) {
    if (err) { return next(err); }

    var data = {
      from: username + ' <' + email + '>',
      to: contactEmail,
      subject: subject,
      text: username + ' <' + contactEmail + '>' + ', ' +
            phone + ', ' +
            text
    };

    mailgun.messages().send(data, function (error, body) {
      if (error) { return next(error); }
      console.log(body);
    });

    res.json(contact);
  });
});

module.exports = router;
