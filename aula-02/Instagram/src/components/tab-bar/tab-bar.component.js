import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import { IgIcon, AvatarPhoto } from '../../components'

import styles from './tab-bar.style'

export class TabBar extends React.Component {
    render() {
        const {
            onPressHome,
            onPressSearch,
            onPressAdd,
            onPressLike,
            onPressUser,
            user
        } = this.props

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onPressHome}>
                    <IgIcon
                        style={styles.icon}
                        name='home' />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressSearch}>
                    <IgIcon
                        style={styles.icon}
                        name='search' />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressAdd}>
                    <IgIcon
                        style={styles.icon}
                        name='add-square' />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressLike}>
                    <IgIcon
                        style={styles.icon}
                        name='heart-empty' />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressUser}>
                    {user ?
                        <AvatarPhoto
                            source={user}
                            size={30}
                        />
                        :
                        < IgIcon
                            style={styles.icon}
                            name='user' />
                    }
                </TouchableOpacity>
            </View>
        )
    }
}