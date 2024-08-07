import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff" }}>Try editing me! 🎉</Text>
      <Link href="/profile">Profile</Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
