var children = [];
for (let child of document.body.children) {
    children.push(child);
}
var divchildren = children.filter(child => child.tagName === 'DIV'); //important

function activator() {
    divchildren[0].classList.add('active');
    divchildren[1].classList.add('inactive');
    divchildren[2].classList.add('inactive');
    divchildren[3].classList.add('inactive');
}
activator();
var buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (button.parentElement.classList.contains('active')) {
            var input = button.previousElementSibling;
            if (input.id === 'user') {
                if (checkLimitAndChoose(input).error === false) {
                    console.log(input.value);
                    button.parentElement.classList.remove('active');
                    button.parentElement.classList.add('inactive');
                    button.parentElement.nextElementSibling.classList.add('active')
                }
            }
            if (input.id === 'email') {
                if (emailVerifier(input).error === false) {
                    console.log(input.value);
                    button.parentElement.classList.remove('active');
                    button.parentElement.classList.add('inactive');
                    button.parentElement.nextElementSibling.classList.add('active')
                };
            }
            if (input.id === 'password') {
                if (checkLimitAndChoose(input).error === false) {
                    console.log(input.value);
                    button.parentElement.classList.remove('active');
                    button.parentElement.classList.add('inactive');
                    button.parentElement.nextElementSibling.classList.add('active')
                };
            }
            if(document.getElementById('endnote').classList.contains('active')){
                document.getElementById('audio').play();
            }
        }
    })
})

function emailVerifier(input) {
    var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regex.test(input.value) === false) {
        animationSetter(input, 'wrong');
        error();
        return {
            error: true
        };
    } else {
        correcterror();
        animationSetter(input, 'animation');
        return {
            error: false
        }
    }
}

function checkLimitAndChoose(input) {
    if (input.value.length < 8) {
        error(input);
        animationSetter(input, 'wrong');
        return {
            error: true
        };
    } else {
        correcterror(input);
        animationSetter(input, 'animation');
        return {
            error: false
        };
    }
}

function animationSetter(input, animation) {
    input.parentElement.classList.add(animation);
    input.parentElement.addEventListener('animationend', () => {
        if (animation === 'wrong') {
            input.parentElement.classList.remove(animation);
        }
    })
}

function error(input) {
    document.body.classList.remove('correct');
    document.body.classList.add('danger');
}

function correcterror(input) {
    document.body.classList.remove('danger');
    document.body.classList.add('correct');
}
