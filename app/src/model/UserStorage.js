"use strict";

class UserStorage
{
	static #users = {
		id: ["kckc0608", "test"],
		pw: ["cls", "test"],
		name: ['naegchi', 'tset'],
	};

	static getUsers = function(...args) {
		const users = this.#users;
		const newUsers = args.reduce(
			(acc, cur) => {
				if (users.hasOwnProperty(cur)) {
					acc[cur] = users[cur];
				}
				return acc;
			},
			{} // ÃÊ±â¿¡ Á¸ÀçÇÒ °ª = ºó °´Ã¼
		);
		return newUsers;
	}

	static getUserInfo = function(id) {
		const users = this.#users;
		const idx = users.id.indexOf(id);
		const userInfo = Object.keys(users).reduce((acc, cur) => {
			acc[cur] = users[cur][idx];
			return acc;
		}, {});

		return userInfo;
	}
}

module.exports = UserStorage;