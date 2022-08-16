console.log('This is separate js File');

// option:2 
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option: 3
const makeBlueButton = document.getElementById('make-blue');
// console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// option: 3 another
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// option: 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// Option: 4 final we will use this regular
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})