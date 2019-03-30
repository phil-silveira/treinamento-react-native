import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    navbarContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 62,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    navbarTitle: {
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        marginLeft: 15,
    },
    icon: {
        width: 20,
        height: 20,
        color: '#999899'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingLeft: 10,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    searchPlaceholder: {
        color: '#999899',
        marginLeft: 10
    },
    contactContainer: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 5,
    },
    cameraButton: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
    },
    cameraButtonIcon: {
        fontSize: 25,
        color: '#3285EE'
    },
    cameraButtonText: {
        marginLeft: 8,
        fontWeight: '500',
        color: '#3285EE'
    },
})