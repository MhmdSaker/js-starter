let calculation = localStorage.getItem('calculation') || '';



function display() {
    document.querySelector('.field').innerHTML = calculation;
}

function update(value) {
    calculation += value;

    display();
}

function eva() {
    calculation = eval(calculation);
    display();
}

