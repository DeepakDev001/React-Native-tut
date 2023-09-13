import { StyleSheet } from "react-native"

export const ExStyle = StyleSheet.create({
    ViewContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    tinyLogo: {
        width: 60,
        height: 60,
        borderRadius: 50
    },
    textArea: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 30
    },
    subTextArea: {
        textAlign: "center",
        color: "#6A737A",
        marginTop: 5
    },
    TncBtn: {
        borderRadius: 10,
        textTransform: "lowercase",
        backgroundColor: "#008400"

    },
    appButtonContainer: {
        width: 250,
        backgroundColor: "#008400",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 30
    },
    appButtonText: {
        fontSize: 13,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
    }
})


