import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "../RosterScreen.styles";

export const StudentCell = ({ movieItem }) => {

  return (
    <View style={styles.studentCell}>
      <Text style={styles.studentCellTitle}>{movieItem.students}</Text>
    </View>
  );
};
