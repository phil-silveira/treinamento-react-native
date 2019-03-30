import React from 'react'
import { Image } from 'react-native'

export class IgRoundImage extends React.Component {
    render() {
        const { source, size, style } = this.props

        return (
            <Image
                source={source}
                style={{
                    width: size,
                    height: size,
                    borderRadius: size,
                    borderWidth: 2,
                    borderColor: 'white',
                    ...style
                }}
            />
        )
    }
}