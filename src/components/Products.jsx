import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Products.css';
import {Product} from './Product';

export const Products = () => {

    const {state: {products}, addToCart} = useContext(AppContext);

    console.log(addToCart, products);

    const handleAddToCart = product => () => {
        addToCart(product);
    }

    return (
        <div className="Products">
            <div className="Products-items">
                {products.map(product => (
                    <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
                ))}
            </div>
        </div>
    )
}
