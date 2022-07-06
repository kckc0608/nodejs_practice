"use strict";

const User = require('../../model/User');

const output = {
	main: function(req, res) {
		res.render('home/index');
	},
	login: function(req, res) {
		res.render('home/login');
	},
	register: function(req, res) {
		res.render('home/register');	
	},
};

const process = {
	login: function(req, res) {
		const user = new User(req.body);
		const response = user.login();
		
		return res.json(response);
	},

	register: function(req, res) {
		const user = new User(req.body);
		const response = user.register();
		
		return res.json(response);
	},
};

module.exports = {
	output, // value 가 없으면 자동으로 같은 이름의 value 로 매칭
	process,
};