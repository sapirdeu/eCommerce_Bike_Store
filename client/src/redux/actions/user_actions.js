import axios from 'axios'
import {
        LOGIN_USER, 
        REGISTER_USER, 
        AUTH_USER, 
        LOGOUT_USER,
        ADD_TO_CART_USER,
        GET_CART_ITEMS_USER,
        REMOVE_CART_ITEMS_USER,
        ON_SUCCESS_BUY_USER,
        // UPDATE_DATA_USER,
        // CLEAR_UPDATE_USER_DATA
} from './Types'
import {USER_SERVER, PRODUCT_SERVER} from '../../components/utils/Misc'

function registerUser(dataToSubmit){
    const request = 
        axios.post(`${USER_SERVER}/registers`, dataToSubmit)
        .then(response => response.data);
    
    return {
        type: REGISTER_USER, 
        payload: request
    }
}

function loginUser(dataToSubmit){
    const request = 
        axios.post(`${USER_SERVER}/login`, dataToSubmit)
        .then(response => response.data);
    
    return {
        type: LOGIN_USER, 
        payload: request
    }
}

function auth(){
    const request = 
        axios.get(`${USER_SERVER}/auth`)
        .then(response => response.data);
    
    return {
        type: AUTH_USER, 
        payload: request
    }
}

function logoutUser(){
    const request = 
        axios.get(`${USER_SERVER}/logout`)
        .then(response => response.data);
    
    return {
        type: LOGOUT_USER, 
        payload: request
    }
}

function addToCart(id){
    const request = 
    axios.post(`${USER_SERVER}/addToCart?productId=${id}`)
    .then(response => response.data);

    return {
        type: ADD_TO_CART_USER, 
        payload: request
    }
}

function getCartItems(cartItems, userCart){
    const request = 
        axios.get(`${PRODUCT_SERVER}/articles_by_id?id=${cartItems}&type=array`)
        .then(response => {
            // For each product in userCart (this information also contains the quantity), 
            // we will go through all the products returned from the server (response.data) 
            // and if we found the same id between what came back from the server and the 
            // item in userCart, we will add to this item the field of the quantity
            userCart.forEach(item=>{
                response.data.forEach((k,i)=>{
                    if(item.id === k._id){
                        response.data[i].quantity = item.quantity;
                    }
                })
            })
            return response.data;
        });
    
    return {
        type: GET_CART_ITEMS_USER, 
        payload: request
    }
}

function removeCartItem(id){
    const request = 
        axios.get(`${USER_SERVER}/removeFromCart?_id=${id}`)
        .then(response => {
            response.data.cart.forEach(item=>{
                response.data.cartDetail.forEach((currItem,i)=>{
                    if(item.id === currItem._id){
                        response.data.cartDetail[i].quantity = item.quantity;
                    }
                })
            })
            return response.data;
        });
    
    return {
        type: REMOVE_CART_ITEMS_USER, 
        payload: request
    }
}

function onSuccessBuy(data){
    const request = 
    axios.post(`${USER_SERVER}/successBuy`, data)
    .then(response => response.data);

    return {
        type: ON_SUCCESS_BUY_USER, 
        payload: request
    }
}

// function updateUserData(dataToSubmit){
//     const request = 
//     axios.post(`${USER_SERVER}/update_profile`, dataToSubmit)
//     .then(response => response.data);

//     return {
//         type: UPDATE_DATA_USER, 
//         payload: request
//     }
// }

// function clearUpdateUser(){
//     return {
//         type: CLEAR_UPDATE_USER_DATA, 
//         payload: ''
//     }
// }

export {
    loginUser, 
    registerUser, 
    auth, 
    logoutUser, 
    addToCart, 
    getCartItems,
    removeCartItem,
    onSuccessBuy,
    // updateUserData,
    // clearUpdateUser
}

