import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./orders.css"
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {

    const savedCart = useLoaderData();
    const [cart,setCart]=useState(savedCart);

   

    const handleRemoveFromTheCart = (id)=>{
        const remaining = cart.filter(product => product.id !==id);
        removeFromDb(id)
        setCart(remaining)
    }
    

    const handleClearCart = ()=>{
        setCart([]);
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                
                {
                    cart.map(product => 
                    <ReviewItem 
                    key={product.id}
                    product={product}
                    handleRemoveFromTheCart= {handleRemoveFromTheCart}
                    > </ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart 
                cart={cart}
                handleClearCart ={handleClearCart}
                >
                    <div>
                        
                            <Link to='/checkout' className='checkout-link'>
                            <button className='checkout-page'>
                            checkout
                            <FontAwesomeIcon icon={faCheck} />
                            </button>
                            </Link>
                            
                        
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;