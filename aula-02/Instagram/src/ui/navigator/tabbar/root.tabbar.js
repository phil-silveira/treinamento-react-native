import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import { FeedStack } from '../../navigator/stacks/feed'

export const RootTabBar = createBottomTabNavigator({
    FeedStack: {
        screen: FeedStack,
        navigationOptions: {
            header: null
        }
    }
})