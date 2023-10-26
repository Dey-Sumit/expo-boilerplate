import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AuthStackParams } from "../types/navigator.types";

type ScreenProps = NativeStackScreenProps<AuthStackParams, "LaunchScreen">;
const LaunchScreen = ({ navigation }: ScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>Launch Screen</Text>
      <Button
        title="go to Login"
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      />
    </View>
  );
};

export default LaunchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
