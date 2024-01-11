import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Dashboard from "../src/pages/Dashboard/dashboard"

const AppStack = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
  </AppStack.Navigator>
)

export default AuthRoutes
