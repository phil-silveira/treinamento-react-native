import React from 'react'
import { Image, Text, TouchableOpacity, StatusBar, ScrollView, View } from 'react-native'

import { SearchBar, IgIcon, IgCamera } from '../../../components'

import { HeaderBackButton, NavigationActions, StackActions } from 'react-navigation'

import api from '../../../api/api-fake.json'

import { BaseScreen } from '../../screens'

import styles from './direct.style'

export class DirectScreen extends BaseScreen {
    static navigationOptions = ({ navigation }) => {
        const title = navigation.getParam('title')

        return {
            title,
            headerLeft: <HeaderBackButton onPress={navigation.getParam('_onDismiss')} />
        }
    }

    constructor(props) {
        super(props)

        this._onDismiss = this._onDismiss.bind(this)
    }

    componentDidMount() {
        super.componentDidMount()

        this.props.navigation.setParams({
            _onDismiss: this._onDismiss
        })
    }

    _onDismiss() {

        const backAction = NavigationActions.back()
        this.props.navigation.dispatch(backAction)
    }

    screenWillFocus() {
        StatusBar.setTranslucent(false)
    }

    _renderContact(contact) {
        return (
            <View style={styles.contactContainer} key={contact.id}>
                <Image
                    source={{ uri: contact.photo }}
                    style={styles.contactPhoto}
                />
                <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text>{contact.user}</Text>
                </View>
                <IgIcon name='camera-outline' style={{ fontSize: 30 }} />
            </View>
        )
    }

    _renderCameraButton() {
        return (
            <TouchableOpacity activeOpacity={0.8} style={styles.cameraButton}>
                <IgIcon name='photo-camera' style={{ fontSize: 30 }} />
                <Text style={styles.cameraButtonText}>
                    Camera
            </Text>
            </TouchableOpacity>
        )
    }

    _renderContacts() {
        return api.contacts.map(contact => this._renderContact(contact))
    }

    renderContent() {
        return (
            <React.Fragment>
                <SearchBar />
                <ScrollView>
                    {this._renderContacts()}
                </ScrollView>
                {this._renderCameraButton()}
            </React.Fragment>
        )
    }
}