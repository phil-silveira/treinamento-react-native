import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import { FeedStack } from '../../navigator/stacks/feed'

import { TabBar } from '../../../components'

export const RootTabBar = createBottomTabNavigator({
    FeedStack: {
        screen: FeedStack,
        navigationOptions: {
            header: null
        }
    }
}, {
        tabBarComponent: TabBar
    }
)