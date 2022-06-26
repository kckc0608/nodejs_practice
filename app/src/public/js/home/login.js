"use strict";

const doc = document;
const id = doc.querySelector('#id');
const pw = doc.querySelector('#password');
const loginBtn = doc.querySelector('button');

const login = function() {
	console.log(id.value);
	console.log(pw.value);

	const req = {
		"id": id.value,
		"pw": pw.value,
	};

	console.log(req);

	fetch('login', {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(req),
	})
	.then((res) => res.json())
	.then((data) => {
		if (data.success)
		{
			console.log(location.href);
			location.href = './';
		}
		else {
			alert(data.msg);
		}
	})
	.catch((err) => {
		console.error(new Error("error"));
	});
};

loginBtn.addEventListener('click', login);