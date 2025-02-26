import Card from "@/components/card";
import { getTasks, Task } from "@/services/tasks";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  useEffect(() => {
    async function fetchTasks() {
      const tasks = await getTasks()
      setTasks(tasks)
    }
    fetchTasks()
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tasks</Text>
      <ScrollView style={styles.container} contentContainerStyle={{ gap: 16, padding: 32 }}>
        {
          tasks.map((task) =>
            <Card key={task.id}
              title={task.title}
              description={task.description}
              status={task.executions[0]?.completed}
              hasIcon={true}
            />
          )
        }
      </ScrollView>
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
  }
});