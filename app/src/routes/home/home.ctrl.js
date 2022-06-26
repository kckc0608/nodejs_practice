"use strict";

const UserStorage = require('../../model/UserStorage');

const output = {
	main: function(req, res) {
		res.render('home/index');
	},
	login: function(req, res) {
		res.render('home/login');
	},
};

const process = {
	login: function(req, res) {
		const id = req.body.id;
		const pw = req.body.pw;
		const response = {};

		const users = UserStorage.getUsers('id', 'pw');
		console.log(users);

		if (users.id.includes(id))
		{
			const idIdx = users.id.indexOf(id);
			if (users.pw[idIdx] === pw)
			{
				response.success = true;
				return res.json(response);
			}
		}

		response.success = false;
		response.msg = "failed to login";
		
		return res.json(response);
	},
};

module.exports = {
	output, // value 가 없으면 자동으로 같은 이름의 value 로 매칭
	process,
};