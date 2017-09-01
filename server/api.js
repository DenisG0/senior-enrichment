'use strict'
const api = require('express').Router()
const db = require('../db')
const models = require('../db/models');
const Campus = models.Campus;
const User = models.User;

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/campus', function(req, res, next){
    Campus.findAll({include: [User]})
    .then(campus => res.json(campus))
    .catch(next);
})

api.get('/user', function(req, res, next){
	User.findAll({include: [Campus]})
	.then(user => res.json(user))
	.catch(next);
})

api.get('/campus/:campusId', function(req, res, next){
	Campus.findOne({
		where: {
			id: req.params.campusId,
		},	include: [User]
	}).then(function(info){
		res.json(info);
	}).catch(next);
})

api.get('/user/:userId', function(req, res, next){
	User.findOne({
		where:{
			id: req.params.userId
		}, include: [Campus]
	}).then(function(info){
		res.json(info);
	}).catch(next);
})

api.post('/campus', function(req, res, next){
	Campus.create({
		name: req.body.name,
		image: req.body.image
	})
	.then(info => res.status(201).json(info))
	.catch(next);
})

api.post('/user', function(req, res, next){
	User.create({
		name: req.body.name,
		email: req.body.email,
		Gender: req.body.Gender,
		campusId: req.body.campusId,
	})
	.then(info => res.status(201).json(info))
	.catch(next);
})

api.delete('/campus/:campusId', function(req, res, next){
	Campus.findOne({
		where:{
			id: req.params.campusId
		}
	}).then(function(info){
		info.destroy()
		.then(() => res.status(204).end())
		.catch(next);
	})
})

api.delete('/user/:userId', function(req, res, next){
	User.findOne({
		where:{
			id: req.params.userId
		}
	}).then(function(info){
		info.destroy()
		.then(() => res.status(204).end())
		.catch(next);
	})
})

api.put('/campus/:campusId', function(req, res, next){
	console.log(req.body, "REQBODY")
	return Campus.update(
		{
			name: req.body.name,
			image: req.body.image
		},
		{
			where: {
				id: req.params.campusId
			}
		}
	)
	.then((updatedInfo) => res.status(200).json(updatedInfo).end())
	.catch(next);
})

api.put('/user/:userId', function(req, res, next){
	return User.update(
		{
			name: req.body.name,
      email: req.body.email,
      Gender: req.body.Gender,
      campusId: req.body.campusId,
		},
		{
			where: {
				id: req.params.userId
			}
		}
	)
		.then((updatedInfo) => res.status(200).json(updatedInfo).end())
		.catch(next);
})


module.exports = api
