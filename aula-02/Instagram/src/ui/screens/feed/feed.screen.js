import React from "react";
import { ScrollView, StatusBar } from "react-native";

import { Post } from '../../components'

import { BaseScreen } from '../../screens/base'

import api from "../../../api/api-fake.json";

export class FeedScreen extends BaseScreen {
    render() {
        return (
            <ScrollView >
                {api.feed.map((post, key) => (
                    <React.Fragment key={key}>
                        <Post post={post} />
                    </React.Fragment>
                ))}
            </ScrollView>
        );
    }

    screenWillFocus() {
        StatusBar.setTranslucent(true)
    }
}
