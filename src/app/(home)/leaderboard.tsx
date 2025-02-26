import { View, Text, StyleSheet } from 'react-native';

export default function LeaderboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>leaderboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#AFBED1',
    justifyContent: 'center',
    gap: 16
  },
  text: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  }
});
