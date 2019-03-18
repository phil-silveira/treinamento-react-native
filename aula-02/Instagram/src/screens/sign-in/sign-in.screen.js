import React from 'react'
import { ImageBackground, View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native'

import { IgIcon } from '../../components'

export class SignInScreen extends React.Component {
    renderLink = (text, link) => {
        return (
            <View style={styles.row}>
                <View>
                    <Text style={styles.h3}>
                        {text}
                    </Text>
                </View>
                <TouchableOpacity style={{ borderBottomColor: '#fff', borderBottomWidth: 1 }}>
                    <Text style={styles.h3}>
                        {link}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <ImageBackground
                source={require('../../img/sign-in-background.png')}
                style={styles.background}>
                <View style={styles.container} >
                    <IgIcon
                        style={styles.instagram}
                        name='instagram-logo'
                    />

                    <Text style={styles.h2}>
                        Sign in and use more features
                </Text>

                    <TextInput
                        placeholder='Email or username'
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Password'
                        style={styles.input}
                    />
                    <Button title='Sign in' />

                    {this.renderLink('Forgot your login details?', 'Get help signing in.')}

                    <View style={styles.row} >
                        <View style={styles.bar} />
                        <Text style={{ ...styles.h3, margin: 15 }} >OR</Text>
                        <View style={styles.bar} />
                    </View>

                    <TouchableOpacity style={styles.row}>
                        <IgIcon name='facebook-icon' style={{ fontSize: 15, color: '#fff', margin: 10 }} />
                        <Text style={styles.h3}>Continue with Facebook</Text>
                    </TouchableOpacity>

                    {this.renderLink('Don\'t have an account?', 'Signing up.')}
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    container: {
        flex: 1,
        marginVertical: 40,
        marginHorizontal: 30,
    },
    instagram: {
        fontSize: 40,
        color: '#fff',
        marginVertical: 40,
        textAlign: 'center',
    },
    h2: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
        margin: 20,
    },
    h3: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '100',
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#fafafa',
        borderRadius: 5,
        color: '#D8D8D8',
        fontSize: 15,
        marginVertical: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bar: {
        flex: 1,
        height: 2,
        backgroundColor: '#fff'
    }
})