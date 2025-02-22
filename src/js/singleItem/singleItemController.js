import SingleItem from "./singleItemModel";
import * as view from './singleItemView';

export default async function (state){

    //Создаем новый объект SingleItem
    if(!state.singleItem) state.singleItem = new SingleItem(state.routeParams);

    //Получаем данные с сервера 
    await state.singleItem.getItem();

    //Отрисовываем разметку для отдельного объекта
    view.render(state.singleItem.result, state.favourites.isFav(state.singleItem.id));  

    // ----- Запускаем прослушку событий -------// 

    //Открытие модального окна 
    document.querySelector('.button-order').addEventListener('click', () => {
        view.showModal();
    })

    //Закрытие модального окна
    document.querySelector('.modal__close').addEventListener('click', () => {
        view.hideModal();
    })

    //Закрытие модального окна -- клик по оверлею
    document.querySelector('.modal-wrapper').addEventListener('click', (e) => {
        if(e.target.closest('.modal')){
            return null;
        }else{
            view.hideModal();
        }
    })

    //Отправка формы 
    document.querySelector('.modal__form').addEventListener('submit', async function(e){
        e.preventDefault();

        const formData = view.getInput();
        await state.singleItem.submitForm(formData);

        if(state.singleItem.response.message === 'Bid Created'){
            alert('Ваша заявка успешно полученна!');
            view.hideModal();
            view.clearInput();
        }else if(state.singleItem.response.message === 'Bid Not Created'){
            state.singleItem.response.errors.forEach((error) => {
                alert(error);
            });
        }
    })

    //Прослуша событий для избранного 
    document.querySelector('.button-favourite').addEventListener('click', function(){
        state.favourites.toggleFav(state.singleItem.id);
        view.toggleFavoritButton(state.favourites.isFav(state.singleItem.id));
    })
}