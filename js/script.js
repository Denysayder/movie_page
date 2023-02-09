/* Задания на урок:

-1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

-4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

-5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoader', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const advert = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        poster = document.querySelector('.promo__bg'),
        movieList = document.querySelector('.promo__interactive-list'),
        inputField = document.querySelector('.adding__input'),
        addingButton = document.querySelector('.add button'),
        checkbox = document.querySelector('[type="checkbox"]');


    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    addingButton.addEventListener('click', (event) => {
        event.preventDefault();

        if (inputField.value !== '') {
            if (checkbox.checked) {
                console.log('Добавляем любимый фильм');
            }
            if (inputField.value.length > 21) {
                inputField.value = `${inputField.value.slice(0, 21)}...`;
            }
            movieDB.movies.push(inputField.value);
            sortArray(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
    });

    const makeChanges = () => {
        genre.textContent = ('Драма');

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArray = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = '';

        films.forEach((item, i) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${item}
            <div class="delete"></div>
        </li>`;
        });
    }

    createMovieList(movieDB.movies, movieList);
    deleteAdv(advert);
    makeChanges();
    sortArray(movieDB.movies);
});