import React from "react";
import { View, Text} from 'react-native'

export default function Contacts({navigation}){
  return (
    <View style={{ marginTop: 60 }}>
      <View>
        <Text>Nome: João Silva</Text>
        <Text>Telefone: (14) 99959-9799</Text>
        <Text
          onPress={() =>
            navigation.navigate("Information", {
              nome: "João Silva",
              telefone: "(14) 99959-9799",
              endereco: "Rua das Flores",
              numero: "765",
              profissao: "Carpinteiro",
              email: "joao@gmail.com",
            })
          }
        >
          Information...
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text>Nome: Amanda Silva</Text>
        <Text>Telefone: (14) 99493-9919</Text>
        <Text
          onPress={() =>
            navigation.navigate("Information", {
              nome: "Amanda Silva",
              telefone: "(14) 99493-9919",
              endereco: "Rua das Neves",
              numero: "735",
              profissao: "Desenvolvedora de Softwares",
              email: "amanda@gmail.com",
            })
          }
        >
          Information...
        </Text>
      </View>
     
      <View style={{ marginTop: 20 }}>
        <Text>Nome: Ally Silva</Text>
        <Text>Telefone: (14) 99493-9919</Text>
        <Text onPress={() => navigation.navigate("Information")}>
          {" "}
          Information...
        </Text>
        </View>
    </View>
  )
}