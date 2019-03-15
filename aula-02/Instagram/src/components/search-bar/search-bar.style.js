import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 0,
        backgroundColor: '#eee',
        borderRadius: 10,
        margin: 5
    },
    text: {
        color: '#666',
        fontSize: 20
    },
    icon: {
        tintColor: '#666',
        resizeMode: 'contain',
        width: 22
    }
})