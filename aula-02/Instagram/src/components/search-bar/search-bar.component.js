import React from 'react'
import { Image, TextInput, View, StyleSheet } from 'react-native'

import styles from './search-bar.style'

export class SearchBar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.icon}
                    source={require('../../img/search.png')}
                />
                <TextInput
                    style={styles.text}
                    placeholder='Search'
                />
            </View>
        )
    }
}