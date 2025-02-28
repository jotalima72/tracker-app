import { Stack } from 'expo-router';

export default function TasksLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Minhas Tarefas" }} />
      <Stack.Screen name="create" options={{
        title: 'Criar tarefa',
        presentation: 'transparentModal',
        animation: 'slide_from_bottom',
        headerShown: false,
      }} />
      <Stack.Screen name="details/[id]" options={{
        title: 'Detalhes da tarefa',
      }} />
      <Stack.Screen name="edit/[id]" options={{
        title: 'Editar tarefa',
      }} />
    </Stack>
  )
}
