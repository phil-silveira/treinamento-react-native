import React from 'react'
import { StatusBar } from 'react-native'

import { IgHeader, IgIcon } from '../../components'

import { DIRECT_ROUTES } from '../../navigator/routes/direct/direct.route'
import { CAMERA_ROUTES } from '../../navigator/routes/camera/camera.route'

import styles from './nav-bar.style'

export class NavBar extends React.Component {
    constructor() {
        super()

        this.goToCamera = this.goToCamera.bind(this)
        this.goToDirect = this.goToDirect.bind(this)
    }

    goToCamera() {
        this.props.navigation.navigate(CAMERA_ROUTES.CAMERA)
    }

    goToDirect() {
        this.props.navigation.navigate(DIRECT_ROUTES.DIRECT, {
            title: 'Direct Message NavBar'
        })
    }

    render() {
        return (
            <React.Fragment>
                <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
                <IgHeader
                    style={styles.container}
                    left={<IgIcon name='camera-outline' style={{ fontSize: 20 }} />}
                    center={<IgIcon name='instagram-logo' style={{ fontSize: 25, marginTop: 50 }} />}
                    right={<IgIcon name='paper-plane' style={{ fontSize: 25 }} />}

                    onPressLeft={() => this.goToCamera()}
                    onPressRight={() => this.goToDirect()}
                />
            </React.Fragment>
        )
    }
}