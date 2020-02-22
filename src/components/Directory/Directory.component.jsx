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
                    title: 'Hats',
                    linkUrl: 'hats'
                },
                {
                    id: 2,
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    title: 'Jackets',
                    linkUrl: ''
                },
                {
                    id: 3,
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    title: 'Sneackers',
                    linkUrl: ''
                },
                {
                    id: 4,
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    title: 'Womens',
                    linkUrl: ''
                },
                {
                    id: 5,
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    title: 'Mens',
                    linkUrl: ''
                }
            ]
        }
    }

    render () {
        return (
            <div className='menu-container'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => {
                        return <MenuItem key={ id } { ...otherSectionProps } />
                    })
                }
            </div>
        );
    }
}

export default Directory;

// ...otherSectionProps = {imageUrl={ imageUrl } menuTitle={ title } size={ size }
// we are passing all the props of section to MenuItem, so we can reduce it of this way
