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
    let edits = document.querySelectorAll('.edit');
    let textLis = document.querySelectorAll('.text-li');
    for(let elem of edits) {
        elem.addEventListener('click', function() {
            for(let texLi of textLis) {
                if(texLi.dataset.text === elem.dataset.btn) {
                    console.log(texLi);
                }
            }
        });
    }
})