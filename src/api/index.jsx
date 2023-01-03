const fetchData = async (url) =>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
export const getProducts = () => {
    return fetchData('https://fronttask.techeyeco.com/api/ClientSide/GetProducts');
}
export const getNewArrivle = () => {
   return fetchData('https://fronttask.techeyeco.com/api/ClientSide/GetCurrentGroupProducts?GroupProductType=NewArrivals');
}
export const getDiscount = () => {
    return fetchData('https://fronttask.techeyeco.com/api/ClientSide/GetCurrentGroupProducts?GroupProductType=Discount');
 }
 export const getImage = () => {
    return fetchData('https://fronttask.techeyeco.com/api/ClientSide/GetGroup?GroupProductType=FrontPageSlider');
 }