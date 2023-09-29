import React from "react"
import { View, Text } from "react-native"

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
  return(
  
    <View style={{ marginTop: 60 }}>
      {validation()}
      <Text>Nome: {route.params?.nome}</Text>
      <Text>Telefone : {route.params?.telefone}</Text>
      <Text>Endereço: {route.params?.endereco}</Text>
      <Text>N: {route.params?.numero}</Text>
      <Text>Profissao: {route.params?.profissao}</Text>
      <Text>Email: { route.params?.email}</Text>
    </View>
   

  )
}