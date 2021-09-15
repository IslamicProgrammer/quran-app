import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import AppScreen from "../screens/app-screen"
import WelcomeScreen from "../screens/welocome-screen"
import BottomNavigator from "./bottom-navigator"
import MainScreen from "../screens/main-screen"
import MainDetails from "../screens/main-details-screen"

const Stack = createStackNavigator()

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="DetailsScreen" component={MainDetails} />
    </Stack.Navigator>
  )
}

export default MainNavigation
