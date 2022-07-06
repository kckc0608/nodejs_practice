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

	static save = function(userInfo) {
		const users = this.#users;
		users.id.push(userInfo.id);
		users.pw.push(userInfo.pw);
		users.name.push(userInfo.name);
		console.log(users);
	}
}

module.exports = UserStorage;