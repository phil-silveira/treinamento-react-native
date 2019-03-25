import React from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'

export default class IgCameraControlBar extends React.Component {
    renderButtonTakePicture = () => {

    }

    renderButtonChangeCamera = () => {

    }

    renderPhotoPreview = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                {renderPhotoPreview()}
                {renderButtonTakePicture()}
                {renderButtonChangeCamera()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: '#262626',
        opacity: 0.5,
        width: Dimensions.get('window').width,
        height: 300,
    },
    Btn: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'white',
    },
    takePicture: {},
    changeCamera: {},
    photoPreview: {}
})