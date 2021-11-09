class Person {
	constructor(name, title, phone, email) {
		this.name = name
		this.title = title
		this.phone = phone
		this.email = email
	}
}

function preload() {

	font = loadFont('nimbus-sans-l_bold.ttf')
}

let fname, ftitle, femail, fphone

function interface() {
	fname = document.getElementById("fname").value;
	ftitle = document.getElementById("ftitle").value;
	femail = document.getElementById("femail").value;
	fphone = document.getElementById("fphone").value;
}