import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, ActivityIndicator } from "react-native";
import Input from "@/components/input";
import { router, useLocalSearchParams } from "expo-router";
import { deleteTask, getTask, updateTask } from "@/services/tasks";
import ThemedButton from "@/components/button";
import { STATIC_TOKEN } from "@/services/constants";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  title: z.string().min(1, "O título é obrigatório"),
  description: z.string().min(1, "A descrição é obrigatória"),
});

type FormData = z.infer<typeof schema>;

export default function EditTaskScreen() {
  const { id } = useLocalSearchParams();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  // Estados para armazenar os dados da task
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (id: string) => {
      try {
        const task = await getTask(id as string, STATIC_TOKEN);
        if (task) {
          setTitle(task.title);
          setDescription(task.description);
          setValue("title", task.title);
          setValue("description", task.description);
        } else {
          Alert.alert("Erro", "Tarefa não encontrada.");
        }
      } catch (error) {
        console.error("Erro ao buscar a tarefa:", error);
        Alert.alert("Erro", "Não foi possível carregar a tarefa.");
      } finally {
        setLoading(false);
      }
    }
    fetchData(id as string)
  }, []);

  const handleSave = (data: FormData) => {
    updateTask({ id: id as string, ...data }, STATIC_TOKEN);
    Alert.alert("Task Atualizada", "Os dados foram salvos com sucesso.");
    router.back();
  };

  const handleDelete = async () => {
    await deleteTask(id as string, STATIC_TOKEN);
    Alert.alert("Task apagada", "Os dados foram apagados.");
    router.dismissTo("/(home)/tasks")
  };

  const handleCancel = () => {
    router.back();
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Título"
        value={title}
        onChangeText={(text) => {
          setValue("title", text);
          setTitle(text);
        }}
        style={styles.input}
        errors={errors.title}
      />
      <Input
        placeholder="Descrição"
        value={description}
        onChangeText={(text) => { setValue("description", text); setDescription(text); }}
        multiline
        style={styles.description}
        errors={errors.description}
      />
      <View style={styles.buttonContainer}>
        <ThemedButton style={styles.cancelButton} title="Cancelar" titleStyle={styles.cancelText} onPress={handleCancel} />
        <ThemedButton style={styles.confirmButton} title="Salvar" onPress={handleSubmit(handleSave)} />
      </View>
      <View style={styles.buttonContainer}>
        <ThemedButton style={styles.deleteButton} title="Deletar" onPress={handleDelete} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#EDF6FC",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  confirmButton: {
    width: "45%",
    padding: 10,
    borderRadius: 5,
    elevation: 3,
  },
  cancelButton: {
    width: "45%",
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#F44002"
  },
  deleteButton: {
    width: "45%",
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#F44002",
    borderWidth: 1,
    borderColor: "#FFF"
  },
  deleteText: {
    color: "#F44002",
  },
  cancelText: {
    color: "#F44002",
  },
  description: {
    height: 100,
    textAlignVertical: "top",
  }
});
