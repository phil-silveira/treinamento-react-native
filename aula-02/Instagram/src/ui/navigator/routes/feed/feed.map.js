import { FEED_ROUTES } from './feed.route'

import { FeedScreen } from '../../../screens'

export const FeedRoutes = {
    [FEED_ROUTES.FEED]: {
        screen: FeedScreen,
        navigationOptions: {
            header: null
        }
    }
}