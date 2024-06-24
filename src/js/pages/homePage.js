import filter from '../filter/filterController';
import listing from '../listing/listingControllers';

export default async function(state){
    await filter(state);
    listing(state);
}