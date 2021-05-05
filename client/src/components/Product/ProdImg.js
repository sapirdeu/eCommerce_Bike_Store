import React, { useState, useEffect } from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function ProdImg(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [lightboxImages, setLightboxImages] = useState([]);

    useEffect(() => {
        if (props.detail.images.length > 0){
            let currLightboxImages = [];
            props.detail.images.forEach(item=>{
                currLightboxImages.push(item.url)
            })
            setLightboxImages(currLightboxImages);
        }
    }, [props.detail.images]);

    const renderCardImage = (images) => {
        if(images.length > 0){
            return images[0].url
        } else{
            return `/images/image_not_availble.png`
        }
    }

    const handleLightbox = (position) => {
        if(lightboxImages.length > 0){
            setIsOpen(true);
            setPhotoIndex(position);
        }
    }

    const showThumbs = () => (
        lightboxImages.map((item,i)=> (
            i > 0 ?
                <div
                    key={i}
                    onClick={()=>handleLightbox(i)}
                    className="thumb"
                    style={{background: `url(${item}) no-repeat`}}
                >
                </div>
            : null
        ))
    )

    return (
        <div className="product_image_container">
            <div className="main_pic">
                <div
                    style={{background: `url(${renderCardImage(props.detail.images)}) no-repeat`}}
                    onClick={()=>handleLightbox(0)}
                >
                </div>
            </div>
            <div className="main_thumbs">
                {showThumbs(props.detail)}
            </div>

            {isOpen && (
                <Lightbox
                    mainSrc={lightboxImages[photoIndex]}
                    nextSrc={lightboxImages[(photoIndex + 1) % lightboxImages.length]}
                    prevSrc={lightboxImages[(photoIndex + lightboxImages.length - 1) % lightboxImages.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + lightboxImages.length - 1) % lightboxImages.length)}
                    onMoveNextRequest={() =>setPhotoIndex((photoIndex + 1) % lightboxImages.length)}
                />
            )}
        </div>
    )
}

export default ProdImg
