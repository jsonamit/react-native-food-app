import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const ActivitySpinner = ({ size, color })=> {
  return (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size={size} color={color} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
});

export default ActivitySpinner;