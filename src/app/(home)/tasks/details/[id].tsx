import ThemedButton from '@/components/button';
import { STATIC_TOKEN } from '@/services/constants';
import { getTask, Task } from '@/services/tasks';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';

export default function DetailScreen() {
  const [taskData, setTaskData] = useState<Task>();
  const { id } = useLocalSearchParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const task = await getTask(id as string, STATIC_TOKEN);
        if (task) {
          setTaskData(task);
        } else {
          Alert.alert("Erro", "Tarefa não encontrada.");
        }
      } catch (error) {
        console.error("Erro ao buscar a tarefa:", error);
        Alert.alert("Erro", "Não foi possível carregar a tarefa.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleEdit = () => {
    router.push({ pathname: `/tasks/edit/[id]`, params: { id: id as string } })
  };

  // Função para confirmar a execução na semana atual
  const handleConfirmExecution = () => {
    Alert.alert("Confirmação", "Execução confirmada para a semana atual.");
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{taskData?.title}</Text>
      <Text style={styles.description}>{taskData?.description}</Text>
      <View style={styles.executionContainer}>
        {taskData?.executions.map((execution, index) => (
          <View key={index} style={styles.executionCard}>
            <Text style={styles.executionWeek}>Semana: {execution.week}</Text>
            <Text style={styles.executionStatus}>
              Status: {execution.completed ? 'Concluída ✅' : 'Pendente ❌'}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.actionContainer}>
        <ThemedButton style={styles.button} title="Editar Task" onPress={handleEdit} />
        <ThemedButton style={styles.button} title="Confirmar Execução" onPress={handleConfirmExecution} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#EDF6FC',
    gap: 10,
    width: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  executionContainer: {
    marginTop: 10,
  },
  executionCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  executionWeek: {
    fontSize: 16,
    fontWeight: '500',
    color: '#444',
  },
  executionStatus: {
    fontSize: 16,
    marginTop: 5,
    color: '#007BFF',
  },
  actionContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '45%',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
  }
});
