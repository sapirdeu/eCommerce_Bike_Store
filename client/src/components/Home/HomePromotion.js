import React, {useState} from 'react'
import MyButton from '../utils/MyButton'

function HomePromotion(props) {
    const [promotion] = useState(
        {
            img: 'images/featured/featured_home_4.jpg',
            lineOne: 'special deals',
            lineTwo: 'for mountain bikes',
            linkTitle: 'Shop now',
            linkTo: '/shop',
        }
    )

    const renderPromotion = () => (
        promotion ?
            <div className="home_promotion_img"
                style = {{
                    background: `url(${promotion.img})`
                }}
            >
                <div className="tag title">
                    {promotion.lineOne}
                </div>
                <div className="tag low_title">
                    {promotion.lineTwo}
                </div>
                <MyButton
                    type = "default"
                    title = {promotion.linkTitle}
                    linkTo = {promotion.linkTo}
                    addStyles = {{margin: '10px 0 0 0'}}
                />
            </div>  
        :
            null
    )

    return (
        <div className="home_promotion">
            {renderPromotion()}
        </div>
    )
}

export default HomePromotion
