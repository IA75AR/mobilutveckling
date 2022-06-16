import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export const Header = () => {
    return (
        <>
            <Text style={styles.lines}>______________________________________________________</Text>
            <View style={styles.container}>
                <Text style={styles.text}>Tennisplayers - Sign in</Text>
                <Ionicons style={styles.picture} name="ios-tennisball-sharp" size={24} color="black" />
            </View>
            <Text style={styles.lines}>______________________________________________________</Text>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    }, text: {
        fontSize: 20,
        padding: 10, 
        paddingTop: 20
    }, lines: {
        color: "#fff",
        padding: 10
    }, picture: {
        paddingTop: 20
    }
})

export default Header;