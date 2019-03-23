import { createStackNavigator } from 'react-navigation'

import { RootTabBar } from '../tabbar'
import { DirectStack } from './direct'
import { EditProfileStack } from './edit-profile'
import { CameraStack } from './camera'

export const RootStack = createStackNavigator({
    RootTabBar: {
        screen: RootTabBar,
        navigationOptions: {
            header: null
        }
    },
    DirectStack: {
        screen: DirectStack,
        navigationOptions: {
            header: null
        }
    },
    EditProfileStack: {
        screen: EditProfileStack,
        navigationOptions: {
            header: null
        }
    },
    CameraStack: {
        screen: CameraStack,
        navigationOptions: {
            header: null
        }
    },
}, {
        mode: 'modal'
    }
)