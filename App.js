import { StatusBar } from "expo-status-bar"
import React from "react"
import "react-native-gesture-handler"
import { StyleSheet, View } from "react-native"
import { Screen } from "./app/components/common"
import { Text } from "./app/components/common"
import WelcomeScreen from "./app/screens/welocome-screen"
import { NavigationContainer } from "@react-navigation/native"
import AppNavigator from "./app/navigation/app-navigator"
import navigationTheme from "./app/navigation/elements/navigation-theme"
import { Provider } from "react-redux"
import store from "./app/store/store"

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  )
}
