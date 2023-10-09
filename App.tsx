import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Apostilas from "./src/pages/Apostilas"
import Information from "./src/pages/Information"
import { Ionicons } from "@expo/vector-icons"

const Stack = createStackNavigator()
const Tab= createBottomTabNavigator()

function Tabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Apostilas"
        component={Apostilas}
        options={{
          tabBarLabelStyle: { color: "#00FA9A" },
          tabBarIcon: ({ size }) => (
            <Ionicons name="book" color={"#00FA9A"} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AppApostilas"
          component={Tabs}
          options={{
            headerTitleStyle: { color: "#00FA9A" },
          }}
        />
        <Stack.Screen
          name="Information"
          options={{
            headerTitleStyle: { color: "#00FA9A" },
          }}
          component={Information}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}