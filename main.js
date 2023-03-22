let input = document.querySelector('.input-riade-text');
let btn = document.querySelector('.add-text');
let all = document.querySelector('.all');
let topical = document.querySelector('.topical');
let ending = document.querySelector('.ending');
let block = document.querySelector('.block-text');
let count = 0;

btn.addEventListener('click', function() {
    let li = document.createElement('li');
    if(input.value !== '') {
        li.innerHTML = `<span class="text-li" data-text=${count}>${input.value}</span> <button class="edit" data-btn=${count}>Editing</button> <button class="clear">Clear</button>`;
        count++;
        block.append(li);
        input.value = '';
    };
    let inp = document.createElement('input');
    li.children[1].addEventListener('click', function() {
        inp.value = li.children[0].textContent;
        li.children[0].textContent = '';
        li.children[0].append(inp);
        li.children[1].disabled = true;
    });
    inp.addEventListener('blur', function() {
        li.children[0].textContent = this.value;
        li.children[1].disabled = false;
    })
});

