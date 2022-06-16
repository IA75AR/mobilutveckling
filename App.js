import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigation from "./navigations/StackNavigation";
import ListPlayers from "./screens/ListPlayers";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { initDB } from "./database/localDatabase";



export default function App() {

  const [dbinit, setDbInit] = useState(false)

  const BottomTab = createBottomTabNavigator()

  useEffect(() => {
    initDB()
      .then(res => {
        console.log(res)
        setDbInit(true)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <NavigationContainer>
        <BottomTab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
          <BottomTab.Screen 
            options={{tabBarIcon: () => <Entypo name="home" size={24} color="black" />}} 
            name="StackNavigation" 
            component={StackNavigation}
            initialParams={{dbinit: dbinit}}/>
          <BottomTab.Screen 
            options={{tabBarIcon: () => <Ionicons name="tennisball-sharp" size={24} color="black" />}}
            name="ListPlayers" 
            component={ListPlayers}/>
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
};

