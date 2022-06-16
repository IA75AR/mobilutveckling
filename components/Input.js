import { useState } from "react";
import { useNavigation } from "@react-navigation/native"
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import { findAll, insert } from "../database/localDatabase";
import Player from "../models/Player";


export const Input = () => {

    const [textInput, setTextInput] = useState("");
    const [count, setCount] = useState(1);
    const [playersList, setPlayersList] = useState([]);

    const navigation = useNavigation();

    const handleText = (text) => {
        setTextInput(text)
    }

    const handleAdd = () => {
        const player = new Player(count, textInput)
        setCount(prev => prev + 1)
        insert(player)
            .then(res => {
                return findAll()
            })
            .then(res => setPlayersList(res))
    }

    const handleChangeScreen = () => {
        navigation.navigate("ListPlayers", {playersList: playersList})
    }

    return(
        <View>
            <View style={styles.container}>
                <TextInput 
                    placeholder="Player Name"
                    style={styles.input}
                    onChangeText={handleText}
                    value={textInput}
                />
                <Pressable
                    onPress={handleAdd}
                >
                    <Text style={styles.addButton} >Add</Text>
                </Pressable>
            </View>
            <Pressable
                onPress={handleChangeScreen}
            >
                <Text style={styles.allButton} >All Players</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    }, input: {
        width: 200,
        backgroundColor: "white",
        margin: 10,
        marginRight: 10,
        padding: 10,
        paddingRight: 10,
        borderRadius: 5
    }, addButton: {
        width: 60,
        color: "white",
        backgroundColor: "black",
        margin: 10,
        marginRight: 5,
        padding: 15,
        borderRadius: 5
    }, allButton: {
        width: 280,
        color: "white",
        backgroundColor: "darkgray",
        margin: 10,
        marginRight: 5,
        padding: 15,
        borderRadius: 5
    }
})

export default Input;