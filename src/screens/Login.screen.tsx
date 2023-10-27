import React from "react";
import { Button, StyleSheet, View } from "react-native";

import { useAuth } from "~/hooks/auth.hook";

// type ScreenProps = NativeStackScreenProps<AuthStackParams, "LoginScreen">;

const LoginScreen = () => {
  const { setAuthDetails } = useAuth();

  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={() => {
          setAuthDetails({
            mobileNumber: "1234567890",
            tokens: {
              accessToken: "yo_acessi",
              refreshToken: "yeh_refri",
            },
          });
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
