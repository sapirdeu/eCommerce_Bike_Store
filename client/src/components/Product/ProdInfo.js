import React from 'react'
import MyButton from '../utils/MyButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faTruck from '@fortawesome/fontawesome-free-solid/faTruck'
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'


function ProdInfo(props) {
    const detail = props.detail;

    const showProdTags = (detail) => (
        <div className="product_tags">
            {
                detail.shipping ?
                    <div className="tag">
                        <div>
                            <FontAwesomeIcon icon={faTruck}/>
                        </div>
                        <div className="tag_text">
                            <div>Free Shipping</div>
                            <div>And return</div>
                        </div>
                    </div>
                : null
            }

            {
                detail.available ?
                    <div className="tag">
                        <div>
                            <FontAwesomeIcon icon={faCheck}/>
                        </div>
                        <div className="tag_text">
                            <div>Available</div>
                            <div>in store</div>
                        </div>
                    </div>
                :
                    <div className="tag">
                        <div>
                            <FontAwesomeIcon icon={faTimes}/>
                        </div>
                        <div className="tag_text">
                            <div>Not Available</div>
                            <div>Preorder only</div>
                        </div>
                    </div>
            }
        </div>
    )

    const showProdActions = (detail) => (
        <div className="product_actions">
            <div className="price">${detail.price}</div>
            <div className="cart">
                <MyButton
                    type="add_to_cart_link"
                    runAction={()=>{
                        props.addToCart(detail._id)
                    }}
                />
            </div>
        </div>
    )

    const showProdSpecifications = (detail) => (
        <div className="product_specifications">
            <h2 style={{paddingTop: '5px'}}>Specifications:</h2>
            <div>
                <div className="item">
                    <strong style={{fontSize: '14px'}}>Front Fork Travel:</strong> {detail.frontForkTravel} mm
                </div>
                <div className="item">
                    <strong style={{fontSize: '14px'}}>Material:</strong> {detail.material.name}
                </div>
                <div className="item">
                    <strong style={{fontSize: '14px'}}>Weight:</strong> {detail.weight} kg
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <h1 className="padding20">{detail.brand.name} {detail.name}</h1>
            <p>{detail.description}</p>
            <br/>
            {showProdTags(detail)}
            {showProdActions(detail)}
            {showProdSpecifications(detail)}
        </div>
    )
}

export default ProdInfo
