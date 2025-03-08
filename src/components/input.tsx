import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

type Props = TextInputProps & {
  errors?: any;
}
export default function Input({ style, placeholder, errors, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text>{placeholder}</Text>
      <TextInput style={[styles.input, style]} placeholder={placeholder} {...rest} />
      {errors && (
        <Text style={styles.errorText}>{errors.message}</Text>
      )}
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
  },
  errorText: {
    color: "red",
    fontSize: 14,
  },
});