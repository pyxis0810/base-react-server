var express = require('express');
var router = express.Router();

var config = require('../config');

var apiKey = config.mail.apiKey;
var domain = config.mail.domain;
var reservationEmail = config.mail.reservation;
var mailgun = require('mailgun-js')({apiKey: apiKey, domain: domain});

var ReservationModel = require('../models/reservation');

router.get('/', function() {
  ReservationModel.find({}, function(err, reservations) {
    if (err) { return next(err); }

    res.json(reservations);
  });
});

router.post('/', function(req, res, next) {
  var Reservation = new ReservationModel({
    address:  req.body.address,
    banner:   req.body.banner,
    date:     req.body.date,
    email:    req.body.email,
    member:   req.body.member,
    phone:    req.body.phone,
    purpose:  req.body.purpose,
    subject : req.body.subject,
    text:     req.body.text,
    type:     req.body.type,
    username: req.body.username,
    vehicle:  req.body.vehicle
  });


  Reservation.save(function(err, reservation) {
    if (err) { return next(err); }

    var data = {
      from: username + ' <' + email + '>',
      to: reservationEmail,
      subject: subject,
      text: username + ' <' + contactEmail + '>' + ', ' +
      phone + ', ' +
      text + ', ' +
      address + ', ' +
      banner + ', ' +
      date + ', ' +
      member + ', ' +
      purpose + ', ' +
      type + ', ' +
      vehicle
    };

    mailgun.messages().send(data, function (error, body) {
      if (error) { return next(error); }
      console.log(body);
    });

    res.json(reservation);
  });
});

module.exports = router;
