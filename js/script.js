'use strict';


const adverts = document.getElementsByClassName('promo__adv'),
    genre = document.getElementsByClassName('promo__genre')[0],
    bg_img = document.getElementsByClassName('promo__bg')[0],
    movieList = document.querySelector('.promo__interactive-list');


    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    }

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

function removeFilm() {
    const deleteItems = document.getElementsByClassName('delete');
    const liList = document.querySelector('.promo__interactive-item');


    for(let i=0; i<= deleteItems.length - 1; i++){
        deleteItems[i].addEventListener('click', (e) => {
            e.currentTarget.parentElement.remove();
            movieDB.movies.splice(e.currentTarget.dataset.item, 1);
        });
    }
    // liList.forEach(bin => {
    //     bin.addEventListener('click', () => {
    //         liList.remove()
    //     })
    // })
}
removeFilm();

function addNewFilm() {
    const form = document.querySelector('.add');
    const input = document.querySelector('.adding__input');
    const list = document.querySelector('.promo__interactive-list');

    form.addEventListener('submit', () => {
            const value = input.value;

            if(value === '' || value === null) {
                return
            }

            list.innerHTML = '';

            movieDB.movies.push(value);

            const films =  movieDB.movies.sort();

            films.forEach((name, index) => {
                const li = document.createElement('li');
                const divDelete = document.createElement('div');

                divDelete.className = 'delete';
                li.className = 'promo__interactive-item';

                if (value.length > 19) {
                    li.textContent = (index + 1) + ' ' + name.slice(1, 19) + '...';
                } else {
                    li.textContent = (index + 1) + ' ' + name;
                }

                divDelete.dataset.item = index;

                li.appendChild(divDelete);

                list.appendChild(li);
            });

            input.value = '';

            removeFilm();

        });

}

addNewFilm();

// btn.addEventListener('click', () => {
//     console.log(formInput);


// });
// form.addEventListener('keyup', () => {
//     console.log(formInput);

//     return false;
// });