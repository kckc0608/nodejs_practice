"use strict";
const main = function(req, res) {
	res.render('home/index');
};

const login = function(req, res) {
	res.render('home/login');
};

module.exports = {
	main,
	login, // value 가 없으면 자동으로 같은 이름의 value 로 매칭
};