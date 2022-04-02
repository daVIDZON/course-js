// const personalMovieDB = {
//     movies: []
// };

// for (let i = 0; i <= 2; i++) {
//     const expectedNumberOfFilms = prompt('Сколько вы бы хотели посмотреть фильмов?', '');

//     if (expectedNumberOfFilms == '' || expectedNumberOfFilms == null) {
//         if (i <= 0) {
//             i = 0;
//         } else {
//             i--;
//         }
//     }

//     if (expectedNumberOfFilms != null && expectedNumberOfFilms != '') {
//         for (let m = 0; m <= expectedNumberOfFilms; m++) {
//             const film = prompt('Какой фильм вы уже посмотрели?', '');

//             if (film == null || film == '') {
//                 if (m <= 0) {
//                     m = 0;
//                 } else {
//                     m--;
//                 }
//             } else {
//                 personalMovieDB.movies.push(film);
//             }

//             if (m == expectedNumberOfFilms - 1) {
//                 console.log('Ура, вы достигли желаемого числа фильмов! Вы просмотрели следующие фильмы:', personalMovieDB.movies.join(','));
//             } else {
//                 console.log("Продолжайте смотреть фильмы");
//             }
//         }
//     }
// }
// // i++  i = i + 1
// // i-- i = i -1

// // 0, 1, 2
// // for (let i = 0; i < 2; i++) {
// //     const a = prompt('Один из последних просмотренных фильмов?', ''),
// //         b = prompt('На сколько оцените его?', '');

// //     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// //         personalMovieDB.movies[a] = b;
// //   //      personalMovieDB.count = Object.keys(personalMovieDB.movies).length;

// //         console.log('done');
// //     } else {
// //         console.log('error');
// //         i--;
// //     }
// // }

// // console.log(personalMovieDB);













'use strict';

let numberOfFilms;

function start() {
    const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function RememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
RememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();



















// // for (let i = 0; i < 2; i++) {
// //     const fruit = prompt("How are you?(max length 5 symbols)");

// //     if (fruit.length > 10) {
// //         i--;
// //     } else {
// //         console.log('cool');
// //     }
// //     console.log("m" + fruit.slice(1, 5) + "h");
// // }



// const num = 12.7;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));

// for (let i = 0; i < 2; i++) {
//     const answer = +prompt('How old are you?');
//     if (answer > 18) {
//         document.write('Welcome');
//         break;
//     } else if (answer == null && answer == '' && answer == NaN) {
//         i--;
//         console.log(answer);
//     } else {
//        i--; 
//     }
// }


// function first(){
//     setTimeout(function(){
//         console.log(1);
//     }, 1000);
// }
// function second(){
//     console.log(2);
// }
// first();
// second();

// function learnJS(lang,callback){
//     console.log(`Я учу:${lang}`);
//     callback();
// }
// function done(){
//     console.log('Я прошел этот урок');  
// }
// learnJS('Javascript',done);


// const options = {
//     name: 'text',
//     width: 1024,
//     height: 1024,
//     color: {
//         bg: 'Red',
//         color: 'black'
//     },
//     makeTest:function(){
// console.log('Test');
//     }
// };
// options.makeTest();

// console.log(Object.keys(options).length);
// // console.log(options.name);
// // delete options.name;
// // console.log(options);

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }