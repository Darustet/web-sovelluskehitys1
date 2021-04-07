
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

var list = document.createElement('TABLE');
for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	var item = list.insertRow(i);
	item.innerHTML = books[i];

	list.appendChild(item);
}
document.body.appendChild(list);

