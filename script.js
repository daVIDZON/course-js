/*
const personalMovieDB = {
    movies: []
};

for (let i = 0; i <= 2; i++) {
    const expectedNumberOfFilms = prompt('Сколько вы бы хотели посмотреть фильмов?', '');

    if (expectedNumberOfFilms == '' || expectedNumberOfFilms == null) {
        if (i <= 0) {
            i = 0;
        } else {
            i--;
        }
    }

    if (expectedNumberOfFilms != null && expectedNumberOfFilms != '') {
        for (let m = 0; m <= expectedNumberOfFilms; m++) {
            const film = prompt('Какой фильм вы уже посмотрели?', '');

            if (film == null || film == '') {
                if (m <= 0) {
                    m = 0;
                } else {
                    m--;
                }
            } else {
                personalMovieDB.movies.push(film);
            }

            if (m == expectedNumberOfFilms - 1) {
                console.log('Ура, вы достигли желаемого числа фильмов! Вы просмотрели следующие фильмы:', personalMovieDB.movies.join(','));
            } else {
                console.log("Продолжайте смотреть фильмы");
            }
        }
    }
}
*/
// i++  i = i + 1
// i-- i = i -1

// 0, 1, 2
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//   //      personalMovieDB.count = Object.keys(personalMovieDB.movies).length;

//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// console.log(personalMovieDB);

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);




// for (let i = 0; i < 2; i++) {
//     const fruit = prompt("How are you?(max length 5 symbols)");

//     if (fruit.length > 10) {
//         i--;
//     } else {
//         console.log('cool');
//     }
//     console.log("m" + fruit.slice(1, 5) + "h");
// }
