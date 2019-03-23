import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";

const { width } = Dimensions.get('window')

import { IgIcon } from '../../components'

export class Post extends PureComponent {
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

    render() {
        const { post, key } = this.props

        return (
            <View key={key} style={{ backgroundColor: "#F5FCFF", }}>
                {this.renderPostHeader(post)}
                <Image
                    style={{ width, height: width }}
                    source={{ uri: post.imagem }} />
                {this.renderPostFooter(post)}
            </View >
        )
    }
}
