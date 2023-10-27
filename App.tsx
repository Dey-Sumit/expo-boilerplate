import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "~/hooks/auth.hook";

import AuthStackScreens from "./src/navigators/AuthStack.navigator";
import MainStackScreens from "./src/navigators/MainStack.navigator";

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {!isAuthenticated ? <AuthStackScreens /> : <MainStackScreens />}
    </NavigationContainer>
  );
};

export default App;
