import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LaunchScreen from "~/screens/Launch.screen";
import LoginScreen from "~/screens/Login.screen";
import { AuthStackParams } from "~/types/navigator.types";

const AuthStack = createNativeStackNavigator<AuthStackParams>();

/* -------------- the types for the auth stack params ------------- */

const AuthStackScreens = ({
  setIsAuthenticated,
}: {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerLargeTitleStyle: {
          fontSize: 24,
        },
      }}
    >
      <AuthStack.Screen
        name="LaunchScreen"
        component={LaunchScreen}
        options={{
          headerTitle: "Yo Launchy!",
        }}
      />
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        initialParams={{
          setIsAuthenticated,
        }}
        options={{
          headerTitle: "Enter Mobile Number",
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreens;
