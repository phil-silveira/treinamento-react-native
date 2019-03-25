import React from 'react'

import { EDIT_PROFILE_ROUTES } from './edit-profile.route'

import { EditProfileScreen } from '../../../screens'

export const EditProfileRoutes = {
    [EDIT_PROFILE_ROUTES.EDIT_PROFILE]: {
        screen: EditProfileScreen,
        navigationOptions: {
            header: null
        },
    }
}