import React from 'react'
import { View, Text, TextInput } from 'react-native'

import styles from './edit-form.style'

export class EditForm extends React.Component {
    render() {
        const { data, title } = this.props

        return (
            <View>
                {title ? <Text style={styles.title} >{title}</Text> : null}

                {Object.keys(data).map((field, key) => (
                    <View style={styles.row} key={key}>
                        <Text style={styles.field}>
                            {field}
                        </Text>
                        <TextInput style={styles.input}
                            value={data[field]} />
                    </View>
                ))}
            </View>
        )
    }
}