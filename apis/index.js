var express = require('express');
var router = express.Router();

var auth = require('./auth');
var locale = require('./locale');
var info = require('./info');
var posts = require('./posts');
var comments = require('./comments');
var contact = require('./contact');

router.use('/auth', auth);
router.use('/locale', locale);
router.use('/info', info);
router.use('/posts', posts);
router.use('/comments', comments);
router.use('/contact', contact);

module.exports = router;
