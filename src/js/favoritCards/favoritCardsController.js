import FavouritesCards from './favoritsCardModel';
import * as view from './favoritsCardsView';


export default async function(state){
    
    //Получить списко обьектов которые находятся в избранном 
    const favsList = state.favourites.favs;

    const favouritesCards = new FavouritesCards(favsList);

    await favouritesCards.getFavs();

    view.renderPage(favouritesCards.cards);

    addToFavoriteListener();

        //Функция для работы иконок добавить в избранное
        function addToFavoriteListener(){
            Array.from(document.getElementsByClassName('card__like')).forEach((item) => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
        
                    //Находим id объекта по которому кликнули
                    const currentID = e.target.closest('.card').dataset.id;
                    // Добовляем элемент из избранного
                    state.favourites.toggleFav(currentID);
                    // Включаем и выключаем иконку из избранного 
                    view.toggleFavouritesIcon(e.target.closest('.card__like'), state.favourites.isFav(currentID));
                })
            })
        }
}