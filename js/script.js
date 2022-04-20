/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


const adverts = document.getElementsByClassName('promo__adv'),
      genre = document.getElementsByClassName('promo__genre')[0],
      bg_img = document.getElementsByClassName('promo__bg')[0];
    //  movieList=document.querySelector('.promo__interactive-list');
      


//1
 adverts[0].remove();
 //2
 genre.innerHTML="Драма";
 //3
bg_img.style.cssText='background:url("../img/bg.jpg") center center/cover no-repeat';
//4
function alphabet(){
    //  document.getElementsByClassName('promo__interactive-list')[0];
    let elements = document.getElementsByClassName("promo__interactive-item");
        const movieDB ={
            movies: [
                "Логан",
                "Лига справедливости",
                "Ла-ла лэнд",
                "Одержимость",
                "Скотт Пилигрим против..."
            ]
        }

        const sorted = movieDB.movies.sort();

//   movieList.innerHTML="";

//    movieDB.movies.forEach((film,i)=>{
//    movieList.innerHTML +=`
//    <li class="promo__interactive-item">${i+1} ${film}
//    <div class="delete"></div> 
// </li> 
//    `;
// });

        for (let i = 0; i < elements.length; i++) {
            elements[i].textContent = i+1 + ' ' + sorted[i]
        }                                       
};
alphabet();








