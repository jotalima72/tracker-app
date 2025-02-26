import { Stack } from 'expo-router';

export default function LeaderboardLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Top tarefeiros" }} />
    </Stack>
  )
}
