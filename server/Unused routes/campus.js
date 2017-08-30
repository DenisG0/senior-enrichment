'user strict';

const express = require('express');
const router = express.Router();
const models = require('../../db/models');
const Campus = models.Campus;
module.exports = router;

router.get('/',function (req, res, next){
    Campus.findAll({where: req.query})
    .then(campus => res.json(campus))
    .catch(next);
})
