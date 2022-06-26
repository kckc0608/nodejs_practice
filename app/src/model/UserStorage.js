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
			{} // �ʱ⿡ ������ �� = �� ��ü
		);
		return newUsers;
	}
}

module.exports = UserStorage;