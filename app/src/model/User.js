"use strict";

const UserStorage = require('./UserStorage');

class User
{
	constructor(body) {
		this.body = body;
	}

	login = async function() {
		const body = this.body;
		const {id, pw} = await UserStorage.getUserInfo(body.id);
		if (id) {
			if ((id === body.id) && (pw === body.pw)) {
				return { success: true };
			}
			return { success: false, msg: 'wrong pw' };
		}

		return { success: false, msg: 'no id' };
	}

	register = async function() {
		const response = await UserStorage.save(this.body);
		return response;
	}
}

module.exports = User;