import React from 'react'
import { View } from 'react-native'

import { IgIcon } from '../../components'

import styles from './instagram-header.style'

export class InstagramHeader extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', height: 62 }}>
                <IgIcon
                    style={styles.icon}
                    name='camera-outline'
                />
                <IgIcon
                    style={styles.instagramLogo}
                    name='instagram-logo'
                />
                <IgIcon
                    style={styles.icon}
                    name='paper-plane'
                />
            </View>
        )
    }
}