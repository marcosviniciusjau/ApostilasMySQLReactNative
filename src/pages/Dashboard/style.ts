import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  formContext: {
    width: "100%",
    paddingTop: 30,
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
    paddingTop: 15,
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

})

export default styles
