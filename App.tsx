import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Serie from "./components/Serie";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Series</Text>
      <StatusBar style="auto" />

      <Serie />
      <Serie />
      <Serie />
      <Serie />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
  },
});
