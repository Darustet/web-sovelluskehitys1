'use strict';

var notes = [];
loadList();

function addItem() {
	let textbox = document.getElementById('item');
	var itemText = textbox.value;
	textbox.value = '';
	textbox.focus();
	var newItem = {title: itemText, quantity: 1};
	var ifDublicate = false;
	notes.forEach(item => {
		if (newItem.title == item.title) {
			item.quantity++;
			ifDublicate = true;
		}
	})
	if (!ifDublicate) {
		notes.push(newItem);
	}
	saveList();
	displayList();
}

function displayList() {
	var table = document.getElementById('list');
	table.innerHTML = '';
	for (var i = 0; i<notes.length; i++) {
		var note = notes[i];
		var node = document.createElement('tr');
		var html = '<td>'+note.title+'</td><td>'+note.quantity+'</td><td><a href="#" onClick="deleteIndex('+i+')">delete</td>';
	    node["innerHTML"] = html;
		table.appendChild(node);
	}
}

function deleteIndex(i) {
	notes.splice(i, 1);
	displayList();
}

let button = document.getElementById('add');
button.onclick = addItem;

function saveList() {
	localStorage.notes = JSON.stringify(notes);
}

function loadList() {
	console.log('loadList');
	if (localStorage.notes) {
		notes = JSON.parse(localStorage.notes);
		displayList();
	}
}
