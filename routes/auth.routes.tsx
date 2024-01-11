import FormLogin from '../screens/FormLogin/login'
import React from 'react'
import{createStackNavigator} from '@react-navigation/stack';
import styles from '../screens/FormLogin/style';
const AuthStack= createStackNavigator()

const AuthRoutes: React.FC= ()=>(
  <AuthStack.Navigator>
    <AuthStack.Screen name="FormLogin" component={FormLogin}/>
  </AuthStack.Navigator>
)

export default AuthRoutes;