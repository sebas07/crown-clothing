import React from "react";

import './CollectionItem.styles.scss';

const CollectionItem = ({ id, name, imageUrl, price }) => {
    return (
        <div key={ id } className='item'>
            <div className='collection-item'>
                <div style={{ backgroundImage: `URL(${ imageUrl })` }} className='background-image'>
                </div>
                <div className='content'>
                    <span>Add to cart</span>
                </div>
            </div>
            <div className='item-info'>
                <p>{ name }</p>
                <p>{ price }</p>
            </div>
        </div>
    );
}

export default CollectionItem;
