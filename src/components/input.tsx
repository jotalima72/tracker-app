import { StyleSheet, TextInput, TextInputProps } from "react-native";

export default function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput style={styles.input} {...rest} />
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderColor: '#294C60',
    width: "100%",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 16,
  }
});