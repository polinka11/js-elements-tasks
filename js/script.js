/* Завдання на урок:

1) + Клонувати репозиторій з готовим сайтом із GitHub на свій комп'ютер. У файлі "script.js" виконати завдання, що описані нижче. Після виконання кожного завдання комітити зміни.

2) + Видалити всі рекламні блоки зі сторінки (права частина сайту).

3) Зберегти коміт та спробувати надіслати зміни на GitHub. Створити нову гілку із зміненим кодом у своєму GitHub. Надіслати посилання на гілку проєкту на власному репозиторії на GitHub через форму нижче.

4) + За допомогою JS змінити жанр фільму, замінити "комедія" на "драма".

5) Змінити задній фон постера з фільмом на зображення "bg.jpg".  Воно лежить в папці img. Реалізувати тільки за допомогою JS.

6) Список фільмів на сторінці сформувати на підставі з даних у файлі "script.js". Відсо2тувати їх за алфавітом.

7) Додати нумерацію виведених фільмів.
 
8) Зберегти всі зміни і надіслати на GitHub.

*/


const movieDB = {
    movies: [
        "Душа",
        "Володар Перснів",
        "Джокер",
        "Тенет",
        "Гаррі Поттер і філософський камінь",
        "Гаррі Поттер і таємна кімната"
    ]
};




function removeAds() {
    const ads = document.querySelector('.promo__adv');
    content = document.querySelector('.promo__content');
    ads.remove();
    content.style.width = 'calc(100% - 300px)';
}

removeAds();

function replaceGenre() {
    const filmGenreElements = document.getElementsByClassName('promo__genre');
    if (filmGenreElements.length > 0){
        const filmGenreElement = filmGenreElements[0];
        filmGenreElement.textContent = 'Драма';
    }
}
replaceGenre();

const viewedFilms = document.querySelector('.promo__interactive-list');
viewedFilms.innerHTML = "";
movieDB.movies.sort()
movieDB.movies.forEach(function(film, i){
    viewedFilms.innerHTML += `<li class="promo__interactive-item">${i+1}. ${film}

    <div class="delete"></div>
</li>`;
});


