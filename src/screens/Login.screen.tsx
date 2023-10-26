import React from "react";
import { Button, StyleSheet, View } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AuthStackParams } from "~/types/navigator.types";

type ScreenProps = NativeStackScreenProps<AuthStackParams, "LoginScreen">;

const LoginScreen = ({ route }: ScreenProps) => {
  const { setIsAuthenticated } = route.params || {};
  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={() => {
          setIsAuthenticated?.(true);
        }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
