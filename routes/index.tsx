import React from "react";
import {useAuth} from "../contexts/auth";
import {View,ActivityIndicator} from 'react-native'
import AppRoutes from './app.routes'
import AuthRoutes from "./auth.routes";

const Routes: React.FC= () =>{
  const {signed, loading}= useAuth()

  if(loading){
    <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
    <ActivityIndicator size="large" color="#999"/>
    </View>
  }

  return signed ? <AppRoutes/>: <AuthRoutes/>
  return (<AuthRoutes/>);
};
export default Routes;