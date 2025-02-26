import { StyleSheet, Text, View } from "react-native";

type CardProps = {
  title: string,
  description: string,
  status: boolean
}
export default function Card({title, description, status}: CardProps) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{status ? "Concluído" : "Pendente"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});