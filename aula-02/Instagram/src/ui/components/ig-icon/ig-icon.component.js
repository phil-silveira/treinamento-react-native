import React from 'react'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'

import icoMoonConfig from '../../../assets/font/selection.json'

const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'MyIcons', 'MyIcons.ttf')

export class IgIcon extends React.Component {
    render() {
        const { name, style } = this.props

        return < Icon name={name} style={style} />
    }
}