import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
    },
    searchInput: {
        flex: 1,
        fontSize: 18,
        textAlignVertical: 'center',
        backgroundColor: '#eee',
        color: '#666',
        marginHorizontal: 15,
        marginVertical: 5,
        paddingLeft: 45,
        borderRadius: 10,
    },
    icon: {
        color: '#666',
        marginHorizontal: 10,
        fontSize: 16,
        position: 'absolute',
        left: 20,
    }
})