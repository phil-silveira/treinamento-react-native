import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlignVertical: 'center',
        textTransform: 'capitalize',
        textAlign: 'left',
        fontFamily: 'Regular Lato',
        fontSize: 17,
        color: '#262626',

        fontWeight: '500',
        marginHorizontal: 25,
        marginVertical: 10,

    },
    field: {
        textAlignVertical: 'center',
        textTransform: 'capitalize',
        textAlign: 'left',
        fontFamily: 'Regular Lato',
        fontSize: 17,
        color: '#262626',

        fontWeight: '500',
        width: 110,
    },
    input: {
        textAlignVertical: 'center',
        textAlign: 'left',
        fontFamily: 'Regular Lato',
        fontSize: 17,
        color: '#262626',

        width: 250,
        borderBottomWidth: 1,
        borderColor: '#bbb',
    }
})