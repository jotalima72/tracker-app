import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  title: string,

}

export default function ThemedButton({ title, onPress, ...rest }: ButtonProps) {
  return <TouchableOpacity style={styles.container} onPress={onPress} {...rest} >
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#294C60',
    width: "100%",
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});