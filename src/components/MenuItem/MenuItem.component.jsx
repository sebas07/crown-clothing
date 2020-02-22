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

// withRouter receives a component as an argument and transforms it into a new component and returns it
// with this the new component has access to the Parent's properties without needing us to pass them
// throughout all the between components. Here we give MenuItem access to the Route properties 
// of history and match that are in the App component (where react-router-dom was implemented)
