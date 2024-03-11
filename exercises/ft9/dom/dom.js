let input = document.querySelector('.inp-1');
input.value = '';
let val = Number(input.value);




input.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        calculate();
    
    }
});

function calculate() { 
    let inputValue = document.querySelector('.inp-1').value;
    document.getElementById('p1').innerText = "Entered value: " + inputValue;
    let val = Number(inputValue);
    document.getElementById('p2').innerText = "Entered value + 50: " + (val+50);

}
