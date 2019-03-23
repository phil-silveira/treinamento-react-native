import React from 'react'

import { createBottomTabNavigator } from 'react-navigation'

import { FeedStack } from '../../navigator/stacks/feed'

import { TabBar } from '../../../components'

import { FEED_ROUTES } from '../routes/feed/feed.route'
import { DIRECT_ROUTES } from '../routes/direct/direct.route'
import { EDIT_PROFILE_ROUTES } from '../routes/edit-profile/edit-profile.route'

export const RootTabBar = createBottomTabNavigator({
    FeedStack: {
        screen: FeedStack,
    },
}, {
        tabBarComponent: ({ navigation }) => (
            <TabBar navigation={navigation}
                onPressHome={() => navigation.navigate(FEED_ROUTES.FEED)}
                onPressSearch={() => navigation.navigate(DIRECT_ROUTES.DIRECT)}

                onPressUser={() => navigation.navigate(EDIT_PROFILE_ROUTES.EDIT_PROFILE)}
            />)
    }
)