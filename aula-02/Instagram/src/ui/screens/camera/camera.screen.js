import React from 'react'
import { View, StatusBar } from 'react-native'

import { IgCamera } from '../../components'

export class CameraScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent barStyle="light-content" />
                <IgCamera />
            </View>
        )
    }
}
