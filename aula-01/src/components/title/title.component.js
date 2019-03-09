import React from 'react'

import './title-component.css'
import marvel from '../../img/marvel.png'

export class Title extends React.PureComponent {
    render() {
        return (
            <div className='title-component'>
                <img src={marvel} alt='marvel' />
                <div className='gradient'>
                    <h1 className='text'>
                        {this.props.children}
                    </h1>
                </div>
            </div>
        )
    }
}