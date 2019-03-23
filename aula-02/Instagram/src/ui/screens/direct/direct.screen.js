import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { SearchBar, UserList } from '../../../components'

import api from '../../../api/api-fake.json'

export class DirectScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SearchBar />
                <UserList users={api.users} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30
    },
    title: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 30
    }
})