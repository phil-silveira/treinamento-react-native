import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    background: {
        flex: 1
    },
    container: {
        flex: 1,
        marginVertical: 40,
        marginHorizontal: 30,
    },
    instagram: {
        fontSize: 40,
        color: '#fff',
        marginTop: 40,
        marginBottom: 10,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bar: {
        flex: 1,
        height: 2,
        backgroundColor: '#fff'
    },
    form: {
        flex: 4,
        justifyContent: 'space-around',
        margin: 10,
    },
    h2: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
    },
    h3: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '100',
        textAlign: 'center',
    },
    h4: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '100',
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#fafafa',
        color: '#D8D8D8',
        borderRadius: 3,
        fontSize: 15,
        height: 40,
    },
    button: {
        backgroundColor: '#3897F0',
        justifyContent: 'center',
        borderRadius: 3,
        height: 40,
    }
})