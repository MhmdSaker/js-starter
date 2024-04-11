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




paras.innerHTML = content;



field.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') { 
        arr.push(field.value);
        paras.innerHTML += `<p>${field.value}</p>`;
        console.log(`Added "${field.value}" successfully`) ;
        field.value = '';
    }

})


remBtn.addEventListener('click', function() {
    arr.splice(-1, 1);

})
