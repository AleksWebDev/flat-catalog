export default class FavouritesCards {

    constructor (favsList) {
        this.favsList = favsList;
    };


    async getFavs(){
        const requestId = this.favsList.toString() // 1,2,3
        const queryString = `https://jsproject.webcademy.ru/items?ids=${requestId}`;

        const result = await fetch(queryString);
        const data = await result.json();
        this.cards = await data;
    }
}