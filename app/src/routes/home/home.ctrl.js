"use strict";
const main = function(req, res) {
	res.render('home/index');
};

const login = function(req, res) {
	res.render('home/login');
};

module.exports = {
	main,
	login, // value �� ������ �ڵ����� ���� �̸��� value �� ��Ī
};