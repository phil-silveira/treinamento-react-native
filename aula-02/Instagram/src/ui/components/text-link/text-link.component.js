import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export class TextLink extends React.Component {
    render() {
        const { children, onPress, style } = this.props

        return (
            <TouchableOpacity onPress={onPress}>
                <Text
                    style={{ color: '#3897F0', textTransform: 'capitalize', ...style }}
                >
                    {children}
                </Text>
            </TouchableOpacity>
        )
    }
}