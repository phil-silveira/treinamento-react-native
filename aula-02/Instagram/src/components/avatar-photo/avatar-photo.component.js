import React from 'react'
import { Image } from 'react-native'

export class AvatarPhoto extends React.Component {
    render() {
        const { source, size, style } = this.props

        return (
            <Image
                source={source}
                style={{
                    width: size,
                    height: size,
                    borderRadius: size,
                    margin: size / 10,
                    ...style
                }}
            />
        )
    }
}