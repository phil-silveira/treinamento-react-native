import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";

const { width } = Dimensions.get('window')

import { IgIcon, IgRoundImage } from '../../components'

export class Post extends PureComponent {
    renderPostHeader = (post) => {
        return (
            <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
                <IgRoundImage
                    size={40}
                    source={{ uri: post.perfil }} />
                <View style={{ flex: 1, justifyContent: "center", paddingLeft: 8 }}>
                    <Text style={{ fontWeight: '700', color: '#262626' }}>
                        {post.autor}
                    </Text>
                    {(post.local) ? <Text>{post.local}</Text> : null}
                </View>
                <TouchableOpacity>
                    <IgIcon
                        style={{ fontSize: 15, color: '#262626', margin: 10, transform: [{ rotateZ: '90deg' }] }}
                        name='dots-three-horizontal' />
                </TouchableOpacity>
            </View>
        )
    }

    renderPostFooter = (post) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity>
                    <IgIcon
                        style={post.liked ? { fontSize: 25, margin: 10, color: "#e74c3c" } : { fontSize: 25, margin: 10 }}
                        name={post.liked ? 'heart-full' : 'heart-empty'} />
                </TouchableOpacity>
                <Text>{post.curtidas} Likes</Text>
            </View>
        )
    }

    render() {
        const { post, key } = this.props

        return (
            <View key={key} style={{}}>
                {this.renderPostHeader(post)}
                <Image
                    style={{ width, height: width }}
                    source={{ uri: post.imagem }} />
                {this.renderPostFooter(post)}
            </View >
        )
    }
}
