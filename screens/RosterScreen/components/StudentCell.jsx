import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "../RosterScreen.styles";

export const StudentCell = ({ movieItem }) => {

  return (
    <View style={styles.studentCell}>
      <View style={styles.classCellLeft}>
        <Image source={{ uri: movieItem.srcPath }} style={classCellLeft} />
      </View>
      <View style={styles.classCellRight}>
        <Text style={styles.studentCellTitle}>{movieItem.name}</Text>
      </View>
    </View>
  );
};
