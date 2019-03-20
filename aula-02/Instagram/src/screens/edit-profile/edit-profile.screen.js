import React from 'react'
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'

import { TextLink, AvatarPhoto, IgHeader } from '../../components'
import { EditForm } from './sections/edit-form/edit-form.component'

import styles from './edit-profile.style'

import api from '../../api/api-fake.json'

export class EditProfileScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            photo: 'http://',
            publicInfo: {
                name: '',
                username: '',
                website: '',
                bio: ''
            },
            privateInfo: {
                email: '',
                phone: '',
                gender: ''
            }
        }
    }

    componentDidMount() {
        const { profileFake } = api

        this.setState({ ...profileFake })
    }

    renderProfilePhoto = (photo) => (
        <View style={styles.photoContainer}>
            <AvatarPhoto
                style={styles.profilePhoto}
                size={100}
                source={{ uri: photo }} />
            <TextLink style={styles.link}>
                change profile photo
            </TextLink>
        </View>
    )

    render() {
        const { photo, publicInfo, privateInfo } = this.state

        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <IgHeader
                        left={'cancel'}
                        center={'edit profile'}
                        right={'done'}
                    />
                    {this.renderProfilePhoto(photo)}
                    <EditForm
                        data={publicInfo}
                    />
                    <TextLink style={styles.textLink}>
                        try instragram business tools
                    </TextLink>
                    <EditForm
                        data={privateInfo}
                        title={'private Information'}
                    />
                </View>
            </ScrollView>
        )
    }
}