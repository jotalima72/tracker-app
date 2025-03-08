import { getWeek, getWeekString } from '@/services/week';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';

export default function TasksLayout() {
  const [week, setWeek] = useState<Date>(new Date())

  useEffect(() => {
    const fetchWeek = async () => {
      const currentWeek = await getWeek()
      setWeek(currentWeek)
    }
    fetchWeek()
  }, [])
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Minhas Tarefas - " + getWeekString(week) }} />
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
