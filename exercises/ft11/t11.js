let addBtn = document.querySelector('.add')
let remBtn = document.querySelector('.rem')
let field = document.querySelector('.con1 input')
let para = document.querySelector('.para')
let paras = document.querySelector('.paras')

const arr = ['watch dishes', 'play games'];

let content = '';



function rendertoDoList() {
    for(let i = 0; i < arr.length; i++) {
        const oneTodo = `<p>${arr[i]}</p>`;
        content += oneTodo;

}

}



rendertoDoList();

console.log(content);

paras.innerHTML = content;





field.addEventListener('keydown', function() {

    


})




// field.addEventListener('keyup', function() {
//     para.innerHTML = `Adding ${field.value}$`;



// })



remBtn.addEventListener('click', function() {
    arr.splice(-1, 1);

})
