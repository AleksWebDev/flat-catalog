import SingleItem from "./singleItemModel";
import * as view from './singleItemView';

export default async function (state){

    //Создаем новый объект SingleItem
    if(!state.singleItem) state.singleItem = new SingleItem(state.routeParams);

    //Получаем данные с сервера 
    await state.singleItem.getItem();

    //Отрисовываем разметку для отдельного объекта
    view.render(state.singleItem.result);  

}