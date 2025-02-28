import { StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  title: string,
  titleStyle?: TextStyle
}

export default function ThemedButton({ title, onPress, style, titleStyle, ...rest }: ButtonProps) {
  return <TouchableOpacity style={[styles.container, style]} onPress={onPress} {...rest} >
    <Text style={[styles.title, titleStyle]}>{title}</Text>
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