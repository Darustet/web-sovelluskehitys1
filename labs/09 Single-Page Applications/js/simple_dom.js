//console.log('page loaded');

console.log(document);

const input = document.querySelector('#userForm');

input.addEventListener('input', updateValue);

	function updateValue(e) {
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value;
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	var password = document.querySelector('#userForm input[type="password"]').value;
	paragraphs[1].innerHTML = password;
	//paragraphs[1].innerHTML = 'Hello World!';
}
document.querySelector('#userForm input[type="email"]').onclick = function() {
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};
