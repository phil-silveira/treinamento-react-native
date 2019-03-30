import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    storiesContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
    },
    story: {
        width: 70,
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 5,
        marginHorizontal: 6,
    },
    storyText: {
        width: 60,
        height: 20,
        textAlign: 'center',
        overflow: 'hidden'
    }
})