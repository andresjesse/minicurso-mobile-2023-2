import { View, Text, Button, StyleSheet, Image } from "react-native";
import React, { useState } from "react";

interface SerieProps {
  title: string;
  imageUrl: string;
}

export default function Serie({ title, imageUrl }: SerieProps) {
  const [season, setSeason] = useState(0);
  const [episode, setEpisode] = useState(0);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{title}</Text>

      <Image style={styles.image} source={{ uri: imageUrl }} />

      <View style={styles.container}>
        <Button title="-" onPress={() => setSeason(season - 1)} />
        <Text style={styles.text}>S{season}</Text>
        <Button title="+" onPress={() => setSeason(season + 1)} />

        <Button title="-" onPress={() => setEpisode(episode - 1)} />
        <Text style={styles.text}>E{episode}</Text>
        <Button title="+" onPress={() => setEpisode(episode + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "600",
  },
  text: {
    fontSize: 32,
    width: 50,
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
});
