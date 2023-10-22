import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen01 from "./screens/Screen01";
import Screen02 from "./screens/Screen02";
import Screen03 from "./screens/Screen03";
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Screen01"
                    component={Screen01}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Screen02"
                    component={Screen02}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Screen03"
                    component={Screen03}
                    options={{ headerShown: true }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
