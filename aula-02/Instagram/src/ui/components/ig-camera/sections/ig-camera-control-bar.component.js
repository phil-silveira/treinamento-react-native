import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { IgIcon, IgRoundImage } from '../../'

export class IgCameraControlBar extends React.Component {
    renderBtn = (child, onPress) => (
        <TouchableOpacity
            style={styles.Btn}
            onPress={onPress}
        >
            {child}
        </TouchableOpacity>
    )

    renderButtonTakePicture = (onPressTakePicture) => (
        this.renderBtn(
            <View style={styles.takePicture} />,
            onPressTakePicture
        )
    )

    renderButtonChangeCamera = (onPressChangeCamera) => (
        this.renderBtn(
            <IgIcon name='loop-arrow' style={styles.changeCamera} />,
            onPressChangeCamera
        )
    )

    renderPhotoPreview = (photoPreview) => (
        photoPreview ?
            this.renderBtn(
                <IgRoundImage
                    source={photoPreview}
                    size={60}
                />,
                null
            ) :
            <View style={{ width: 60 }} />
    )

    render() {
        const { onPressTakePicture, onPressChangeCamera, photoPreview } = this.props

        return (
            <View style={styles.controlBar}>
                {this.renderPhotoPreview(photoPreview)}
                {this.renderButtonTakePicture(onPressTakePicture)}
                {this.renderButtonChangeCamera(onPressChangeCamera)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    controlBar: {
        width: '100%',
        height: 100,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    Btn: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    takePicture: {
        width: 55,
        height: 55,
        borderRadius: 50,
        backgroundColor: 'white',
    },
    changeCamera: {
        color: 'white',
        fontSize: 18,
    },
    photoPreview: {}
})