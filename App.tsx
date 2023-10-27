import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "~/hooks/auth.hook";

import AuthStackScreens from "./src/navigators/AuthStack.navigator";
import MainStackScreens from "./src/navigators/MainStack.navigator";

//
const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        {!isAuthenticated ? <AuthStackScreens /> : <MainStackScreens />}
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

export default App;
