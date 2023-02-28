const form = document.getElementsByTagName('form')[0];
let names = [];
let numbers = [];

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const name = document.getElementById("name").value;
	const number = document.getElementById("number").value;
	
	if (isValidName(name) && isValidNumber(number)) {
		names.push(name)
		numbers.push(number)
		let row = makeHTML(name, number);
		document.querySelector("tbody").innerHTML += row;
		resetForm();
	}
})

function isValidName(name) {
	if (names.includes(name)){
		alert("This contact already exists.");
		return false;
	}
	return true;
}

function isValidNumber(number) {
	if (numbers.includes(number)){
		alert("This number already exists.");
		return false;
	}
	if (isNaN(number)){
		alert("Please input only numbers in this field.");
		return false;
	}
	return true
}

function makeHTML(name, number) {
	let row;
	row = `<tr>`;
	row += `<td>${name}</td>`;
	row += `<td>${number}</td>`;
	row += `</tr>`;
	return row
}

function resetForm() {
	document.getElementById("name").value = "";
	document.getElementById("number").value = "";
}