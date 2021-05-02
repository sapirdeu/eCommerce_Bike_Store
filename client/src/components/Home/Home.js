import React, { useEffect } from 'react'
import HomePromotion from './HomePromotion'
import HomeSlider from './HomeSlider'

import {withRouter} from 'react-router-dom'
import {useDispatch,connect} from 'react-redux'
import {getProductsByArrival, getProductsBySell} from '../../redux/actions/products_actions'
import CardBlock from '../utils/CardBlock'

function Home(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsBySell())
        dispatch(getProductsByArrival())
    }, [dispatch]);


    return (
        <div>
            <HomeSlider/>
            <CardBlock 
                list={props.products.byArrival}
                title="New Arrivals"
            />
            <HomePromotion/>
            <CardBlock 
                list={props.products.bySell}
                title="Best Selling Bikes"
            />
        </div>
    )
}

function mapStateToProps(state){
    return{
        products: state.products
    }
}

export default connect(mapStateToProps)(withRouter(Home));
