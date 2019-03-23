import React from "react";
import { Image, Platform, Dimensions, Text, StyleSheet, ScrollView, View, TouchableOpacity } from "react-native";

import { IgIcon, InstagramHeader } from '../../../components'

import { BaseScreen } from '../../screens/base'

import api from "../../../api/api-fake.json";

const width = Dimensions.get('window').width

export class FeedScreen extends BaseScreen {
    renderPostHeader = (post) => {
        return (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                    style={{ width: 50, height: 50, borderRadius: 50, margin: 10 }}
                    source={{ uri: post.perfil }} />
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <Text>{post.autor}</Text>
                    {(post.local) ? <Text>{post.local}</Text> : null}
                </View>
                <TouchableOpacity>
                    <IgIcon
                        style={{ fontSize: 20, margin: 10 }}
                        name='dots-three-horizontal' />
                </TouchableOpacity>
            </View>
        )
    }

    renderPostFooter = (post) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <IgIcon
                    style={{ fontSize: 20, margin: 10 }}
                    name={post.liked ? 'heart-full' : 'heart-empty'} />
                <Text>{post.curtidas} Likes</Text>
            </View>
        )
    }

    renderPost = (post, key) => {
        return (
            <View key={key}>
                {this.renderPostHeader(post)}
                <Image
                    style={{ width, height: width }}
                    source={{ uri: post.imagem }} />
                {this.renderPostFooter(post)}
            </View >
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <InstagramHeader />
                <ScrollView style={styles.postList}>
                    {api.feed.map((post, key) => this.renderPost(post, key))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
    },
    postList: {
        backgroundColor: "#F5FCFF",
    },
    navbarTitle: {
        fontFamily: 'Lato-Regular',
        fontSize: 48,
        marginLeft: 15
    }

});
