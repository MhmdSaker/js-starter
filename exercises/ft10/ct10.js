let jsBtn = document.querySelector('.js-btn');
let check = jsBtn.classList.contains('js-btn');
let toggleBtn = document.querySelector('.uber button')       // returns the first occurence of an button
let toggleBtns = document.querySelectorAll('.toggle button');  // returns a list of all occurences of buttons

console.log(check)




// for single button

toggleBtn.addEventListener('click', function() {
    if (toggleBtn.classList.contains('isToggled')) {
        toggleBtn.classList.remove('isToggled');
    } else {
        toggleBtn.classList.add('isToggled');
    }
});



toggleBtns.forEach(function(element) {
    element.addEventListener('click', function () {
        if (element.classList.contains('isToggled')) {
            element.classList.remove('isToggled');
        } else {
            element.classList.add('isToggled');
        }
    })

})
