import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

export default function Input({ style, placeholder, ...rest }: TextInputProps) {
  return (
    <View style={styles.container}>
      <Text>{placeholder}</Text>
      <TextInput style={[styles.input, style]} placeholder={placeholder} {...rest} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
  },
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