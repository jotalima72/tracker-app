import Card from "@/components/card";
import IconButton from "@/components/iconButton";
import { STATIC_TOKEN } from "@/services/constants";
import { getTasks, Task } from "@/services/tasks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)

  async function fetchTasks() {
    setLoading(true);
    try {
      // const token = await AsyncStorage.getItem('jwt');
      // if (!token) {
      //   console.error("Token não encontrado!");
      //   return;
      // }
      const tasks = await getTasks(STATIC_TOKEN); 
      setTasks(tasks);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    } finally {
      setLoading(false);
    }
  }
  
  useFocusEffect(
    useCallback(() => {
      fetchTasks();
    }, [])
  );

  function handleCreateTask(): void {
    router.push("/tasks/create")
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={{ gap: 16, padding: 32 }}>
        {
          loading ?
            <Text style={styles.text}>Carregando...</Text>
            :
            (tasks.map((task) =>
              <Card key={task.id}
                title={task.title}
                description={task.description}
                status={task.executions[0]?.completed}
                hasIcon={true}
                onPress={() => router.push({ pathname: `/tasks/details/[id]`, params: { id: task.id } })}
              />
            ))

        }
      </ScrollView>
      <IconButton
        iconColor="white"
        iconName="plus"
        iconSize={28}
        containerStyle={styles.iconButton}
        activeOpacity={0.7}
        onPress={handleCreateTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    paddingHorizontal: 32,
    paddingTop: 32
  },
  iconButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    borderRadius: 50,
  }
});