import React from "react";
import { ScrollView, StatusBar } from "react-native";

import { Post } from '../../components'
import { StoryList } from './sections/story-list/story-list.component'

import { BaseScreen } from '../../screens/base'

import api from "../../../api/api-fake.json";

export class FeedScreen extends BaseScreen {
    render() {
        return (
            <React.Fragment>
                <ScrollView >
                    <StoryList />
                    {api.feed.map((post, key) => (
                        <React.Fragment key={key}>
                            <Post post={post} />
                        </React.Fragment>
                    ))}
                </ScrollView>
            </React.Fragment>
        );
    }

    screenWillFocus() {
        StatusBar.setTranslucent(true)
    }
}
