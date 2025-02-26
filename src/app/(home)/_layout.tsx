import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Stack, Tabs } from 'expo-router';

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#045676',
        tabBarStyle: {
          backgroundColor: '#EDF6FC',
          borderTopWidth: 0,
          height: 60,
        },
        headerShown: false,
        animation: 'shift',
      }}>
      <Tabs.Screen name="tasks" options={{
        title: 'Minhas Tarefas',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="tasks" color={color} />,
      }} />
      <Tabs.Screen name="leaderboard" options={{
        title: 'Ranking',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="trophy" color={color} />,
      }} />
    </Tabs>
  );
}
