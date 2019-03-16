import React from 'react'
import { TextInput, View } from 'react-native'
import { IgIcon } from '../../components/'

import styles from './search-bar.style'

export class SearchBar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <IgIcon
                    name='search'
                    style={styles.icon}
                />
                <TextInput
                    style={styles.text}
                    placeholder='Search'
                />
            </View>
        )
    }
}