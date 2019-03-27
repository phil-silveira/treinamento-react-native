import React, { Component } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import Permissions from 'react-native-permissions'

import { IgCameraControlBar } from './sections/ig-camera-control-bar.component'

import { StorageService } from '../../services'

import { styles } from './ig-camera.style'

const CAMERA_PERMITION_TYPE = 'camera'
const MICROPHONE_PERMISSION_TYPE = 'microphone'

const CAMERA_TYPE = {
    BACK: RNCamera.Constants.Type.back,
    FRONT: RNCamera.Constants.Type.front,
}

export class IgCamera extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cameraPermission: null,
            microphonePermission: null,
            cameraOptions: {
                type: CAMERA_TYPE.BACK
            }
        }

        this.verifyPhotoIDExist()

        this.onRef = this.onRef.bind(this)
        this.takePicture = this.takePicture.bind(this)
        this._requestPermissions = this._requestPermissions.bind(this)
        this._requestCameraPermission = this._requestCameraPermission.bind(this)
        this._requestMicrophonePermission = this._requestMicrophonePermission.bind(this)
        this._checkPermissions = this._checkPermissions.bind(this)
        this._hasPermission = this._hasPermission.bind(this)
    }

    componentDidMount() {
        this._requestPermissions()
    }

    _requestPermissions() {
        this._requestCameraPermission().then(this._requestMicrophonePermission)
    }

    _requestCameraPermission() {
        return Permissions.request(CAMERA_PERMITION_TYPE).then(response => {
            this.setState({ cameraPermission: response })
        })
    }

    _requestMicrophonePermission() {
        return Permissions.request(MICROPHONE_PERMISSION_TYPE).then(response => {
            this.setState({ microphonePermission: response })
        })
    }

    _checkPermissions() {
        const permitionsToCheck = [CAMERA_PERMITION_TYPE, MICROPHONE_PERMISSION_TYPE]

        Permissions.checkMultiple(permitionsToCheck).then(({ camera, microphone }) => {
            this.setState({
                cameraPermission: camera,
                microphonePermission: microphone
            })
        })
    }

    _hasPermission() {
        const { cameraPermission, microphonePermission } = this.state

        return cameraPermission === 'authorized' && microphonePermission === 'authorized'
    }

    onRef(reference) {
        this.camera = reference
    }

    async takePicture() {
        if (this.camera && this._hasPermission()) {
            const options = { base64: true, pauseAfterCapture: true }
            const data = await this.camera.takePictureAsync(options)

            this.camera.resumePreview()

            const nextPhotoID = await (Number(StorageService.getString('photoID')) + 1).toString()
            await StorageService.setObject(nextPhotoID, { uri: data.uri })
            await StorageService.setString('photoID', nextPhotoID)

            // Alert.alert(nextPhotoID)

            this.setState({
                photoPreview: { uri: data.uri }
            })
        }
    }

    verifyPhotoIDExist = async () => {
        const photoID = await StorageService.getString('photoID')

        // if (photoID === null) {
        await StorageService.setString('photoID', '1')
        // }

    }

    toggleCamera = () => {
        const { cameraOptions } = this.state
        const type = cameraOptions.type === CAMERA_TYPE.BACK ? CAMERA_TYPE.FRONT : CAMERA_TYPE.BACK

        this.setState({ cameraOptions: { type } })
    }

    renderCamera() {
        const { cameraOptions } = this.state

        return (
            <View style={styles.camera.container}>
                <RNCamera
                    style={styles.camera.rnCamera}
                    ref={this.onRef}
                    flashMode={RNCamera.Constants.FlashMode.auto}
                    type={cameraOptions.type}
                />

                <IgCameraControlBar
                    onPressTakePicture={this.takePicture}
                    photoPreview={this.state.photoPreview}

                    onPressChangeCamera={this.toggleCamera}
                />
            </View>
        )
    }

    renderPermissionRequest() {
        return (
            <View style={styles.permissionRequest.container}>
                <Text style={styles.permissionRequest.title}>
                    Precisamos de permissão para acessar sua câmera e seu microfone!
                </Text>
                <TouchableOpacity
                    style={styles.permissionRequest.button}
                    onPress={this._requestPermissions}
                    activeOpacity={0.8}
                >
                    <Text style={styles.permissionRequest.buttonText}>
                        PERMITIR
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            this._hasPermission() ? this.renderCamera() : this.renderPermissionRequest()
        )
    }
}