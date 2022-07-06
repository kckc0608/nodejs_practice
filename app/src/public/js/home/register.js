"use strict";

const doc = document;
const name = doc.querySelector('#name');
const id = doc.querySelector('#id');
const pw = doc.querySelector('#pw');
const pwCheck = doc.querySelector('#pw-check');
const email = doc.querySelector('#email');
const registerBtn = doc.querySelector('button');

const register = function() {

	if (!id.value)
	{
		return alert("아이디를 입력해주세요.");
	}

	if (pw.value !== pwCheck.value)
	{
		return alert("비밀번호가 일치하지 않습니다.");
	}

	const req = {
		name: name.value,
		id: id.value,
		pw: pw.value,
		email: email.value,
	};
	
	console.log(req);

	fetch('register', {
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
			location.href = './login';
		}
		else {
			alert(data.msg);
		}
	})
	.catch((err) => {
		console.error(new Error("error"));
		console.error(err);
	});
};

registerBtn.addEventListener('click', register);
registerBtn.addEventListener('submit', function () {
	preventDefault();
});