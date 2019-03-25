import React from 'react'
import { View } from 'react-native'

import { IgCamera } from '../../components'

export class CameraScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <IgCamera />
            </View>
        )
    }
}
