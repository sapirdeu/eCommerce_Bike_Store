import Card from '../utils/Card'
import React from 'react'

function CardBlockShop(props) {
    const renderCards = (list) => (
        list ? 
            list.map(card=>(
                <Card
                    key={card._id}
                    {...card}
                />
            ))
        :
            null
    )

    return (
        <div className="card_block_shop">
            <div>
                <div>
                    {
                        props.list ? 
                            props.list.length === 0 ?
                                <div className="no_result">
                                    Sorry, no results
                                </div>
                            :
                                null
                        :
                            null
                    }

                    {renderCards(props.list)}
                </div>
            </div>
        </div>
    )
}

export default CardBlockShop
