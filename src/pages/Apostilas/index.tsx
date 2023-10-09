import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"
import api from "../../../lib/api"
import styles from "./styles"

export default function Apostilas({ navigation }) {
  const [apostilas, setApostilas] = useState([])

  useEffect(() => {
    console.log("Antes de fazer a requisição")
    try {
      api
        .get("/apostilas")
        .then((response) => {
          if (
            Array.isArray(response.data) &&
            response.data.every(
              (item) => typeof item === "object" && item.hasOwnProperty("nome")
            )
          ) {
            setApostilas(response.data)
          } else {
            console.error(
              'A resposta não é uma matriz de objetos com a propriedade "nome".'
            )
            throw new Error("Resposta inválida")
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error)
          throw error
        })
    } catch (error) {
      console.error("Erro no useEffect:", error)
    }
    console.log("Após a requisição")
  }, [])

  return (
    <View style={styles.information}>
      {apostilas.length === 0 ? (
        <Text>Nenhuma apostila encontrada.</Text>
      ) : (
        apostilas.map((apostila, index) => (
          <View key={index} style={{ marginTop: 20 }}>
            <Text
              onPress={() =>
                navigation.navigate("Information", {
                  nome: apostila.nome,
                  valor: apostila.valor,
                  descricao: apostila.descricao,
                })
              }
            >
              Nome: {apostila.nome}
            </Text>
          </View>
        ))
      )}
    </View>
  )
}