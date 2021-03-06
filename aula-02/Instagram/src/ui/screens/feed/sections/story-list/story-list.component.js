import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

import { IgRoundImage } from '../../../../components'

import { DogService } from '../../../../services'

import styles from './story-list.style'

export class StoryList extends React.Component {
    constructor() {
        super()

        this.state = {}

        this.dogService = new DogService()
    }

    async componentDidMount() {
        this.dogService.getRandomImages(10)
            .then(res => {
                const stories = res.message
                    .map(uri => ({
                        uri,
                        label: uri.split('/')[4]
                    }))

                this.setState({
                    stories
                })
            })
    }

    renderStory = (story) => (
        <View
            style={styles.story}
            key={story.uri}
        >
            <LinearGradient
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={['#A21391', '#CD106A', '#D82851', '#E95634', '#F8A64D']}

                style={{ borderRadius: 50, padding: 2 }}
            >
                <IgRoundImage
                    size={60}
                    source={{ uri: story.uri }} />
            </LinearGradient>
            <Text
                style={styles.storyText}
            >{story.label}</Text>
        </View>
    )

    render() {
        const { stories } = this.state
        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
                {stories ? stories.map((story) => this.renderStory(story)) : null}
            </ScrollView>
        )
    }
}