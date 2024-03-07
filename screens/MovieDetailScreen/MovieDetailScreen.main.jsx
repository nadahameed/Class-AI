import React from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import { styles } from "./MovieDetailScreen.styles";

export default function MovieDetailScreen({navigation, route}) {
  // TODO: Recieve the movieItem by destructuring route params.
  const {movie} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {/* TODO: Configure this screen to have an image and appropriate text describing the movie. 
                See the example on the spec for design inspiration.
                Feel free to use the styles below. */}
        <Image style={styles.movieCellImage} source={{uri: movie.posterurl}}/>
        <Text style={styles.h1}>{movie.title}</Text>
        <Text style={styles.h2}>{movie.year}</Text>
        <Text style={styles.h2}>{movie.genres.join(", ")}</Text>
        <Text style={styles.h3}>{movie.actors.join(", ")}</Text>
        <Text style={styles.h4}>{movie.storyline}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
