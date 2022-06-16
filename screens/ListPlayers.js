import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ImageBackground } from 'react-native';
import { Dimensions, FlatList } from 'react-native';
import { View } from 'react-native';
import HeaderListPlayers from '../components/HeaderListPlayers';
import { findAll, deleteById } from '../database/localDatabase';
import { DeviceEventEmitter } from 'react-native';



export function ListPlayers( {dbinit} ) {

  const[list, setList] = useState([]);

  useEffect(() => {
    if(true) {
      findAll()
        .then(res => {setList(res.rows) 
          console.log(res);})
    }
  }, [dbinit])

  const deletePlayer = (id) => {
    deleteById(id)
      .then(() => DeviceEventEmitter.emit())
  }


  const _renderItem = ({item}) => {
    console.log(item);
    return(
      <View>
        <Text style={styles.text} onPress={deletePlayer}>{item.username}</Text>
      </View>
    )
  } 
    
  return (
    <>
      <ImageBackground
        source={require("../assets/Tennis/Tenniscourts.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
      <View style={styles.container}>
        <HeaderListPlayers />
        <View style={styles.input}>
          <FlatList
            data={list}
            renderItem={_renderItem}
           // keyExtractor={(item, index) => index}
          />
        </View>
        <StatusBar style="dark" />
      </View>
      </ImageBackground>
    </>
  ); 
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  }, input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 280,
    margin: 10,
    padding: 10,
    borderRadius: 5
  }, text: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 280,
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 5
  }, backgroundImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  }
});

export default ListPlayers;