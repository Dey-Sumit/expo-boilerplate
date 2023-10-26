import { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";

import AuthStackScreens from "./src/navigators/AuthStack.navigator";
import MainStackScreens from "./src/navigators/MainStack.navigator";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {!isAuthenticated ? (
        <AuthStackScreens setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <MainStackScreens />
      )}
    </NavigationContainer>
  );
};

export default App;
