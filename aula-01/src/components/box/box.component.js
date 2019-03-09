import React from 'react'

import './box.css'

export class Box extends React.PureComponent {
    render() {
        return (
            <div className='box' >
                {this.props.children}
            </div>
        )
    }
}