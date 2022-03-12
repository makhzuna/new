import React from 'react';
import ProductItem from '../product-item/ProductItem';

const Block = (props) => {
    return (
        <div className='container'>
            {props.data.map((elem, index) => {
                console.log(elem)
                return (
                  <ProductItem elem ={elem} key = {index}/>
                )
            })}
        </div>
    );
};

export default Block;