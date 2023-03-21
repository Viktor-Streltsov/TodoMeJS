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
    edits.forEach(function(elem) {
        elem.addEventListener('click', function() {
            let inp = document.createElement('input');
            if(this.li.children[0].dataset.text === this.li.children[1].dataset.btn) {
                inp.value = this.li.children[0].textContent;
                this.li.children[0].textContent = '';
                this.li.children[0].append(inp);
                this.disabled = true;
            }
            console.log(li)
            inp.addEventListener('blur', function() {
                this.li.children[0].textContent = inp.value;
                this.disabled = false;
            });
        })
    })
})