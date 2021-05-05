import React, { useEffect } from 'react'
import PageTop from '../utils/PageTop'
import {withRouter} from 'react-router-dom'
import {useDispatch,connect} from 'react-redux'
import {getProductDetail, clearProductDetail} from '../../redux/actions/products_actions'
import {addToCart} from '../../redux/actions/user_actions'
import CircularProgress from '@material-ui/core/CircularProgress'
import ProdInfo from './ProdInfo'
import ProdImg from './ProdImg'


function ProductPage(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        const id = props.match.params.id;
        dispatch(getProductDetail(id));
        return () => {
            dispatch(clearProductDetail());
          }
    }, [dispatch]);

    const AddToCartHandler = (id) => {
        dispatch(addToCart(id));
    }

    return (
        <div>
            <PageTop title="Product detail"/>
            <div className="container">
            {
                props.products.prodDetail ?
                    <div className="product_detail_wrapper"> 
                        <div className="left">
                            <div style={{width:'500px'}}>
                                <ProdImg detail={props.products.prodDetail}/>
                            </div>
                        </div>
                        <div className="right">
                            <ProdInfo
                                addToCart = {(id)=>AddToCartHandler(id)}
                                detail={props.products.prodDetail}
                            />
                        </div>
                    </div>
                :
                    <CircularProgress style={{color: '#2196F3'}} thickness={7}/>
            }
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        products: state.products
    }
}

export default connect(mapStateToProps)(withRouter(ProductPage));