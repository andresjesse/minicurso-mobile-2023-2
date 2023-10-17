import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

interface SerieProps {
  title: string;
}

export default function Serie({ title }: SerieProps) {
  const [season, setSeason] = useState(0);

  return (
    <View>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.container}>
        <Button title="-" onPress={() => setSeason(season - 1)} />
        <Text style={styles.text}>S{season}</Text>
        <Button title="+" onPress={() => setSeason(season + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    marginTop: 16,
    fontSize: 32,
  },
  text: {
    fontSize: 32,
    width: 50,
    textAlign: "center",
  },
});
