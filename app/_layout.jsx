import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const RootConatiner = () => {
  return (
    <View style={styles.container}>
      <Slot />
    </View>
  );
};

export default RootConatiner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
