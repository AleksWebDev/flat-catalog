function render () {
    const markup = `
    <div class="cards-wrapper">
        <div class="container p-0 pt-5">
            <div id="listing-container" class="row">
            </div>
        </div>
    </div>
    `

    document.querySelector('#app').insertAdjacentHTML('beforeend', markup);
}

function renderCard(object){
    console.log(object);
    const listingContainer = document.querySelector('#listing-container');
    const markup = `<article class="col-md-4">
    <!-- card -->
    <a href="object.html" class="card">
        <div class="card__header">
            <div class="card__title">
                ЖК ${object.complex_name}
            </div>
            <div class="card__like">
                <i class="fas fa-heart"></i>
            </div>
        </div>
        <div class="card__img">
            <img src="${object.image}" alt="План квартиры" />
        </div>
        <div class="card__desc">
            <div class="card__price">
                <div class="card__price-total">
                    ${object.price_total}
                </div>
                <div class="card__price-per-meter">
                ${object.price_sq_m} ₽/м2
                </div>
            </div>

            <!-- card__params params -->
            <div class="card__params params">
                <div class="params__item">
                    <div class="params__definition">
                        Комнат
                    </div>
                    <div class="params__value">${object.rooms}</div>
                </div>
                <div class="params__item">
                    <div class="params__definition">
                        Площадь
                    </div>
                    <div class="params__value">${object.square}</div>
                </div>
            </div>
            <!-- //card__params params -->
        </div>
        <div class="card__footer">
            <div class="card__art">${object.scu}</div>
            <div class="card__floor">${object.floor} из ${object.floors_total}</div>    
        </div>
    </a>
    <!-- // card -->
    </article>`

    listingContainer.insertAdjacentHTML('beforeend', markup);
}

function clearListingContainer(){
    const listingContainer = document.querySelector('#listing-container');
    listingContainer.innerHTML = '';
}

export {render, renderCard, clearListingContainer};