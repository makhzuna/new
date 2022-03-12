import React from 'react';

const ProductItem = ({elem}) => {
    return (
            <div className='block-img'>
                <img src={elem.src} alt="" />
                <div className="clas">
                    <h3>{elem.title}</h3>
                    <h4 className='price'>${elem.price}</h4>
                    <h4 className='description'>{elem.description}</h4>
                </div>
                <button className='btn'>add to cart</button>
            </div>
    );
};

export default ProductItem;