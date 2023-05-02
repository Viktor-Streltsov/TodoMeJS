let input = document.querySelector('.input-riade-text');
let btn = document.querySelector('.add-text');
let all = document.querySelector('.all');
let topical = document.querySelector('.topical');
let ending = document.querySelector('.ending');
let block = document.querySelector('.block-text');
let arr = [];

// Созздание тега li по клику на кнопку

btn.addEventListener('click', function() {
    let li = document.createElement('li');
    if(input.value !== '') {
        li.innerHTML = `<span class="text-li">${input.value}</span> <button class="edit">Editing</button> <button class="clear">Clear</button>`;
        block.append(li);
        input.value = '';
    };

// Создание инпута для редактирования тега li

    let inp = document.createElement('input');
    li.children[1].addEventListener('click', function() {
        inp.value = li.children[0].textContent;
        li.children[0].textContent = '';
        li.children[0].append(inp);
        li.children[1].disabled = true;
    });

// Добавление нового измененого li через созданные инпут

    inp.addEventListener('blur', function() {
        li.children[0].textContent = this.value;
        li.children[1].disabled = false;
    })

// Навешивание класа зачеркивания на выполненый li
    li.children[2].addEventListener('click', function() {
        li.children[0].classList.toggle('active');
    })
console.log(arr);
// Фильтрация масива li
return arr.push(li);
});


    topical.addEventListener('click', function() {
        let clearLi = arr.filter(function(elem) {
            if(elem.children[0].classList.contains('active')) {
                return elem;
            }
            block.innerHTML = '';
        });
        for(let elem of clearLi) {
            block.innerHTML += `<li>${elem.children[0].textContent}</li>`;
        }
        console.log(clearLi);
    })

