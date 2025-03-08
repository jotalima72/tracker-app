import { View, Text, StyleSheet, Alert, GestureResponderEvent } from "react-native";
import Button from "@/components/button";
import Input from "@/components/input";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createTask } from "@/services/tasks";
import { STATIC_TOKEN } from "@/services/constants";

const schema = z.object({
  title: z.string().min(1, "O título é obrigatório"),
  description: z.string().min(1, "A descrição é obrigatória"),
});

type FormData = z.infer<typeof schema>;

export default function CreateScreen() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function handleOverlayClick(e: GestureResponderEvent) {
    if (e.target === e.currentTarget) {
      router.back();
    }
  }

  const onSubmit = (data: FormData) => {
    createTask(data, STATIC_TOKEN);
    Alert.alert("Tarefa Criada", "A tarefa foi criada com sucesso!");
    router.back();
  };

  return (
    <View style={styles.overlay} onTouchEnd={handleOverlayClick}>
      <View style={styles.container}>
        <Input
          placeholder="Título"
          onChangeText={(text) => setValue("title", text)}
          errors={errors.title}
        />
        <Input
          placeholder="Descrição"
          onChangeText={(text) => setValue("description", text)}
          multiline
          style={styles.description}
          errors={errors.description}
        />
        <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
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
    backgroundColor: "#fff",
    height: "50%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  description: {
    height: 100,
    textAlignVertical: "top",
  }
});
