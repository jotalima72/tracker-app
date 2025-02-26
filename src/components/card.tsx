import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

type CardProps = {
  title: string;
  description: string;
  status?: boolean;
  hasIcon?: boolean;
  onPress?: () => void;
};

export default function Card({ title, description, status, hasIcon, onPress }: CardProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description} 12341234 123 1234 1234124</Text>
      </View>
      {hasIcon ?
        <Icon
          name={status ? "check-circle" : "clock"}
          size={32}
          color={status ? "#4CAF50" : "#FF9800"}
        />
        : null
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#EDF6FC",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#03394F",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3.5,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
    marginRight: 20,
    gap: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#045676",
  },
  description: {
    fontSize: 14,
    color: "#045676",
    marginTop: 4,
  },
});
