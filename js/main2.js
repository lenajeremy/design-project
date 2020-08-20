// var myFullPage = new fullpage('#fullpage', {
//     sectionsColor: ['red', 'green', 'yellow', 'green', 'blue'],
//     // anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
//     // menu: '#menu',
//     // lazyLoad: true,
//     autoScrolling: true,
//     navigation: true
// });
let users = [{
        userdata: {
            username: 'Lena Marvelous',
            password: 1234567,
            email: 'marvelousfortune13@gmail.com',
        }
    }, {
        userdata: {
            username: 'Lena Jeremiah',
            password: 12345,
            email: 'jeremiahlena13@gmail.com',
        }
    },
    {
        userdata: {
            username: 'Fuhad Olawale',
            password: 12345,
            email: 'olawalefuhad@gmail.com'
        }
    }
];
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focusout', function () {
        if (input.id === 'name') {
            checkname(input);
        } else if (input.id === 'email') {
            checkemail(input);
        }
    })
})

function checkname(input) {
    if (input.value === '') {
        error(input);
    } else {
        correcterror(input);
    }
}

function checkemail(input) {
    var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regex.test(input.value) === true) {
        correcterror(input);
    } else {
        error(input)
    }
}

function error(input) {
    input.parentElement.querySelector('#checksvg').style.opacity = '0';
    input.parentElement.querySelector('#questionsvg').style.opacity = '1';
    input.parentElement.classList.add('inputerror');
    document.querySelector('.button').querySelector('a').style.pointerEvents = 'none';
}

function correcterror(input) {
    input.parentElement.querySelector('#checksvg').style.opacity = '1';
    input.parentElement.querySelector('#questionsvg').style.opacity = '0';
    input.parentElement.classList.remove('inputerror');
    document.querySelector('.button').querySelector('a').style.pointerEvents = 'all';
}
document.querySelector('#btn-login').addEventListener('click', login);;

function verifier() {
    let emailvalue = document.querySelector('#email').value;
    let uservalue = document.querySelector('#name').value;
    let passwordvalue = document.querySelector('#password').value;
    let validUser = users.filter(user => user.userdata.username === uservalue && user.userdata.password === Number(passwordvalue) && user.userdata.email === emailvalue)
    if (validUser.length === 1) {
        validUser[0].userdata.error = false;
        console.log(validUser[0])
        return validUser[0];
    } else {
        let nulluser = {
            userdata: {
                username: null,
                password: null,
                email: null,
                error: true
            }
        };
        return nulluser;
    }
}

function login() {
    var result = document.createElement('h1');
    if (verifier().userdata.error === false) {
        result.innerHTML = `<i class = 'fa fa-user-circle'></i>Currently logged in as ${verifier().userdata.username}`;
        document.querySelector('.blur').appendChild(result);
        document.querySelector('.blur').firstElementChild.remove();
    } else if (verifier().userdata.error === true) {
        console.log('there was an error');
        result.innerHTML = 'Invalid Login Details';
        result.style.color = 'red';
        document.querySelector('.blur').appendChild(result);
    }
}