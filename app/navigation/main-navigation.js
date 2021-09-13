import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import AppScreen from "../screens/app-screen"
import WelcomeScreen from "../screens/welocome-screen"
import BottomNavigator from "./bottom-navigator"
import MainScreen from "../screens/main-screen"
import MainDetails from "../screens/main-details"

const Stack = createStackNavigator()

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Details" component={MainDetails} />
    </Stack.Navigator>
  )
}

export default MainNavigation
