import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#EDF6FC',
    justifyContent: 'center',
    gap: 16
  },
  text: {
    fontSize: 20,
    color: '#045676',
    fontWeight: 'bold',
  }
});
