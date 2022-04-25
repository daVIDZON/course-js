// // const personalMovieDB = {
// //     movies: []
// // };

// // for (let i = 0; i <= 2; i++) {
// //     const expectedNumberOfFilms = prompt('Сколько вы бы хотели посмотреть фильмов?', '');

// //     if (expectedNumberOfFilms == '' || expectedNumberOfFilms == null) {
// //         if (i <= 0) {
// //             i = 0;
// //         } else {
// //             i--;
// //         }
// //     }

// //     if (expectedNumberOfFilms != null && expectedNumberOfFilms != '') {
// //         for (let m = 0; m <= expectedNumberOfFilms; m++) {
// //             const film = prompt('Какой фильм вы уже посмотрели?', '');

// //             if (film == null || film == '') {
// //                 if (m <= 0) {
// //                     m = 0;
// //                 } else {
// //                     m--;
// //                 }
// //             } else {
// //                 personalMovieDB.movies.push(film);
// //             }

// //             if (m == expectedNumberOfFilms - 1) {
// //                 console.log('Ура, вы достигли желаемого числа фильмов! Вы просмотрели следующие фильмы:', personalMovieDB.movies.join(','));
// //             } else {
// //                 console.log("Продолжайте смотреть фильмы");
// //             }
// //         }
// //     }
// // }
// // // i++  i = i + 1
// // // i-- i = i -1

// // // 0, 1, 2
// // // for (let i = 0; i < 2; i++) {
// // //     const a = prompt('Один из последних просмотренных фильмов?', ''),
// // //         b = prompt('На сколько оцените его?', '');

// // //     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// // //         personalMovieDB.movies[a] = b;
// // //   //      personalMovieDB.count = Object.keys(personalMovieDB.movies).length;

// // //         console.log('done');
// // //     } else {
// // //         console.log('error');
// // //         i--;
// // //     }
// // // }

// // // console.log(personalMovieDB);






// 'use strict';

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                   b = prompt('На сколько оцените его?', '');

//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i < 2; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//             if (genre === '' || genre == null) {
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;
//             } 
//         }
//      personalMovieDB.genres.forEach((i,item)=>{
//          console.log(`Любимый жанр ${i+1} - это ${item}`);
//      });

//     }
// };







// // // for (let i = 0; i < 2; i++) {
// // //     const fruit = prompt("How are you?(max length 5 symbols)");

// // //     if (fruit.length > 10) {
// // //         i--;
// // //     } else {
// // //         console.log('cool');
// // //     }
// // //     console.log("m" + fruit.slice(1, 5) + "h");
// // // }



// // const num = 12.7;
// // console.log(Math.round(num));

// // const test = "12.2px";
// // console.log(parseInt(test));

// // for (let i = 0; i < 2; i++) {
// //     const answer = +prompt('How old are you?');
// //     if (answer > 18) {
// //         document.write('Welcome');
// //         break;
// //     } else if (answer == null && answer == '' && answer == NaN) {
// //         i--;
// //         console.log(answer);
// //     } else {
// //        i--; 
// //     }
// // }


// // function first(){
// //     setTimeout(function(){
// //         console.log(1);
// //     }, 1000);
// // }
// // function second(){
// //     console.log(2);
// // }
// // first();
// // second();

// // function learnJS(lang,callback){
// //     console.log(`Я учу:${lang}`);
// //     callback();
// // }
// // function done(){
// //     console.log('Я прошел этот урок');  
// // }
// // learnJS('Javascript',done);


// // const options = {
// //     name: 'text',
// //     width: 1024,
// //     height: 1024,
// //     color: {
// //         bg: 'Red',
// //         color: 'black'
// //     },
// //     makeTest:function(){
// // console.log('Test');
// //     }
// // };
// // options.makeTest();

// // console.log(Object.keys(options).length);
// // // console.log(options.name);
// // // delete options.name;
// // // console.log(options);

// // for (let key in options) {
// //     if (typeof (options[key]) === 'object') {
// //         for (let i in options[key]) {
// //             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// //         }
// //     } else {
// //         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

// const arr =[1,2,3,4,5,6,7,8];
// arr.push(3);
// console.log(arr);


// arr.forEach(function(item,i,arr){
//     console.log(`${item}: ${i} внутри массива ${arr}`);
// });
// const result = []
// for (let i = 0; i < 3; i++) {
//     const search = prompt('what products have you bought?');
//     result.push(search);
// }
// console.log(result.join(','));



// const arr = [2, 26, 45, 11, 78, 1, 123, 32, 12];
// arr.sort(CompaireNum);

// function CompaireNum(a, b) {
//     return a - b;
// }

// console.log(arr);



// const add = {
//     d: 17,
//     b: 4
// };
// const clone = Object.assign({},add);
// clone.d = 20;
// console.log(add);
// console.log(clone);


// const video = ['youtube', 'instagram', 'vk'],
//     blogs = ['telegram', 'maran', 'blooger'],
//     browser = [...video, ...blogs, 'chrome', 'safari'];

// console.log(browser);


// const array = ["a", "b"];
// const newArray = [...array, "j", "k"];
// console.log(newArray);


// const soldier={
// health:400,
// armor:100
// };

// const boss=Object.create(soldier);
// console.log(boss.health);
// const boss={
//     health:100
// };
// // boss.armor=soldier.armor;
// Object.setPrototypeOf(boss,soldier);
// console.log(boss.armor);

// let switcher = null;
// if(switcher){
// console.log('WORKING...');
// }
// switcher=1;
// if(switcher){
//     console.log('WORKING...');
//     }
// function random(){
//  console.log(Math.round && Math.random()*10)+Math.round;
// }
// random();

// console.log(null || 0 || 2 || undefind);

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
    bg_img = document.getElementsByClassName('promo__bg')[0],
    movieList = document.querySelector('.promo__interactive-list'),
    btn = document.querySelector('button');
    // formInput = document.getElementsByClassName('adding__input')[0];

//1
adverts[0].remove();
//2
genre.innerHTML = "Драма";
//3
bg_img.style.cssText = 'background:url("../img/bg.jpg") center center/cover no-repeat';
//4
function alphabet() {
    //  document.getElementsByClassName('promo__interactive-list')[0];
    // let elements = document.getElementsByClassName("promo__interactive-item");
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    }

    //         const sorted = movieDB.movies.sort();

    movieList.innerHTML = "";

    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
   <li class="promo__interactive-item">${i+1} ${film}
   <div class="delete"></div> 
   </li> 
   `;
    });

    // for (let i = 0; i < elements.length; i++) {
    //     elements[i].textContent = i+1 + ' ' + sorted[i]
    // }                                       
};
alphabet();

// function addNewFilm() {
//     let newFilm =a;

//     if(form=='' || form==null || form==false || form ==NaN){
//         btn.addEventListener('click', () => {
//             document.write( /*тут будет елемнт который должен добавится*/ );
//             return false;
//         });
//     }

//      }
//      addNewFilm();

// btn.addEventListener('click', () => {
//     console.log(form);

//     return false;
// });
// form.addEventListener('keyup', () => {
//     console.log(form);
    
//     return false;
// });


console.log(document.querySelector('.adding__input').parentElement);