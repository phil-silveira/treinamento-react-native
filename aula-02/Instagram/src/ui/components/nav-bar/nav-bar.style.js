import { Platform, StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        ...Platform.select({
            ios: {
                height: 90,
                paddingTop: 40,
            },
            android: {
                height: 82,
                paddingTop: 20,
            }
        }),
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#ddd"
    },
})