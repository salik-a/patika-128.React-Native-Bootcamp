import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#cfd8dc",
        width: "30%",
        borderColor: "#34515f",
        borderWidth: 1,
        marginVertical: 20,
        borderRadius: 5,
        padding: 5
    },
    title: {
        fontSize: 16,
        color: "#34515f"

    },
})
export default {
    secondary: StyleSheet.create({
        ...base_style,
    }),
    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: "#34515f",
        },
        title: {
            ...base_style.title,
            color: "white"
        },

    }),
}