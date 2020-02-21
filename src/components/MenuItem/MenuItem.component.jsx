import React from 'react';
import './MenuItem.styles.scss';

const MenuItem = ({ menuTitle, imageUrl, size }) => {
    return (
        <div className={ `${ size } menu-item` }>
            <div style={{ backgroundImage: `URL(${ imageUrl })` }} className='background-image'>
            </div>
            <div className='content'>
                <h1 className='title'>{ menuTitle }</h1>
                <span>Shop now</span>
            </div>
        </div>
    );
}

export default MenuItem;
