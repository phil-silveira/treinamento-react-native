import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#bbb'
    },
    button: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    text: {
        textTransform: 'capitalize',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontFamily: 'Regular Lato',
        fontSize: 17,
        color: '#262626',
    }
})