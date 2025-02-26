import { Link, Stack } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen/>
      <View style={styles.container}>
        <Text style={styles.title}>404</Text>
        <Text style={styles.body}>Oops! This screen doesn't exist.</Text>
        <Link href="/" style={styles.link}>Go to home screen</Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
    marginVertical: 10,
  },
  link: {
    fontSize: 16,
    color: 'blue',
  },
});
