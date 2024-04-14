let addBtn = document.querySelector('.add')
let remBtn = document.querySelector('.rem')
let field = document.querySelector('.con1 input')
const para = document.querySelectorAll('.paras p')
let paras = document.querySelector('.paras')


const arr = ['wash dishes', 'play games'];

let content = '';



function rendertoDoList() {
    for(let i = 0; i < arr.length; i++) {
        const oneTodo = `<p>${arr[i]}</p>`;
        content += oneTodo;

}

}

rendertoDoList();


/*
    watch dishes
    play games

*/




paras.innerHTML = content;



field.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') { 
        arr.push(field.value);
        paras.innerHTML += `<p>${field.value}</p>`;
        console.log(`Added "${field.value}" successfully`) ;
        field.value = '';
    }

})

/*
    1. validation
    2. remove last element in arr
    3. re-render whole list

    More:


*/

remBtn.addEventListener('click', function() {

    if (arr.length > 0) {
        arr.pop();
       // Remove last task from the array

        // Re-render the list
        content = '';
        rendertoDoList();
        paras.innerHTML = content;
    }
});
