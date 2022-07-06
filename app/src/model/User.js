"use strict";

const UserStorage = require('./UserStorage');

class User
{
	constructor(body) {
		this.body = body;
	}

	login = function() {
		const body = this.body;
		const {id, pw} = UserStorage.getUserInfo(body.id);
		if (id) {
			if ((id === body.id) && (pw === body.pw)) {
				return { success: true };
			}
			return { success: false, msg: 'wrong pw' };
		}

		return { success: false, msg: 'no id' };
	}

	register = function() {
		UserStorage.save(this.body);
		return { success: true };
	}
}

module.exports = User;