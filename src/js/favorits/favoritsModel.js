export default class Favorits {
    constructor () {
        this.favs = [];
        // Проверка есть ли в localStorage данные// Если есть получаем из LS
        this.checkStorage();

    };

    addFav(id){
        this.favs.push(id);
        //Сохранение в LS 
        this.saveData();
    }

    removeFav(id){
        const indx = this.favs.indexOf(id);
        this.favs.splice(indx, 1);
        //Удаление из LS
        this.saveData();
    }

    isFav(id){
        return this.favs.indexOf(id) !== -1 ? true : false;
    }

    toggleFav(id){
        this.isFav(id) ? this.removeFav(id) : this.addFav(id);
    }

    saveData(){
        localStorage.setItem('favs', JSON.stringify(this.favs));
    }

    checkStorage(){
        const storage = JSON.parse(localStorage.getItem('favs'));

        if(storage) this.favs = storage;
    }
}