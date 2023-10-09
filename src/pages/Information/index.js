import React from "react"
import { View, Text } from "react-native"
import styles from "./styles"
export default function Information({ route }) {
  const validation=()=>{
   
    if (!route.params){
       return(
        <View>
          <Text>Não há dados cadastrados!</Text>
        </View>
       )
    }
    return null

  }
  return (
    <View style={styles.information}>
      {validation()}
      <Text style={styles.Text}>Nome: {route.params.nome}</Text>
      <Text style={styles.Text}>R$: {route.params.valor}</Text>
      <Text style={styles.Text}>Descrição: {route.params.descricao}</Text>
    </View>
  )
}