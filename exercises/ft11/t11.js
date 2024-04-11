let addBtn = document.querySelector('.add')
let remBtn = document.querySelector('.rem')
let field = document.querySelector('.con1 input')
let para = document.querySelector('.para')
let para2 = document.querySelector('.para2')

const arr = [];
let inputVal = field.value;



field.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        arr.push(field.value);
        inputVal = field.value

        // para2.innerHTML = `Added ${inputVal}$ successfully`;  



})




field.addEventListener('keyup', function() {
    para.innerHTML = `Adding ${field.value}$`;



})



remBtn.addEventListener('click', function() {
    arr.splice(-1, 1);

})
