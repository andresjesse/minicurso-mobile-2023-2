import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Serie() {
  const [season, setSeason] = useState(0);

  return (
    <View style={styles.container}>
      <Button title="-" onPress={() => setSeason(season - 1)} />
      <Text style={styles.text}>{season}</Text>
      <Button title="+" onPress={() => setSeason(season + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    fontSize: 32,
    width: 50,
    textAlign: "center",
  },
});
