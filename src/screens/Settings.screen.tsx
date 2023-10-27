import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { useAuth } from "~/hooks/auth.hook";

const SettingsScreen = () => {
  const { resetAuthDetails } = useAuth();
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>

      <Button title="Logout" onPress={resetAuthDetails} />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
