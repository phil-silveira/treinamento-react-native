import React from 'react'
import { ImageBackground, View, Text, TextInput, TouchableOpacity, Button } from 'react-native'

import { IgIcon } from '../../components'

import styles from './sign-in.style'

export class SignInScreen extends React.Component {
    state = {
        username: '',
        password: '',
    }

    renderLink = (text, link) => {
        return (
            <View style={styles.row}>
                <View>
                    <Text style={styles.h3}>
                        {text}
                    </Text>
                </View>
                <TouchableOpacity style={{ borderBottomColor: '#fff', borderBottomWidth: 1 }}>
                    <Text style={styles.h4}>
                        {link}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderForm = () => {
        const { username, password } = this.state

        return (
            <View style={styles.form}>
                <Text style={styles.h2}>
                    Sign in and use more features
                </Text>
                <TextInput
                    placeholder='Email or username'
                    style={styles.input}
                    value={username}
                    onChangeText={(username) => this.setState({ username })}
                />
                <TextInput
                    placeholder='Password'
                    style={styles.input}
                    value={password}
                    onChangeText={(password) => this.setState({ password })}
                />
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.h3}>Sign in</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderSectionDivider = text => {
        return (
            <View style={styles.row} >
                <View style={styles.bar} />
                <Text style={{ ...styles.h3, margin: 15 }} >{text}</Text>
                <View style={styles.bar} />
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
                        name='instagram-logo' />

                    {this.renderForm()}

                    {this.renderLink('Forgot your login details?', 'Get help signing in.')}

                    {this.renderSectionDivider('OR')}

                    <View style={{ flex: 3, justifyContent: 'space-around' }}>
                        <TouchableOpacity style={styles.row}>
                            <IgIcon name='facebook-icon' style={{ fontSize: 15, color: '#fff', margin: 10 }} />
                            <Text style={styles.h3}>Continue with Facebook</Text>
                        </TouchableOpacity>

                        {this.renderLink('Don\'t have an account?', 'Signing up.')}
                    </View>
                </View>
            </ImageBackground>
        )
    }
}