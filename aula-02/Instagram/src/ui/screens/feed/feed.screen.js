import React from "react";
import { ScrollView, StatusBar, RefreshControl } from "react-native";

import { Post } from '../../components'
import { StoryList } from './sections/story-list/story-list.component'

import { BaseScreen } from '../../screens/base'

import { PostService } from '../../services/post/post.service'

export class FeedScreen extends BaseScreen {
    constructor() {
        super()
        this.postService = new PostService()

        this.state = {
            feed: [],
            refreshing: false
        }
    }

    _onRefresh = async () => {
        this.setState({ refreshing: true })
        this._fetchMorePosts()
    }

    _fetchMorePosts() {
        this.postService.getRandomPosts(3)
            .then(res => {
                const posts = res.message.map(image => ({
                    autor: image.split('/')[4],
                    perfil: image,
                    imagem: image,
                    curtidas: (x => x.substring(x.length - 2, x.length - 1))(image.split('/')[5].split('.')[0]),
                    liked: (x => x[x.length - 1] % 2)(image.split('/')[5].split('.')[0])
                }))


                this.setState({
                    feed: [...posts, ...this.state.feed],
                    refreshing: false
                })
            })
    }

    render() {
        const { feed } = this.state

        if (feed.length === 0)
            this._fetchMorePosts()


        return (
            <React.Fragment>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                >
                    <StoryList />
                    {feed.length > 0 ? feed.map((post, key) => (
                        <React.Fragment key={key}>
                            <Post post={post} />
                        </React.Fragment>
                    )) : null
                    }
                </ScrollView>
            </React.Fragment>
        );
    }

    screenWillFocus() {
        StatusBar.setTranslucent(true)
    }
}
