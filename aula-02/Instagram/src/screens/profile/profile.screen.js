import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'

export class ProfileScreen extends React.Component {
    state = {
        photo: 'http://images5.fanpop.com/image/photos/30600000/Ed-hyenas-from-lion-king-30679343-470-337.jpg',
        publicInfo: {
            name: 'Charles Beck',
            username: 'Charlesbeck',
            website: 'wondermedia.ru',
            bio: 'CEO Wondermedia.ru - digital'
        },
        privateInfo: {
            email: 'yes@wondermedia.ru',
            phone: '+12312312312',
            gender: 'Male'
        }
    }

    renderHeader = () => (
        <View
            style={styles.header}>
            <TouchableOpacity>
                <Text style={styles.text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.title}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.text}>Done</Text>
            </TouchableOpacity>
        </View>
    )

    renderProfilePhoto = (photo) => (
        <View style={styles.photoContainer}>
            <Image style={styles.profilePhoto}
                source={{ uri: photo }} />
            <TouchableOpacity>
                <Text style={styles.link}>Change Profile Photo</Text>
            </TouchableOpacity>
        </View>
    )

    renderForm = (data) => (
        <View>
            {Object.keys(data).map((field, key) => (
                <View style={styles.row} key={key}>
                    <Text style={styles.title}>
                        {field}
                    </Text>
                    <TextInput style={styles.text}
                        value={data[field]} />
                </View>
            ))}
        </View>
    )

    render() {
        const { photo, publicInfo, privateInfo } = this.state

        return (
            <View>
                {this.renderHeader()}
                {this.renderProfilePhoto(photo)}
                {this.renderForm(publicInfo)}

                {this.renderForm(privateInfo)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#d8d8d8',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        textAlignVertical: 'center',
        textAlign: 'center',
        fontFamily: 'Regular Lato',
        fontSize: 27,
        color: '#262626',
        padding: 10,
    },
    title: {
        textAlignVertical: 'center',
        textAlign: 'center',
        fontFamily: 'Regular Lato',
        fontSize: 27,
        color: '#262626',
        padding: 10,
        fontWeight: 'bold',
    },
    photoContainer: {
        justifyContent: 'center'
    },
    profilePhoto: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        borderRadius: 50,
        margin: 10,
    },
    link: {
        color: '#3897F0',
        fontFamily: 'Regular Lato',
        fontSize: 12,

    }
})