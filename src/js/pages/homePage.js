import filter from '../filter/filterController';
import listing from '../listing/listingControllers';

export default async function(state){
    document.querySelector('#app').innerHTML = '';
    await filter(state);
    listing(state);
}