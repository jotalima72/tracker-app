import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        animation: 'shift',
      }}>
      <Tabs.Screen name="tasks" options={{
        title: 'Minhas Tarefas',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="tasks" color={color} />,
      }} />
      <Tabs.Screen name="leaderboard" options={{
        title: 'placar',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="trophy" color={color} />,
      }} />
    </Tabs>
  );
}
