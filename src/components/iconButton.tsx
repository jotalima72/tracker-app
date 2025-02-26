import { StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/Feather";

type ButtonProps = TouchableOpacityProps & {
  iconName: string,
  iconSize: number,
  iconColor: string,
  containerStyle?: ViewStyle
}

export default function IconButton({ iconColor, iconName, iconSize, onPress, containerStyle, ...rest }: ButtonProps) {
  return <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress} {...rest} >
    <Icon size={iconSize} name={iconName} color={iconColor}/>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#294C60',
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