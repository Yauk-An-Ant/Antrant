const lightButton = document.getElementById('light');
const darkButton = document.getElementById('dark');
const body = document.body;

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.replace('dark', theme);
}

lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
};

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
};


const meter = document.getElementById('strength');
const pwdInput = document.getElementById('pwd');

pwdInput.addEventListener('input', () => {
    const weakness = validatePassword(pwdInput.value);
    let strength = 100;
    weakness.forEach(weaknesses => {
        if(weakness == null) {return;}
        strength -= weaknesses;
    });
    meter.style.setProperty('--strength', strength);
});

function validatePassword(password) {
    const weakness = [];
    weakness.push(length(password));
    weakness.push(uppercase(password));
    weakness.push(number(password));
    weakness.push(special(password));
    return weakness
}
function length(password) {
    const length = password.length;     
    if(length < 5) {
        return 40;
    } else {
        return 0;
    }
}
function uppercase(password) {
    if(password.search(/[A-Z]/) == -1) {
        return 20;
    } else {
        return 0;
    }
}
function number(password) {
    if(password.search(/[0-9]/) == -1) {
        return 20;
    } else {
        return 0;
    }
}
function special(password) {
    if(password.search(/[^A-Za-z0-9]/) == -1) {
        return 20;
    } else {
        return 0;
    }
}

const show = document.getElementById('show');
show.addEventListener('click', () => {
    if(pwdInput.type === 'password') {
        pwdInput.type = 'text';
        show.innerText = 'Hide';
        show.style.backgroundColor = 'rgb(255, 73, 73)';
        show.style.border = '2px solid rgb(255, 73, 73)';
    } else {
        pwdInput.type = 'password';
        show.innerText = 'Show';
        show.style.backgroundColor = 'lightgreen';
        show.style.border = '2px solid lightgreen'; 
    }
});