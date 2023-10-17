import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Serie from "./components/Serie";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Series</Text>
      <StatusBar style="auto" />

      <ScrollView>
        <Serie
          title="Flash"
          imageUrl="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/06/the-flash-1.png?w=1200&h=900&crop=1"
        />
        <Serie
          title="The Walking Dead"
          imageUrl="https://pop.proddigital.com.br/wp-content/uploads/sites/8/2022/11/20-curiosidades-incriveis-sobre-the-walking-dead-divulgacao.jpg"
        />
        <Serie
          title="Arrow"
          imageUrl="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/06/the-flash-1.png?w=1200&h=900&crop=1"
        />
        <Serie
          title="Breaking Bad"
          imageUrl="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/06/the-flash-1.png?w=1200&h=900&crop=1"
        />
      </ScrollView>
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
