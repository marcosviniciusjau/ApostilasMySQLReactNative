import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  formContext: {
    width: "100%",
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#00FA9A",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  form: {
    paddingTop: 30,
    width: "100%",
    backgroundColor: "#00FF7F",
  },
  formLabel: {
    paddingTop: 7,
    color: "#000000",
    fontSize: 18,
  },
  input: {
    width: "80%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  buttonLogin: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    backgroundColor: "#00BFFF",
    color: "#ffffff",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#ffff",
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exhibitionResultImc: {
    width: "100%",
    height: "50%",
  },
  listImcs: {
    marginTop: 20,
  },
  rodape: {
    fontStyle: "italic",
    paddingTop: 15,
    fontSize: 15,
    color: "#000000",
    textAlign: "center",
  },
})

export default styles
