import React, { Component } from "react";
import { Image, Platform, Dimensions, Text, StyleSheet, ScrollView, View, TouchableOpacity } from "react-native";

import api from "./api/feed.json";

const width = Dimensions.get('window').width

class App extends Component {
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
          <Image
            style={{ width: 20, height: 20, margin: 10 }}
            source={require('./img/dots.png')} />
        </TouchableOpacity>
      </View>
    )
  }

  renderPostFooter = (post) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{ width: 20, height: 20, margin: 10 }}
          source={post.liked ? require('./img/like-full.png') : require('./img/like.png')} />
        <Text>{post.curtidas} Likes</Text>
      </View>
    )
  }

  renderHeader = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', height: 62 }}>
        <Image
          style={{ width: 30, height: 30, margin: 10 }}
          source={require('./img/camera.png')} />

        <Image
          style={{ width: 120, height: 40 }}
          source={require('./img/instagram_logo.png')} />

        <Image
          style={{ width: 30, height: 30, margin: 10 }}
          source={require('./img/send.png')} />

      </View>
    )
  }

  renderTabBar = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: "space-around", alignItems: "center" }}>
        <Image
          style={{ width: 25, height: 25, margin: 8 }}
          source={require('./img/camera.png')} />
        <Image
          style={{ width: 25, height: 25, margin: 8 }}
          source={require('./img/send.png')} />
        <Image
          style={{ width: 25, height: 25, margin: 8 }}
          source={require('./img/camera.png')} />
        <Image
          style={{ width: 25, height: 25, margin: 8 }}
          source={require('./img/send.png')} />
        <Image
          style={{ width: 25, height: 25, margin: 8 }}
          source={require('./img/camera.png')} />

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
        {this.renderHeader()}
        <ScrollView style={styles.postList}>
          {api.feed.map((post, key) => this.renderPost(post, key))}
        </ScrollView>
        {this.renderTabBar()}
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  postList: {
    backgroundColor: "#F5FCFF",
  }
});
