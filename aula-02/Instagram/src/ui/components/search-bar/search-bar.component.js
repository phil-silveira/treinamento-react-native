import React from 'react'
import { TextInput, View } from 'react-native'
import { IgIcon } from '../../components/'

import styles from './search-bar.style'

export class SearchBar extends React.Component {
    render() {
        const { onTextChange, value } = this.props

        return (
            <View style={styles.searchInputContainer}>
                <TextInput
                    style={styles.searchInput}
                    onTextChange={onTextChange}
                    placeholder='Search'
                    value={value}
                />
                <IgIcon
                    name='search'
                    style={styles.icon}
                />
            </View>
        )
    }
}