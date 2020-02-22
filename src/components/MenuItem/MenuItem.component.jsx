import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.styles.scss';

const MenuItem = ({ menuTitle, imageUrl, size, history, match, linkUrl }) => {
    return (
        <div 
            className={ `${ size } 
            menu-item` } 
            onClick={ () => history.push(`${ match.url }${ linkUrl }`) } 
        >
            <div style={{ backgroundImage: `URL(${ imageUrl })` }} className='background-image'>
            </div>
            <div className='content'>
                <h1 className='title'>{ menuTitle }</h1>
                <span>Shop now</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);
