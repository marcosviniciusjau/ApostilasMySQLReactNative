import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createStackNavigator } from "@react-navigation/bottom-tabs"
import Contacts from "./src/pages/Contacts/"
import Information from "./src/pages/Information/"

const Stack = createStackNavigator()
const Tab= createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Information" component={Information} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
