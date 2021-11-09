let names = ["Arianna Munoz", "Annie Harris", "Lennon Kidd", "Leroy Mclaughlin", "Layla Phillips", "Nicole Zhang", "Julia Brown", "Joel Padilla", "Mateo Snow", "Christine Ferguson", "Jordon Richards", "Estrella Schmidt", "Tristen Pacheco", "Silas Odom", "Brock Irwin", "Brynn Fernandez", "Ezra Potts", "Luna Christian", "Monique Hansen", "Devyn Beard", "Aryanna Hickman", "Quintin Sosa", "Clarence Hoffman", "Dangelo Carr", "Cole Sutton", "Ian Dudley", "Adyson Todd", "Sandra Reilly", "Patience West", "Carmen Moody"]
let titles = ["Artist", "Computer Hardware Engineer", "Actuary", "Human Resources Assistant", "IT Manager", "Financial Advisor", "Mason", "Diagnostic Medical Sonographer", "Executive Assistant", "Pharmacist", "Database administrator", "Art Director", "Dental Hygienist", "Sports Coach", "Lawyer", "Architect", "Electrician", "College Professor", "Secretary", "Landscaper & Groundskeeper", "Event Planner", "Fitness Trainer", "Professional athlete", "Farmer", "Public Relations Specialist", "Auto Mechanic", "Microbiologist", "Reporter", "Interpreter & Translator", "Housekeeper"]
let phones = ["2944679313", "5627319381", "6902312736", "8412213550", "2467244620", "9582904191", "8732309857", "6422924033", "3852725137", "5698535101", "5969546940", "4225738496", "7295153355", "8903199509", "3499689494", "2174774211", "2783706737", "6535414982", "9889196029", "3177551997", "5153663786", "8414324410", "6608687805", "2712742489", "4029255327", "9757896817", "2507031524", "7502691996", "5574376476", "3399487226"]
let emails = ["miltchev@gmail.com", "birddog@msn.com", "sequin@yahoo.ca", "jfriedl@icloud.com", "msroth@att.net", "facet@optonline.net", "mallanmba@comcast.net", "jigsaw@att.net", "rbarreira@hotmail.com", "tskirvin@icloud.com", "jaffe@gmail.com", "mxiao@optonline.net", "glenz@gmail.com", "carcus@sbcglobal.net", "parsimony@sbcglobal.net", "bradl@att.net", "campbell@comcast.net", "jorgb@gmail.com", "jshirley@yahoo.ca", "stecoop@live.com", "treit@optonline.net", "jdray@sbcglobal.net", "crimsane@gmail.com", "denism@live.com", "bonmots@yahoo.ca", "eurohack@outlook.com", "boftx@yahoo.ca", "gemmell@msn.com", "pgottsch@msn.com", "jamuir@live.com"]
let persons = []
let ctx

function setup() {
	background(0)
	let cnv = createCanvas(350, 200, SVG);
	cnv.parent('#card');

	textFont(font)
	strokeCap(SQUARE);
	interface()

	for (let i = 0; i < names.length; i++) {
		let human = new Person(names[i], titles[i], phones[i], emails[i])
		persons.push(human)
	}
}

let padding = 15
let gutter = 0
let xN = 10
let yN = 6
let xSize = (350 - padding * 2 - gutter * (xN - 1)) / xN
let ySize = (200 - padding * 2 - gutter * (yN - 1)) / yN
let tsize = 10
let thisNumber = 0
let changed = false

function draw() {
	background(255)
	// translate(width/2, height/2)
	// rotate(-0.4)
	// translate(-width/2 +25, -height/2)

	// blendMode(DIFFERENCE)

	if (thisNumber > names.length - 1) {
		thisNumber = 0
	}
	if (thisNumber < 0) {
		thisNumber = names.length - 1
	}

	if(mouseX<0){mouseX = 0}
	if(mouseX>width){mouseX = width}
	if(mouseY<0){mouseY = 0}
	if(mouseY>height){mouseY = height}


	translate(padding, padding)
	grid()
	interface()

	if (!fname && !ftitle && !femail && !fphone) {
		creator(persons[thisNumber])
	} else {
		let newPerson = new Person(fname, ftitle, fphone, femail)
		creator(newPerson)
	}
}

function creator(content, a, b, c, d) {

	let mouseXX = int((mouseX - padding) / xSize) * xSize
	let mouseYY = int((mouseY - padding) / ySize) * ySize

	strokeWeight(0)
	push()
	translate(0, 2)
	textG(content.name, 0, 0, mouseXX, true)
	pop()

	push()
	translate(5, 2)
	textG(content.email, int(mouseXX / (xSize + gutter)),
		0, width - mouseXX - padding * 2.1, false)
	pop()

	push()
	translate(0, 2)
	textG('[' + content.title + ']', 0, int(mouseYY / (ySize + gutter)),
		mouseXX, true)
	pop()

	push()
	translate(5, 2)
	textG('(' + content.phone.slice(0, 3) + ') ' + content.phone.slice(3, 6) + '-' + content.phone.slice(6, 10), int(mouseXX / (xSize + gutter)),
		int(mouseYY / (ySize + gutter)), width - mouseXX - padding * 2.1, false)
	pop()

	stroke('blueviolet')
	strokeWeight(3)
	line(0, int((mouseY - padding) / ySize) * ySize, width - padding * 2, int((mouseY - padding) / ySize) * ySize)
	line(int((mouseX - padding) / xSize) * xSize, 0, int((mouseX - padding) / xSize) * xSize, height - padding * 2)
	// line(width - padding * 2, 0, width - padding * 2, height - padding * 2)
	// line(0, height - padding * 2, width - padding * 2, height - padding * 2)
	document.getElementById("download").addEventListener("click", function () {
		if (!fname && !ftitle && !femail && !fphone) {
			save(persons[thisNumber].name + ".svg");
		} else {
			save(fname + ".svg");
		}
	})
}

function grid() {
	stroke(230)
	strokeWeight(2)
	for (let i = 0; i < xN; i++) {
		for (let j = 0; j < yN; j++) {
			rect((xSize + gutter) * i, (ySize + gutter) * j, xSize, ySize)
		}
	}
}

function textG(content, a, b, c, d) {
	noStroke()
	push()
	translate(0, tsize)
	textSize(tsize)
	if (d) {
		textWrap(WORD)
	} else {
		textWrap(CHAR)
	}
	textAlign(LEFT, BASELINE)
	textLeading(tsize * 1.2)
	text(content, (xSize + gutter) * a, (ySize + gutter) * b, c)
	pop()
}

function keyPressed() {
	if (keyCode === ENTER) {
		if (!fname && !ftitle && !femail && !fphone) {
			save(persons[thisNumber].name + ".svg");
		} else {
			save(fname + ".svg");
		}
	}
	if (keyCode === RIGHT_ARROW) {
		thisNumber++
	}
	if (keyCode === LEFT_ARROW) {
		thisNumber--
	}

	if (keyCode === UP_ARROW) {
		tsize++
	}
	if (keyCode === DOWN_ARROW) {
		tsize--
	}
	

}