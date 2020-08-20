var departments = ['Physics', 'MicroBiology', 'Mathematics', 'Chemistry', 'Psychology', 'Medicine', 'Agriculture Extension', 'Home Economics', 'Law', 'Philosophy', 'Creative Arts'];
function randomDepartGen(){
	var o = Math.floor(Math.random() * departments.length)
	return departments[o]
}
var students = [{
		studentdata: {
			name: 'Lena Jeremiah',
			matricno: 180806122,
			department: 'Mathematics',
			sex: 'M',
			age: 17,
			skills: 'Singing, Programming, Design'
		}
	},
	{
		studentdata: {
			name: 'Lena Marvelous',
			matricno: 190884953,
			department: 'Physics',
			sex: 'F',
			age: 15,
			skills: 'Singing, Having Fun, Picking Beans'
		}
	},
	{
		studentdata: {
			name: 'Olawale Catalyst',
			matricno: 190905958,
			department: 'Psychology',
			sex: 'M',
			age: 24,
			skills: 'Teaching, Coding'
		}
	},
	{
		studentdata: {
			name: 'Arit Essang',
			matricno: 190805849,
			department: 'Medicine And Surgery',
			sex: 'F',
			age: 8,
			skills: "Eating, Picking groundnut, Calling me Bloooooda"
		}
	}
];
var buttonnext = document.querySelectorAll('.btn-next');
buttonnext.forEach(button => button.addEventListener('click', function () {
	var input = button.parentElement.querySelectorAll('input');
	var inputArray = [];
	for (let element of input) {
		inputArray.push(element)
	}
	var selected = 0;
	for (let singleinput of input) {
		if (singleinput.getAttribute('data-isinput')) {
			selected += 1;
		}
	}
	if (selected < 1) {
		if (button.parentElement.lastElementChild.tagName !== 'P') {
			var resultmessage = document.createElement('p');
			resultmessage.textContent = 'Please input a value'
			resultmessage.style.color = 'red';
			resultmessage.style.textAlign = 'center';
			button.parentElement.appendChild(resultmessage);
		}

	} else {
		button.parentElement.style.animation = 'fadeOuttaViewFromRight 1s forwards';
		button.parentElement.nextElementSibling.style.animation = 'fadeIntoViewFromRight 1s forwards';
	}
}));
var buttonprev = document.querySelectorAll('.btn-prev');
buttonprev.forEach(button => button.addEventListener('click', function () {
	button.parentElement.style.animation = 'fadeOuttaViewFromLeft 1s forwards';
	button.parentElement.previousElementSibling.style.animation = 'fadeIntoViewFromLeft 1s forwards';
}));
var allInputs = document.querySelectorAll('input');
allInputs.forEach(reason => reason.addEventListener('input', function () {
	if (reason.parentElement.lastElementChild.tagName === 'P') {
		reason.parentElement.lastElementChild.remove();
	}
	if (reason.type === 'text' || reason.type === 'password') {
		if (reason.value !== '') {
			reason.setAttribute('data-isinput', true);
		}
	} else {
		reason.setAttribute('data-isinput', true)
	};
}))

var color = document.getElementById('color');
color.addEventListener('input', function () {
	document.querySelector('header').style.backgroundColor = color.value;
	document.querySelectorAll('.introsection').forEach(function (element) {
		element.style.border = `2px solid ${color.value}`;
	});
	document.querySelectorAll('input').forEach(function (input) {
		input.addEventListener('focus', function () {
			input.style.borderColor = color.value;
		})
	})
	document.getElementById('main').style.background = color.value + '33';
});
var allInputs = document.querySelectorAll('input');
allInputs.forEach(input => {
	input.addEventListener('input', function checkValidInput() {
		if (input.type === 'radio') {
			input.setAttribute('data-valid', true);
		} else if (input.type === 'password' || input.type === 'text' || input.type === 'email') {
			checkEmptyInput(input);
		}
	});
})

function checkEmptyInput(input) {
	if (input.value === '') {
		input.setAttribute('data-valid', false);
	} else {
		input.setAttribute('data-valid', true);
	}
}

document.getElementById('finalbtn').addEventListener('click', () => {
	console.log(checkMatch());
	detailsGenerator();
})

function checkMatch() {
	var childname = document.getElementById('childname').value;
	var match = 0;
	for (let student of students) {
		if (student.studentdata.name === childname) {
			match += 1;
			var matched_student = student;
		}
	}
	if (match === 1) {
		var details = {
			student_details: matched_student,
			match: true,
		}
	} else {
		var details = {
			student_details: null,
			match: false,
		}
	}
	return details;
}


function detailsGenerator() {
	if (checkMatch().match) {
		var result = document.getElementById('result');
		var unorderedList = document.createElement('ol');
		var name = document.createElement('li');
		var matricno = document.createElement('li');
		var department = document.createElement('li');
		var prev = document.getElementById('finalprev');
		name.textContent = `Student Name: ${checkMatch().student_details.studentdata.name}`;
		matricno.textContent = `Matric No: ${checkMatch().student_details.studentdata.matricno}`;
		department.textContent = `Department: ${checkMatch().student_details.studentdata.department}`;
		unorderedList.appendChild(name);
		unorderedList.appendChild(matricno);
		unorderedList.appendChild(department);
		result.appendChild(unorderedList);
		result.insertBefore(unorderedList, prev);

	} else {
		var result = document.getElementById('result');
		if (result.lastElementChild.tagName !== 'H5') {
			var error = document.createElement('h5');
			error.setAttribute('id', 'error');
			error.textContent = 'Your Child is not in our Registry';
			error.style.color = 'red';
			result.appendChild(error);
			var prev = document.getElementById('finalprev');
			result.insertBefore(error, prev);
		}
	}

}
// var introSections = document.querySelectorAll('.introsection');

var btnNext = document.querySelectorAll('.btn-next');
btnNext.forEach(button => {
	button.addEventListener('click', () => {
		var inputInParent = button.parentElement.querySelectorAll('input');
		inputInParent.forEach(input => {
			if (input.getAttribute('data-valid')) {
				button.parentElement.style.animation = 'fadeOuttaViewFromRight 1s forwards';
				button.parentElement.nextElementSibling.style.animation = 'fadeIntoViewFromRight 1s forwards';
			}
		})
	})
})

var finalPrev = document.getElementById('finalprev');
finalPrev.addEventListener('click', () => {
	var list = document.getElementById('result').querySelectorAll('li');
	for (let element of list) {
		element.remove()
	}
	document.getElementById('error').remove()
})

function addStudent() {
	var name = prompt('Enter child name?');
	var sex = prompt('Enter the sex of your child?');
	var hobbies = prompt('Enter hobbies (separate hobbies with a comma)');
	var age = Number(prompt('Enter the age of your child'));
	students.push({studentdata: {
		name: name,
		matricno: Math.floor(Math.random() * 1000000000),
		department: randomDepartGen(),
		sex: sex,
		age: age,
		skills: hobbies,
	}})
}
// addStudent()
