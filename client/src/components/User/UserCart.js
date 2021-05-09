import React, { useEffect, useState } from 'react'
import UserLayout from '../../hoc/UserLayout'
import {getCartItems, removeCartItem, onSuccessBuy} from '../../redux/actions/user_actions'

import {withRouter} from 'react-router-dom'
import {useDispatch,connect} from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faFrown from '@fortawesome/fontawesome-free-solid/faFrown'
import faSmile from '@fortawesome/fontawesome-free-solid/faSmile'
import UserProductBlock from '../utils/User/UserProductBlock'
import Paypal from '../utils/Paypal'

function UserCart(props) {
    //const [isLoading, setIsLoadind] = useState(true);
    const [total, setTotal] = useState(0);
    const [showTotal, setShowTotal] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        let cartItems = [];
        let user = props.user;
        
        if(user.userData.cart){
            if(user.userData.cart.length > 0){
                user.userData.cart.forEach(item=>{
                    cartItems.push(item.id)
                });
                dispatch(getCartItems(cartItems, user.userData.cart))
                .then((response)=>{
                    if(response.payload.length > 0){
                        calculateTotalPrice(response.payload)
                    }
                })
            }
        }
    }, [dispatch]);

    const calculateTotalPrice = (cartDetail) => {
        let currTotal = 0;
        cartDetail.forEach(item=>{
            currTotal += parseInt(item.price, 10) * item.quantity;
        })
        setTotal(currTotal);
        setShowTotal(true);
    }

    const removeFromCart = (id) => {
        dispatch(removeCartItem(id))
        .then((response)=>{
            if(response.payload.cartDetail.length <=0 ){
                setShowTotal(false);
            } else{
                calculateTotalPrice(response.payload.cartDetail);
            }
        })
    }

    const showNoItemsMessage = () => (
        <div className="cart_no_items">
            <FontAwesomeIcon icon={faFrown}/>
            <div>You have no items</div>
        </div>
    )
    
    const transactionError = (data) => {
        console.log("Paypal error!");
    }
    
    const transactionCanceled = (data) => {
        console.log("Transaction canceled!");
    }

    const transactionSuccess = (data) => {
        dispatch(onSuccessBuy({cartDetail:props.user.cartDetail, paymentData: data}))
        .then((response)=>{
            if(response.payload.success){
                setShowTotal(false);
                setShowSuccess(true);
            }
        })
    }

    return (
        <UserLayout>
            <div>
                <h1>My cart</h1>
                <div className="user_cart">
                    <UserProductBlock
                        products={props.user}
                        type="cart"
                        removeItem={(id)=>removeFromCart(id)}
                    />
                    {
                        showTotal ?
                            <div className="user_cart_sum">
                                <div>
                                    Total amount: ${total}
                                </div>
                            </div>
                        : 
                            showSuccess?
                                <div className="cart_success">
                                    <div className="cart_no_items">
                                        <FontAwesomeIcon icon={faSmile}/>
                                        <div>THANK YOU</div>
                                        <div>YOUR ORDER IS NOW COMPLETE</div> 
                                    </div>
                                </div>
                            :
                                showNoItemsMessage()
                    }
                </div>
                {
                    showTotal ?
                        <div className="paypal_button_container">
                            <Paypal
                                toPay={total}
                                onError={(data)=>transactionError(data)}
                                onCancel={(data)=>transactionCanceled(data)}
                                onSuccess={(data)=>transactionSuccess(data)}
                            />
                        </div>
                    : null
                } 
            </div>
        </UserLayout>
    )
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(withRouter(UserCart));
