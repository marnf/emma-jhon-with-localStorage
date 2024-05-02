import React from 'react';
import "./review-item.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product, handleRemoveFromTheCart}) => {
    
    const {name,id, img,price, quantity}=product;
    
    

    return (
        <div className='review-item'>
            <img src={img} alt="img" />

            <div className='review-details'>
                <p>{name}</p>
                <p>price:<span className='orange-text'>${price}</span></p>
                <p>order quantity: <span className='orange-text'>{quantity}</span> </p>
            </div>
            <button onClick={()=>handleRemoveFromTheCart(id)} className='btn-delete'>
            <FontAwesomeIcon icon={faTrash} />
            </button>
            
        </div>
    );
};

export default ReviewItem;