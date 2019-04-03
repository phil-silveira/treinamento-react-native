import React from 'react'

import { createBottomTabNavigator } from 'react-navigation'

import { FeedStack } from '../../navigator/stacks/feed'

import { TabBar } from '../../components'

import { FEED_ROUTES } from '../routes/feed/feed.route'

export const RootTabBar = createBottomTabNavigator({
    FeedStack: {
        screen: FeedStack,
    },
}, {
        tabBarComponent: ({ navigation }) => (
            <TabBar navigation={navigation}
                onPressHome={() => navigation.navigate(FEED_ROUTES.FEED)}
            />)
    }
)