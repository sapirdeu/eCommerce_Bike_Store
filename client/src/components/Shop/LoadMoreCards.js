import React from 'react'
import CardBlockShop from '../utils/CardBlockShop'

function LoadMoreCards(props) {
    return (
        <div>
            <div>
                <CardBlockShop
                    list={props.products}
                />
            </div>

            {
                props.size > 0 && props.size >= props.limit ?
                <div className="load_more_container">
                    <span onClick={()=>props.loadMore()}>Load More</span>
                </div>
                :
                    null
            }

            
        </div>
    )
}

export default LoadMoreCards
