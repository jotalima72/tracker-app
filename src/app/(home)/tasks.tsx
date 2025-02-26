import Card from "@/components/card";
import { StyleSheet, Text, View } from "react-native";

export default function Tasks() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tasks 3</Text>
      <Card/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#AFBED1',
    gap: 16
  },
  text: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  }
});