"use strict";

const fs = require('fs').promises;

class UserStorage
{
	static users;

	static #getUsers = function(data, args) {
		const users = JSON.parse(data);
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
	};

	static getUsers = function(...args) {
		return fs
			.readFile('./src/database/user.json')
			.then((data) => {
				return this.#getUsers(data, args);
			})
			.catch(console.err);
	}

	static getUserInfo = function(id) {
		return fs
		.readFile('./src/database/user.json')
		.then((data) => {
			const users = JSON.parse(data);
			const idx = users.id.indexOf(id);
			const userInfo = Object.keys(users).reduce((acc, cur) => {
				acc[cur] = users[cur][idx];
				return acc;
			}, {});

			return userInfo;
		})
		.catch((err) => console.error(err));
	}

	static save = async function(userInfo) {
		const users = await this.getUsers("id", "pw", "name");
		users.id.push(userInfo.id);
		users.pw.push(userInfo.pw);
		users.name.push(userInfo.name);
		fs.writeFile('./src/database/user.json', JSON.stringify(users));
		return {success: true};
	}
}

module.exports = UserStorage;