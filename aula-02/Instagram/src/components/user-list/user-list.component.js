import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'

export class UserList extends React.Component {
    renderUserPerfil = (user) => {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.perfil}
                    source={{ uri: user.perfil }} />
                <View style={styles.content}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.status}>{user.status}</Text>
                </View>
                <Image
                    style={styles.camera}
                    source={require('../../img/camera-outline.png')} />
            </View>
        )
    }

    render() {
        return (
            <ScrollView>
                {this.props.users.map((user) => this.renderUserPerfil(user))}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 30
    },
    content: {

    },
    title: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 30
    }
})