import React from 'react'
import MyButton from './MyButton'
import {withRouter} from 'react-router-dom'
import {useDispatch,connect} from 'react-redux'
// import {addToCart} from '../../redux/actions/user_actions'


function Card(props) {
    const dispatch = useDispatch();

    const renderCardImage = (images) => {
        if(images.length > 0){
            return images[0].url;
        } else {
            return '/images/image_not_availble.png'
        }
    }

    return (
        <div className={`card_item_wrapper ${props.grid}`}>
            <div
                className="image"
                style={{
                    background: `url(${renderCardImage(props.images)}) no-repeat`
                }}
            > 
            </div>

            <div className="action_container">
                <div className="tags">
                    <div className="brand">{props.brand.name}, {props.name}</div>
                    <div className="name">${props.price}</div>
                    <div className="name">{props.weight} kg</div>
                </div>
            
                {
                    props.grid ?
                        <div className="description">
                            <p>{props.description}</p>
                        </div>
                    :
                        null
                }

                <div className="actions">
                    <div className="button_wrapp">
                        <MyButton
                            type="default"
                            altClass="card_link"
                            title="View product"
                            linkTo={`/product_detail/${props._id}`}
                            addStyles={{
                                margin: '10px 0 0 0'
                            }}
                        />
                    </div>
                    <div className="button_wrapp">
                        <MyButton
                            type="bag_link"
                            runAction={()=>{
                                // props.user.userData.isAuth ? 
                                //     dispatch(addToCart(props._id))
                                // : 
                                //     console.log('You need to log in')
                                console.log('added to cart')
                            }}
                            altClass="card_link"
                            title="View product"
                            linkTo={`/product_detail/${props._id}`}
                            addStyles={{
                                margin: '10px 0 0 0'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(withRouter(Card));
