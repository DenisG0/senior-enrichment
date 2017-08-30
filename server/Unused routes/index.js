'use strict';

const router = require('express').Router();
module.exports = router;

router.use('/campus', require('./campus'));
router.use('/user', require('./user'));


// Make sure this is after all of
// the registered routes!
// router.get('/',function(){
//   res.send("IM HERE")
// })

router.use(function (req, res) {
  res.status(404).end();
});
