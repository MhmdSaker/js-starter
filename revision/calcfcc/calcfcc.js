// what did I learn



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


function clearDisplay() {
    clearBtn.innerHTML = 'AC';
    calculation = '';
    display();
    localStorage.setItem('calculation', calculation);
}



function display() {
    field.innerHTML = calculation;
}







// validation 1: ac when cleared, c when not cleared
btns.forEach(function(element) {
    element.addEventListener('click', function(){
        clearBtn.innerHTML = 'C';
    })
})




