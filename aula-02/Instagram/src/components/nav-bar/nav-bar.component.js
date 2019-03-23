import React from 'react'
import { Platform, StatusBar, StyleSheet } from 'react-native'

import { IgHeader, IgIcon } from '../../components'

import { DIRECT_ROUTES } from '../../ui/navigator/routes/direct/direct.route'
import { CAMERA_ROUTES } from '../../ui/navigator/routes/camera/camera.route'

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
                    left={<IgIcon name='camera-outline' style={{ fontSize: 30 }} />}
                    center={<IgIcon name='instagram-logo' style={{ fontSize: 32 }} />}
                    right={<IgIcon name='paper-plane' style={{ fontSize: 30 }} />}

                    onPressLeft={() => this.goToCamera()}
                    onPressRight={() => this.goToDirect()}
                />
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        ...Platform.select({
            ios: {
                height: 90,
                paddingTop: 40,
            },
            android: {
                height: 82,
                paddingTop: 20,
            }
        }),
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#ddd"
    },
    title: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 30
    }
})