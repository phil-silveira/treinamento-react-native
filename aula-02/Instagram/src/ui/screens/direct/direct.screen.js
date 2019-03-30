import React from 'react'
import { Text, TouchableOpacity, StatusBar, ScrollView, View } from 'react-native'

import { SearchBar, IgIcon, IgRoundImage } from '../../components'

import { HeaderBackButton, NavigationActions } from 'react-navigation'

import api from '../../../api/api-fake.json'

import { BaseScreen } from '../../screens'

import styles from './direct.style'

import { CAMERA_ROUTES } from '../../navigator/routes/camera/camera.route'

export class DirectScreen extends BaseScreen {
    static navigationOptions = ({ navigation }) => {
        const title = navigation.getParam('title')

        return {
            headerLeft: <HeaderBackButton onPress={navigation.getParam('_onDismiss')} />,
            title: "Direct"
        }
    }

    constructor(props) {
        super(props)

        this.state = {
            searchText: '',
        }

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

    goToCamera = () => {
        this.props.navigation.navigate(CAMERA_ROUTES.CAMERA)
    }

    _renderContact(contact) {
        return (
            <View
                key={contact.id}
                style={styles.contactContainer}>
                <IgRoundImage
                    size={55}
                    source={{ uri: contact.photo }}
                />
                <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={{ color: '#262626' }}>{contact.user}</Text>
                </View>
                <TouchableOpacity
                    onPress={this.goToCamera}
                >
                    <IgIcon name='camera-outline' style={{ fontSize: 22 }} />
                </TouchableOpacity>
            </View>
        )
    }

    _renderCameraButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.cameraButton}
                onPress={this.goToCamera}
            >
                <IgIcon name='photo-camera' style={styles.cameraButtonIcon} />
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
        const { searchText } = this.state

        return (
            <React.Fragment>
                <SearchBar
                    value={searchText}
                    onTextChange={(text) => this.setState({ searchText: text })}
                />
                <ScrollView>
                    {this._renderContacts()}
                </ScrollView>
                {this._renderCameraButton()}
            </React.Fragment>
        )
    }
}