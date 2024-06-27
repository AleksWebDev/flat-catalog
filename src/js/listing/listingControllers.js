import * as view from './listingView';

export default function(state){

    //Рендер контейнира для карточек 
    view.render();

    // Рендер карточек с квартирами
    state.results.forEach((item) => {
        view.renderCard(item, state.favourites.isFav(item.id));
    });

    state.emitter.subscribe('event:render-listing', () => {
        // Сначала нужно очистить контейнер с карточками 
        view.clearListingContainer();

        //Рендерим карточки по заданным параметрам в фильтре 
        state.results.forEach((item) => {
            view.renderCard(item, state.favourites.isFav(item.id));
        });

        //Запускаем прослушки клики для иконки в ибранное
        addToFavoriteListener()
    });

    //Запускаем прослушки клики для иконки в ибранное
    addToFavoriteListener()

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