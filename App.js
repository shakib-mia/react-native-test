import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home/Home";
import { Text, View } from "react-native";
import Chat from "./pages/Chat/Chat";
import Profile from "./pages/Profile/Profile";
import EditItem from "./pages/EditItem/EditItem";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Edit Profile" component={EditItem} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
