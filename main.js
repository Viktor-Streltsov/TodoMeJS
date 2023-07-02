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
let textVerifik = [];

// Созздание тега li по клику на кнопку
btn.addEventListener('click', function addtext() {
    let li = document.createElement('li');
    if (input.value !== '') {
        console.log("text: " + textVerifik, input.value)
        li.innerHTML = `<span class="text-li">${input.value}</span> <button class="edit">Editing</button> <button class="clear">Clear</button>`;

        // Проверка на идентичность текста
        let status = textVerifik.indexOf(input.value);
        if (status === -1) {
            blockAll.append(li);
            textVerifik.push(input.value);
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
    inp.classList.add('input-riade-text');
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

// кнопка вывода всех задач
all.addEventListener('click', function all() {
    blockAll.classList.add('look-active');
    blockAll.classList.remove('close-active');

    blockCurent.classList.add('close-active');
    blockCurent.classList.remove('look-active');

    blockEnding.classList.add('close-active');
    blockEnding.classList.remove('look-active');

    blockCurent.innerHTML = '';
    blockEnding.innerHTML = '';
})

// кнопка вывода выполненых задач
ending.addEventListener('click', function complit() {
    // Фильтрация масива li с выполненой задачей
    clearLi = arr.filter(function (elem) {
        if (elem.children[0].classList.contains('active')) {
            return elem;
        }
    });
    for (let elemClear of clearLi) {
        blockEnding.innerHTML += `<li class="text-li">${elemClear.children[0].textContent}</li>`;
    }

    console.log(clearLi + ' вополненые');

    blockAll.classList.add('close-active');
    blockAll.classList.remove('look-active');

    blockCurent.classList.add('close-active');
    blockCurent.classList.remove('look-active')

    blockEnding.classList.add('look-active');
    blockEnding.classList.remove('close-active');

    blockCurent.innerHTML = '';

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
        blockCurent.innerHTML += `<li class="text-li">${elemCuret.children[0].textContent}</li>`;
    }

    console.log(curentLi + 'не выполненые');

    blockAll.classList.add('close-active');
    blockAll.classList.remove('look-active');

    blockCurent.classList.add('look-active');
    blockCurent.classList.remove('close-active');

    blockEnding.classList.add('close-active');
    blockEnding.classList.remove('look-active');

    blockEnding.innerHTML = '';
});



