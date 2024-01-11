import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native"
import styles from "./style"
import { useAuth } from "../../contexts/auth"
import * as auth from "../../services/auth"

const FormLogin: React.FC = () => {
  const { signIn } = useAuth()
  const [email_input, setEmailInput] = useState("")
  const [password_input, setPasswordInput] = useState("")
  const [errorMessage,setErrorMessage]= useState(null)
  async function handleSignIn() {
    try {
      const response = await auth.signIn()
      if (
        response.user.email !== email_input &&
        response.user.password !== password_input
      ) {
       alert("Email ou senha incorretos")
       
      } if(email_input==='' && password_input === ''){
        setErrorMessage("Preencha os campos!")
      }
      else {
         signIn()
      }
    } catch (error) {
      alert("Ocorreu um erro durante o login.")
    }
  }

  return (
    <View style={styles.formContext}>
      <Text style={styles.formLabel}>Email</Text>

      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <TextInput
        style={styles.input}
        placeholder="example@email.com"
        value={email_input}
        onChangeText={(text) => setEmailInput(text)}
      />

      <Text style={styles.formLabel}>Senha</Text>

      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <TextInput
        style={styles.input}
        placeholder="Sua senha aqui"
        secureTextEntry
        value={password_input}
        onChangeText={(text) => setPasswordInput(text)}
      />

      <TouchableOpacity style={styles.buttonLogin} onPress={handleSignIn}>
        <Text>Entrar</Text>
      </TouchableOpacity>
      <Button
      title="Entrar com o Google"
      onPress={handleSignIn} 
      />
    </View>
  )
}

export default FormLogin
