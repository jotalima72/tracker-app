import { View, Text, StyleSheet, Alert } from "react-native";
import Button from "@/components/button";
import Input from "@/components/input";
import { useState } from "react";
import { router } from "expo-router";

export default function Index() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSignIn = () => {
    router.push("/tasks");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title={"entrar"} onPress={handleSignIn} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#AFBED1',
    justifyContent: 'center',
    gap: 16
  },
  text: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  }
});