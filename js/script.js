'use strict';


const adverts = document.getElementsByClassName('promo__adv'),
    genre = document.getElementsByClassName('promo__genre')[0],
    bg_img = document.getElementsByClassName('promo__bg')[0],
    movieList = document.querySelector('.promo__interactive-list');


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

    const sorted = movieDB.movies.sort();
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

function addNewFilm() {
    for (let i = 0; i > 6; i++) {
        const formList = document.querySelector('.add');
        const Input = document.querySelector('.adding__input');
        const List = document.querySelector('.promo__interactive-list');

        formList.addEventListener('click', () => {
            const value = Input.value;
            const li = document.createElement('li');
            li.className = 'promo__interactive-item';
            if (value.length > 19) {
                li.textContent = value.slice(1, 19) + '...';
            } else {
                li.textContent = value;
            }

            List.appendChild(li);
        });
    }

}

addNewFilm();

function removeFilm() {
    const bin = document.querySelector('.delete');
    const liList = document.querySelector('.promo__interactive-item');


    // liList.forEach(bin => {
    //     bin.addEventListener('click', () => {
    //         liList.remove()
    //     })
    // })
}
removeFilm();

// btn.addEventListener('click', () => {
//     console.log(formInput);


// });
// form.addEventListener('keyup', () => {
//     console.log(formInput);

//     return false;
// });