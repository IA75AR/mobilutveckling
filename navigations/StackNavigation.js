import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ListPlayers from "../screens/ListPlayers";


export default function StackNavigation({dbinit}) {

  const stackNavigation = createNativeStackNavigator();

  return (
    <>
        <stackNavigation.Navigator>
            <stackNavigation.Screen
                options={{headerShown: false}}
                name="Home"
                component={Home}
            />
            <stackNavigation.Screen
                options={{headerShown: false}}
                name="ListPlayers"
                component={ListPlayers}
                initialParams={{dbinit: dbinit}}
            />
        </stackNavigation.Navigator>
    </>
  );
};