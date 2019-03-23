import { CAMERA_ROUTES } from './camera.route'
import { CameraScreen } from '../../../screens'

export const CameraRoutes = {
    [CAMERA_ROUTES.CAMERA]: {
        screen: CameraScreen,
        navigationOptions: {
            header: null
        },
    }
}