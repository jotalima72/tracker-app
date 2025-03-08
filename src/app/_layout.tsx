import { Stack } from 'expo-router';
import { useAuth } from './auth';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default function RootLayout() {
  const { jwt, loading } = useAuth();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {jwt ? (
        <>
          <Stack.Screen name="(home)" />
        </>
      ) : (
      <Stack.Screen name="index" />
        )}
    </Stack>
  );
}
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});