import favoritCards from '../favoritCards/favoritCardsController';
export default function(){
    document.querySelector('#app').innerHTML = '';
    favoritCards(state);
}