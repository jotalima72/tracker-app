import { View, Text, StyleSheet, Alert, GestureResponderEvent } from "react-native";
import Button from "@/components/button";
import Input from "@/components/input";
import { useState } from "react";
import { router } from "expo-router";

export default function CreateScreen() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const handleSignIn = () => {
    router.back();
  }
  function handleOverlayClick(e: GestureResponderEvent): void {
    const target = e.target;
    if (target === e.currentTarget) {
      router.back();
    }
  }

  return (
    <View style={styles.overlay} onTouchEnd={handleOverlayClick}>
      <View style={styles.container}>
        <Input
          placeholder="Titulo"
          value={title}
          onChangeText={setTitle}
          style={styles.text}
        />
        <Input
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
          style={styles.description}
        />
        <Button title={"enviar"} onPress={handleSignIn} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    padding: 32,
    gap: 16,
    backgroundColor: '#fff',
    height: "50%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  description: {
    height: 100,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlignVertical: 'top'
  }
});