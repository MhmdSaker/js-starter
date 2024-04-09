let calculation = localStorage.getItem('calculation') || '';
let field = document.querySelector('.field');
let clearBtn = document.querySelector('.clearBtn');
let btns = document.querySelectorAll('.btn');



display();


function update(value) {
    calculation += value;
    display();
}


function eva() {              
    calculation = eval(calculation);
    display();
    localStorage.setItem('calculation', calculation);


}

btns.forEach(function(element) {
    element.addEventListener('click', function(){
        clearBtn.innerHTML = 'C';
    })
})



function clearDisplay() {
    clearBtn.innerHTML = 'AC';
    calculation = '';
    display();
    localStorage.setItem('calculation', calculation);
}



function display() {
    field.innerHTML = calculation;
}


