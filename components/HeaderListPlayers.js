import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export const HeaderListPlayers = () => {
    return (
        <>
            <View style={styles.totalContainer}>
                <Text style={styles.lineTop}>______________________________________________________</Text>
                <View style={styles.container}>
                    <Text style={styles.text}>Tennisplayers</Text>
                    <Ionicons style={styles.picture} name="ios-tennisball-sharp" size={24} color="black" />
                </View>
                <Text style={styles.text}>Ostkustens Pärla 2022</Text>
                <Text style={styles.lineBottom}>______________________________________________________</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    totalContainer: {
        flexDirection: "column",
        alignItems: "center"
    }, container: {
        flexDirection: "row",
        alignItems: "center"
    }, text: {
        fontSize: 20, 
        paddingBottom: 5,
        paddingRight: 10
    }, lineTop: {
        color: "#fff",
        padding: 10,
    }, lineBottom: {
        color: "#fff",
        paddingBottom: 20
    }, picture: {
        paddingBottom: 5,
        marginBottom: 5,
        paddingTop: 10
    }
})

export default HeaderListPlayers;