import React from 'react';
import './Directory.styles.scss';
import MenuItem from '../MenuItem/MenuItem.component';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    id: 1,
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    title: 'Hats'
                },
                {
                    id: 2,
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    title: 'Jackets'
                },
                {
                    id: 3,
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    title: 'Sneackers'
                },
                {
                    id: 4,
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    title: 'Womens'
                },
                {
                    id: 5,
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    title: 'Mens'
                }
            ]
        }
    }

    render () {
        return (
            <div className='menu-container'>
                {
                    this.state.sections.map(({ id, imageUrl, title, size }) => {
                        return <MenuItem key={ id } imageUrl={ imageUrl } menuTitle={ title } size={ size } />
                    })
                }
            </div>
        );
    }
}

export default Directory;
