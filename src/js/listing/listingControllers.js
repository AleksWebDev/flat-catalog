import * as view from './listingView';

export default function(state){

    //Рендер контейнира для карточек 
    view.render();

    // Рендер карточек с квартирами
    state.results.forEach((item) => {
        view.renderCard(item);
    });

    state.emitter.subscribe('event:render-listing', () => {
        // Сначала нужно очистить контейнер с карточками 
        view.clearListingContainer();

        //Рендерим карточки по заданным параметрам в фильтре 
        state.results.forEach((item) => {
            view.renderCard(item);
        });
    });
}