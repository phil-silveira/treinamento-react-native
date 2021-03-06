import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './ig-header.styles'

export class IgHeader extends React.Component {
    render() {
        const {
            left, center, right,
            onPressLeft, onPressRight,
            style
        } = this.props

        return (
            <View
                style={{ ...styles.header, ...style }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPressLeft}>
                    <Text
                        style={styles.text}
                    >
                        {left}
                    </Text>
                </TouchableOpacity >
                <View
                    style={styles.button}
                >
                    <Text
                        style={{ ...styles.text, fontWeight: '500' }}
                    >
                        {center}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPressRight}>
                    <Text
                        style={styles.text}
                    >
                        {right}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}