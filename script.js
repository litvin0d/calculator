function calc() {
    let num1 = document.querySelector('#num-1').value;
    let act = document.querySelector('#action').value;
    let num2 = document.querySelector('#num-2').value;
    if (act == '+') {
        document.querySelector('#result').innerHTML = Number(num1) + Number(num2);
    } else if (act == '-') {
        document.querySelector('#result').innerHTML = Number(num1) - Number(num2);
    } else if (act == '*') {
        document.querySelector('#result').innerHTML = Number(num1) * Number(num2);
    } else if (act == '/') {
        document.querySelector('#result').innerHTML = Number(num1) / Number(num2);
    } else {
        document.querySelector('#result').innerHTML = 'Ошибка!';
    }
}

function cls() {
    document.querySelector('#num-1').value = '';
    document.querySelector('#action').value = '';
    document.querySelector('#num-2').value = '';
    document.querySelector('#result').innerHTML = '';
}