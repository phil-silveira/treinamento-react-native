import React from 'react'
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native'

import { IgIcon } from '../../components'

export class UserList extends React.Component {
    renderUserPerfil = (user, key) => {
        return (
            <View key={key} style={styles.container}>
                <View style={styles.perfilImageContainer}>
                    <Image
                        style={styles.perfilImage}
                        source={{ uri: user.perfil }} />
                    {user.status === 'online' ? <View style={styles.status} ></View> : null}
                </View>
                <View style={styles.content}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.info}>{user.info}</Text>
                </View>
                <IgIcon
                    style={styles.cameraIcon}
                    name='camera-outline' />
            </View>
        )
    }

    render() {
        const { users } = this.props
        return (
            <ScrollView>
                {users.map((user, key) => this.renderUserPerfil(user, key))}
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
        paddingVertical: 30,
        paddingHorizontal: 10
    },
    perfilImageContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    perfilImage: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 50,
    },
    status: {
        width: 25,
        height: 25,
        backgroundColor: 'lightgreen',
        borderWidth: 3,
        borderColor: '#fff',
        borderRadius: 50,
        position: 'absolute',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
    },
    cameraIcon: {
        fontSize: 30,
    },
    name: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Lato-Regular',

    }
})