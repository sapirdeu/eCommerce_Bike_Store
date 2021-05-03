import axios from 'axios'
import {
        GET_PRODUCTS_BY_ARRIVAL,
        GET_PRODUCTS_BY_SELL,
        GET_BRANDS,
        // ADD_BRAND,
        GET_MATERIALS,
        // ADD_WOOD,
        GET_PRODUCTS_TO_SHOP,
        // ADD_PRODUCT,
        // CLEAR_PRODUCT,
        // GET_PRODUCT_DETAIL,
        // CLEAR_PRODUCT_DETAIL
} from './Types'
import {PRODUCT_SERVER} from '../../components/utils/Misc'

function getProductsByArrival(){
    //sort by ARRIVAL: /api/product/articles?sortBy=createdAt&order=desc&limit=4
    const request = 
        axios.get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
        .then(response => response.data);
    
    return {
        type: GET_PRODUCTS_BY_ARRIVAL, 
        payload: request
    }
}

function getProductsBySell(){
    //sort by SELL: /api/product/articles?sortBy=sold&order=desc&limit=4
    const request = 
        axios.get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
        .then(response => response.data);
    
    return {
        type: GET_PRODUCTS_BY_SELL, 
        payload: request
    }
}

function getProductsToShop(skip, limit, filters=[], previousState=[]){
    const data = {skip, limit, filters}
    const request = 
        axios.post(`${PRODUCT_SERVER}/shop`, data)
        .then(response => {
            let newState = [
                ...previousState,
                ...response.data.articles
            ]

            return{
                size: response.data.size,
                articles: newState
            }
    });
    
    return {
        type: GET_PRODUCTS_TO_SHOP, 
        payload: request
    }
}

function getBrands(){
    const request = 
        axios.get(`${PRODUCT_SERVER}/brands`)
        .then(response => response.data);
    
    return {
        type: GET_BRANDS, 
        payload: request
    }
}

// function addBrand(dataToSubmit, existingBrands){
//     const request = 
//         axios.post(`${PRODUCT_SERVER}/brand`, dataToSubmit)
//         .then(response =>{
//             let brands = [...existingBrands, response.data.brand];
//             return {success: response.data.success, brands}
//         });
    
//     return {
//         type: ADD_BRAND, 
//         payload: request
//     }
// }

function getMaterials(){
    const request = 
        axios.get(`${PRODUCT_SERVER}/materials`)
        .then(response => response.data);
    
    return {
        type: GET_MATERIALS, 
        payload: request
    }
}

// function addWood(dataToSubmit, existingWoods){
//     const request = 
//         axios.post(`${PRODUCT_SERVER}/wood`, dataToSubmit)
//         .then(response =>{
//             let woods = [...existingWoods, response.data.wood];
//             return {success: response.data.success, woods}
//         });
    
//     return {
//         type: ADD_WOOD, 
//         payload: request
//     }
// }

// function addProduct(dataToSubmit){
//     const request = 
//         axios.post(`${PRODUCT_SERVER}/article`, dataToSubmit)
//         .then(response => response.data);
    
//     return {
//         type: ADD_PRODUCT, 
//         payload: request
//     }
// }

// function clearProduct(){
//     return {
//         type: CLEAR_PRODUCT, 
//         payload: ''
//     }
// }

// function getProductDetail(id){
//     const request = 
//         axios.get(`${PRODUCT_SERVER}/articles_by_id?id=${id}&type=single`)
//         .then(response => response.data[0]);
    
//     return {
//         type: GET_PRODUCT_DETAIL, 
//         payload: request
//     }
// }
// function clearProductDetail(){
//     return {
//         type: CLEAR_PRODUCT_DETAIL, 
//         payload: ''
//     }
// }


export {
    getProductsByArrival, 
    getProductsBySell, 
    getBrands, getMaterials, 
    getProductsToShop, 
    // addProduct, 
    // clearProduct, 
    // addBrand, 
    // addWood,
    // getProductDetail,
    // clearProductDetail
}

