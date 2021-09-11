import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import AppScreen from "../screens/app-screen"
import WelcomeScreen from "../screens/welocome-screen"
import BottomNavigator from "./bottom-navigator"

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="AppScreen" component={BottomNavigator} />
    </Stack.Navigator>
  )
}

export default AppNavigator
