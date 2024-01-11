import React, { useState, useContext } from "react"
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native"
import { signIn } from "../../../services/auth"
import styles from "./style"
import {useAuth} from "../../../contexts/auth"

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth()
  function handleSignOut({ navigation }) {
    signOut()
  }

  return (
    <View style={styles.formContext}>
      <Text>Perfil:</Text>
      <Text style={styles.formLabel}> {user?.name}!</Text>
      <Text style={styles.formLabel}>{user?.email}!</Text>
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() =>
          navigation.navigate("Apostilas")
        }
      >
        <Text>Ver Produtos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLogin} onPress={handleSignOut}>
        <Text>Cadastrar Produtos</Text>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLogin} onPress={handleSignOut}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Dashboard
