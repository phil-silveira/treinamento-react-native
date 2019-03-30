import { Platform, StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        ...Platform.select({
            ios: {
                height: 80,
                paddingTop: 40,
            },
            android: {
                height: 80,
                paddingTop: 40,
            }
        }),
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderColor: "#ddd"
    },
})