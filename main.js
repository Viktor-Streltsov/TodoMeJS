const input = document.querySelector('.input-riade-text');
const btn = document.querySelector('.add-text');

const all = document.querySelector('.all');
const curent = document.querySelector('.curent');
const ending = document.querySelector('.ending');

const blockAll = document.querySelector('.all-text');
const blockCurent = document.querySelector('.curent-text');
const blockEnding = document.querySelector('.ending-text');

let arr = [];
let clearLi = [];
let curentLi = [];
let textVerifik = '';
// Созздание тега li по клику на кнопку

btn.addEventListener('click', function addtext() {
    let li = document.createElement('li');
    if (input.value !== '') {
        console.log(textVerifik, input.value)
        li.innerHTML = `<span class="text-li">${input.value}</span> <button class="edit">Editing</button> <button class="clear">Clear</button>`;
        if(input.value !== textVerifik) {
            blockAll.append(li);
            textVerifik = input.value;
        };
        input.value = '';
    };

    // Очищение фильтров при каждом добовлении
    blockCurent.innerHTML = '';
    blockEnding.innerHTML = '';

    // навешивания события на кнопку добовления
    input.addEventListener('blur', () => {
        btn.addEventListener('click', addtext);
    })

    // Создание инпута для редактирования тега li

    let inp = document.createElement('input');
    li.children[1].addEventListener('click', function () {
        inp.value = li.children[0].textContent;
        li.children[0].textContent = '';
        li.children[0].append(inp);
        li.children[1].disabled = true;
    });


    // Добавление нового измененого li через созданные инпут

    inp.addEventListener('blur', function () {
        li.children[0].textContent = this.value;
        li.children[1].disabled = false;
    })

    // Навешивание класа зачеркивания на выполненый li
    li.children[2].addEventListener('click', function () {
        li.children[0].classList.toggle('active');
    })

    this.removeEventListener('click', addtext);

    return arr.push(li);
});


// кнопка вывода выполненых задач
ending.addEventListener('click', function complit(event) {
    event.preventDefault();
    // Фильтрация масива li с выполненой задачей
    clearLi = arr.filter(function (elem) {
        if (elem.children[0].classList.contains('active')) {
            return elem;
        }
    });
    for (let elemClear of clearLi) {
        blockEnding.innerHTML += `<li>${elemClear.children[0].textContent}</li>`;
    }

    console.log(clearLi + ' вополненые');

    // this.removeEventListener('click', complit);
});

// кнопка вывода не выполненых задач
curent.addEventListener('click', function unful() {
    // Фильтрация масива li с не выполненой задачей
    curentLi = arr.filter(function (elem) {
        if (!elem.children[0].classList.contains('active')) {
            return elem;
        }
    });
    for (let elemCuret of curentLi) {
        blockCurent.innerHTML += `<li>${elemCuret.children[0].textContent}</li>`;
    }

    console.log(curentLi + 'не выполненые');


});



