var horLenght = document.querySelector('.horizontal-Length');
var verLenght = document.querySelector('.vertical-Length');
var blurRadius = document.querySelector('.blur-radius');
var spreadField = document.querySelector('.spread-field');

var horCount = document.getElementById('horizontal-Length');
var verCount = document.getElementById('vertical-Length');
var blurCount = document.getElementById('blur-radius');
var spreadCount = document.getElementById('spread-field');

var code = document.getElementById('box-shadow-code').childNodes;

var inputs = document.querySelectorAll('.input');

var cube = document.getElementById('box-shadow-object');

function changeCount() {
    horCount.value = horLenght.value;
    cube.style.boxShadow = horLenght.value + 'px ' + 0 + 'px ' + 0 + 'px ' + 0 + 'px ' + 'rgba(0, 0, 0, 0.65)';
    verCount.value = verLenght.value;
    cube.style.boxShadow = horLenght.value  + 'px ' + verLenght.value + 'px ' + 0 + 'px ' + 0 + 'px ' + 'rgba(0, 0, 0, 0.65)';
    code[1].textContent = "-webkit-box-shadow:" + horLenght.value + 'px ' + verLenght.value + 'px ' + blurRadius.value + 'px ' + spreadField.value + 'px ' + 'rgba(0, 0, 0, 0.65);';
    code[3].textContent = "-moz-box-shadow:" + horLenght.value + 'px ' + verLenght.value + 'px ' + blurRadius.value + 'px ' + spreadField.value + 'px ' + 'rgba(0, 0, 0, 0.65);';
    code[5].textContent = "box-shadow:" + horLenght.value + 'px ' + verLenght.value + 'px ' + blurRadius.value + 'px ' + spreadField.value + 'px ' + 'rgba(0, 0, 0, 0.65);';

    blurCount.value = blurRadius.value;
    cube.style.boxShadow = horLenght.value + 'px ' + verLenght.value  + 'px ' + blurRadius.value + 'px ' + 0 + 'px ' + 'rgba(0, 0, 0, 0.65)';
    spreadCount.value = spreadField.value;
    cube.style.boxShadow = horLenght.value + 'px ' + verLenght.value  + 'px ' + blurRadius.value + 'px ' + spreadField.value + 'px ' + 'rgba(0, 0, 0, 0.65)';

}


for (input of inputs) {
    input.addEventListener('input', changeCount);
}

for (div of code) {
    div.addEventListener('input', changeCount);
    
}


